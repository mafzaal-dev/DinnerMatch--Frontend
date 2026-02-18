"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';
import { toast } from 'react-hot-toast';
import { CustomDropdown } from '@/components/common';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const emailTemplateSchema = yup.object().shape({
  name: yup.string().required('Template Name is required'),
  subject: yup.string().required('Subject is required'),
  type: yup.string().required('Mail Type is required'),
  plain_text_body: yup.string().required('Plain Text Body is required'),
  html_body: yup.string().nullable(), // Optional
  is_plain_text_only: yup.boolean(),
  include_unsubscribe: yup.boolean(),
});

const EmailManagerPage = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('updated_at_desc'); // Default sort

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(emailTemplateSchema),
    defaultValues: {
      name: '',
      subject: '',
      type: 'transactional',
      plain_text_body: 'Hi there,\n\nYour message here.',
      html_body: '<p>Hi there!</p>',
      is_plain_text_only: true,
      include_unsubscribe: false,
    },
  });

  const isPlainTextOnly = watch('is_plain_text_only');

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const response = await api.get(`${API_ENDPOINTS.EMAIL_TEMPLATES_LIST}?index=0&offset=100`);
      if (response.success && response.data) {
        setTemplates(response.data);
      }
    } catch (err) {
      console.error('Error fetching templates:', err);
      toast.error('Failed to load templates');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      // Construct payload to match API expectation (nested content object)
      const payload = {
        name: data.name,
        subject: data.subject,
        description: data.subject, // Fallback/map subject to description if needed
        type: data.type,
        content: {
            html: data.is_plain_text_only ? null : data.html_body,
            plain: data.plain_text_body
        },
        include_unsubscribe: data.include_unsubscribe,
        is_plain_text_only: data.is_plain_text_only
      };

      let response;
      if (editingTemplate) {
        // Update
        // Use EMAIL_TEMPLATES_UPDATE endpoint
        response = await api.put(`${API_ENDPOINTS.EMAIL_TEMPLATES_UPDATE}`, { 
            template_id: editingTemplate.id,
            ...payload 
        });
      } else {
        // Create
        // Use EMAIL_TEMPLATES_CREATE endpoint
        response = await api.post(API_ENDPOINTS.EMAIL_TEMPLATES_CREATE, payload);
      }

      if (response.success) {
        toast.success(`Template ${editingTemplate ? 'updated' : 'created'} successfully`);
        setShowModal(false);
        reset();
        setEditingTemplate(null);
        fetchTemplates();
      } else {
        throw new Error(response.message || 'Operation failed');
      }
    } catch (err) {
      console.error('Error saving template:', err);
      toast.error(err.message || 'Failed to save template');
    }
  };

  const handleEdit = (template) => {
    setEditingTemplate(template);
    
    // Check if content is nested
    const content = template.content || {};
    const plainText = typeof content.plain === 'string' ? content.plain : (template.plain_text_body || '');
    const htmlText = typeof content.html === 'string' ? content.html : (template.html_body || '');

    // Populate form
    setValue('name', template.name);
    // Use subject if available, otherwise try description, otherwise empty
    setValue('subject', template.subject || template.description || '');
    setValue('type', template.type || 'transactional');
    setValue('plain_text_body', plainText);
    setValue('html_body', htmlText);
    setValue('is_plain_text_only', template.is_plain_text_only ?? (!!plainText && !htmlText));
    setValue('include_unsubscribe', template.include_unsubscribe ?? false);
    
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this template?')) return;

    try {
      // Use EMAIL_TEMPLATES_DELETE which is a function taking id
      const response = await api.delete(API_ENDPOINTS.EMAIL_TEMPLATES_DELETE(id));
      if (response.success) {
        toast.success('Template deleted');
        fetchTemplates();
      }
    } catch (err) {
      toast.error('Failed to delete template');
    }
  };

  const openCreateModal = () => {
    setEditingTemplate(null);
    reset({
      name: '',
      subject: '',
      type: 'transactional',
      plain_text_body: 'Hi there,\n\nYour message here.',
      html_body: '<p>Hi there!</p>',
      is_plain_text_only: true,
      include_unsubscribe: false,
    });
    setShowModal(true);
  };

  const filteredTemplates = templates.filter(t => 
    (t.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
    (t.subject || t.description || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-[#111827] flex items-center gap-2">
            <span className="text-[#F97316]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Email Templates
          </h1>
          <div className="flex items-center gap-2">
             <input type="checkbox" id="show-archived" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
             <label htmlFor="show-archived" className="text-sm text-gray-600">Show archived</label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Import Prior Sends
          </button>
          <button 
            onClick={openCreateModal}
            className="px-4 py-2 bg-[#111827] text-white rounded-lg text-sm font-medium hover:bg-gray-900 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Template
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map(template => (
              <div key={template.id} className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-5 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-[#111827] text-lg">{template.name}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                    {template.type || 'Transactional'}
                  </span>
                </div>
                
                <p className="text-sm text-[#6B7280] mb-4 flex-1 line-clamp-3">
                  {template.subject || template.description}
                </p>
                
                <p className="text-xs text-[#9CA3AF] mb-4">
                  Updated: {new Date(template.updated_at || Date.now()).toLocaleDateString()}
                </p>
                
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
                  <button className="flex-1 px-3 py-2 bg-[#111827] text-white rounded-lg text-sm font-medium hover:bg-gray-900 flex items-center justify-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send
                  </button>
                  <button 
                    onClick={() => handleEdit(template)}
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button 
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                    title="Archive"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleDelete(template.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-gray-200"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-3 text-center">
                   <a href="#" className="text-xs text-gray-500 hover:text-orange-500 flex items-center justify-center gap-1">
                     <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                     Upload CSV Data
                   </a>
                </div>
              </div>
            ))}
            
            {/* Add 'Create New' Card as placeholder if needed, or just rely on button */}
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">
                {editingTemplate ? 'Edit Email Template' : 'Create Email Template'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <p className="text-sm text-gray-500 mb-6">
                Create a new email template. Plain text is required. Use placeholders like {'{{First Name}}'} and {'{{Dinner Date}}'}.
              </p>
              
              <form id="templateForm" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Template Name *</label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="e.g., Welcome Email"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    {...register('subject')}
                    placeholder="e.g., Welcome to DinnerMatch!"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mail Type</label>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <CustomDropdown
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        options={[
                          { value: 'transactional', label: 'Transactional' },
                          { value: 'marketing', label: 'Marketing' },
                          { value: 'update', label: 'Update' },
                        ]}
                        placeholder="Select type"
                      />
                    )}
                  />
                  {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
                </div>
                
                <p className="text-xs text-gray-500">No unsubscribe footer will be included.</p>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="include_unsubscribe"
                    {...register('include_unsubscribe')}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="include_unsubscribe" className="text-sm text-gray-700">
                    Include custom unsubscribe line
                  </label>
                </div>
                <p className="text-xs text-gray-500 ml-6">
                  Adds unsubscribe link to email footer. Unsubscribed users will be excluded from future sends.
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plain Text Body *</label>
                  <textarea
                    rows={6}
                    {...register('plain_text_body')}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 ${errors.plain_text_body ? 'border-red-500' : 'border-gray-300'}`}
                  ></textarea>
                  {errors.plain_text_body && <p className="text-red-500 text-xs mt-1">{errors.plain_text_body.message}</p>}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_plain_text_only"
                    {...register('is_plain_text_only')}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="is_plain_text_only" className="text-sm font-medium text-gray-700">
                    Send as plain text only
                  </label>
                </div>

                {!isPlainTextOnly && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">HTML Body (Optional)</label>
                    <textarea
                      rows={6}
                      {...register('html_body')}
                      placeholder="<p>Html content here</p>"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 font-mono text-sm"
                    ></textarea>
                  </div>
                )}
              </form>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 rounded-b-xl">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="templateForm"
                disabled={isSubmitting}
                className="px-4 py-2 bg-[#111827] text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : (editingTemplate ? 'Update Template' : 'Create Template')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailManagerPage;
