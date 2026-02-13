/**
 * AdminPageWrapper Component
 * A consistent wrapper for all admin pages that handles:
 * - Responsive layout
 * - Proper scrolling
 * - Fixed header
 * - Scrollable content area
 */

const AdminPageWrapper = ({ children, title, subtitle }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header - Fixed */}
      {(title || subtitle) && (
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 border-b border-[#E5E7EB] flex-shrink-0">
          {title && (
            <h1 className="text-xl font-semibold text-[#111827]">{title}</h1>
          )}
          {subtitle && (
            <p className="text-sm text-[#6B7280] mt-0.5">{subtitle}</p>
          )}
        </div>
      )}

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
};

export default AdminPageWrapper;
