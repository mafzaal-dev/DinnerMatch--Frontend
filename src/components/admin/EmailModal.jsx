import { CustomDropdown } from '@/components/common';
import { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';
import { toast } from 'react-hot-toast';

const EmailModal = ({ onClose, contextText, totalUsers, recipientCount, userIds = [] }) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [subject, setSubject] = useState('');
  const [isSending, setIsSending] = useState(false);

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
      console.error('Error fetching email templates:', err);
      toast.error('Failed to load email templates');
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async () => {
    if (!selectedTemplate) {
      toast.error('Please select an email template');
      return;
    }
    if (!subject.trim()) {
      toast.error('Please enter a subject');
      return;
    }
    if (!userIds || userIds.length === 0) {
      toast.error('No recipients selected');
      return;
    }

    try {
      setIsSending(true);

      const payload = {
        template: selectedTemplate,
        subject: subject.trim(),
        users_list: userIds,
      };

      const response = await api.post(API_ENDPOINTS.EMAIL_SEND_TO_USERS, payload);

      if (response.success) {
        toast.success(`Email sent to ${recipientCount} users successfully!`);
        onClose();
      } else {
        throw new Error(response.message || 'Failed to send emails');
      }
    } catch (err) {
      console.error('Error sending emails:', err);
      toast.error(err.message || 'Failed to send emails');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Email These Users</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Select a template, review recipients, and send emails
            </p>
            {contextText && (
              <p className="text-sm text-gray-500 mt-0.5">
                Context: {contextText}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto relative min-h-[200px]">
          {loading && templates.length === 0 ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/80 z-[1] rounded-lg">
              <svg className="h-8 w-8 animate-spin text-[#F97316]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <p className="text-sm text-gray-600">Loading templates…</p>
            </div>
          ) : null}
          <div className={`space-y-4 ${loading && templates.length === 0 ? "opacity-40 pointer-events-none" : ""}`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Template
              </label>
              <CustomDropdown
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                options={[
                  { value: '', label: 'Select a template' },
                  ...templates.map(template => ({
                    value: template.id,
                    label: template.name,
                  })),
                ]}
                placeholder="Select a template"
                disabled={loading}
                placement="top"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                maxLength={255}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Welcome to DinnerMatch!"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 rounded-b-xl">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSendEmail}
            disabled={isSending || !selectedTemplate || !subject.trim()}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send to {recipientCount} Users
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
