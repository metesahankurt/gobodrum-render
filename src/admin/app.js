export default {
  config: {
    // Custom styling for better editor experience
    head: {
      favicon: '/favicon.ico',
    },
    locales: ['en'],
    translations: {
      en: {
        'content-manager.containers.Edit.information': 'Article Information',
        'content-manager.containers.Edit.pluginHeader.title.new': 'Create new article',
        'content-manager.containers.Edit.pluginHeader.title.editing': 'Edit article',
      }
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: '#181826',
          primary600: '#4945ff',
          primary700: '#4338ca',
          neutral0: '#212134',
          neutral100: '#32324d',
          neutral150: '#4a4a6a',
          neutral200: '#666687',
          neutral300: '#a5a5ba',
          neutral400: '#c0c0cf',
          neutral500: '#8e8ea9',
          neutral600: '#666687',
          neutral700: '#4a4a6a',
          neutral800: '#32324d',
          neutral900: '#212134',
        },
      },
    },
  },
  bootstrap() {
    // Custom CSS for markdown editor and form styling
    const style = document.createElement('style');
    style.textContent = `
      /* Form sections styling */
      .content-manager-edit-view-layout {
        padding: 24px !important;
      }
      
      /* Field groups styling */
      .field-group {
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        border-radius: 12px !important;
        padding: 20px !important;
        margin-bottom: 24px !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
      }
      
      .field-group h3 {
        color: #1e293b !important;
        font-size: 18px !important;
        font-weight: 600 !important;
        margin-bottom: 16px !important;
        padding-bottom: 8px !important;
        border-bottom: 2px solid #e2e8f0 !important;
      }
      
      /* Input field styling */
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="number"],
      textarea,
      select {
        border: 1px solid #d1d5db !important;
        border-radius: 8px !important;
        padding: 12px !important;
        font-size: 14px !important;
        transition: all 0.2s ease !important;
      }
      
      input[type="text"]:focus,
      input[type="email"]:focus,
      input[type="url"]:focus,
      input[type="number"]:focus,
      textarea:focus,
      select:focus {
        border-color: #3b82f6 !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        outline: none !important;
      }
      
      /* Label styling */
      label {
        color: #374151 !important;
        font-weight: 500 !important;
        margin-bottom: 6px !important;
      }
      
      /* Required field indicator */
      label[required]:after {
        content: " *" !important;
        color: #dc2626 !important;
      }
      
      /* Category field styling */
      select[name*="Category"] {
        background-color: #fef3c7 !important;
        border-color: #f59e0b !important;
      }
      
      select[name="routeSection"] {
        background-color: #dbeafe !important;
        border-color: #3b82f6 !important;
        font-weight: 600 !important;
      }
      
      /* Boolean field styling */
      input[type="checkbox"] {
        width: 18px !important;
        height: 18px !important;
        border-radius: 4px !important;
      }
      
      /* Status and priority fields */
      select[name="status"] {
        background-color: #ecfdf5 !important;
        border-color: #10b981 !important;
      }
      
      /* Media upload area styling */
      .upload-area {
        border: 2px dashed #d1d5db !important;
        border-radius: 12px !important;
        padding: 32px !important;
        text-align: center !important;
        background: #f9fafb !important;
        transition: all 0.2s ease !important;
      }
      
      .upload-area:hover {
        border-color: #3b82f6 !important;
        background: #eff6ff !important;
      }
      
      /* Button styling */
      button[type="submit"] {
        background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
        border: none !important;
        border-radius: 8px !important;
        padding: 12px 24px !important;
        color: white !important;
        font-weight: 600 !important;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3) !important;
        transition: all 0.2s ease !important;
      }
      
      button[type="submit"]:hover {
        transform: translateY(-1px) !important;
        box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4) !important;
      }
      
      /* Save draft button */
      button[aria-label*="draft"] {
        background: linear-gradient(135deg, #6b7280, #4b5563) !important;
        border: none !important;
        border-radius: 8px !important;
        color: white !important;
      }
      
      /* Delete button */
      button[aria-label*="delete"] {
        background: linear-gradient(135deg, #dc2626, #b91c1c) !important;
        border: none !important;
        border-radius: 8px !important;
        color: white !important;
      }
      
      /* Collapsible sections */
      .collapsible-section {
        border: 1px solid #e5e7eb !important;
        border-radius: 12px !important;
        margin-bottom: 16px !important;
        overflow: hidden !important;
      }
      
      .collapsible-header {
        background: #f3f4f6 !important;
        padding: 16px 20px !important;
        cursor: pointer !important;
        font-weight: 600 !important;
        color: #1f2937 !important;
        border-bottom: 1px solid #e5e7eb !important;
      }
      
      .collapsible-header:hover {
        background: #e5e7eb !important;
      }
      
      .collapsible-content {
        padding: 20px !important;
        background: white !important;
      }
      
      /* Rich text editor improvements */
      .ql-toolbar.ql-snow {
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        border-radius: 8px 8px 0 0 !important;
        padding: 12px !important;
      }
      
      .ql-container.ql-snow {
        border: 1px solid #e2e8f0 !important;
        border-top: none !important;
        border-radius: 0 0 8px 8px !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
      }
      
      /* Relation field styling */
      .relation-field {
        background: #f0f9ff !important;
        border: 1px solid #0ea5e9 !important;
        border-radius: 8px !important;
        padding: 16px !important;
      }
      
      /* Tag input styling */
      .tag-input {
        background: #fef7cd !important;
        border: 1px solid #f59e0b !important;
        border-radius: 8px !important;
      }
      
      /* Error state styling */
      .field-error input,
      .field-error textarea,
      .field-error select {
        border-color: #dc2626 !important;
        background-color: #fef2f2 !important;
      }
      
      .error-message {
        color: #dc2626 !important;
        font-size: 12px !important;
        margin-top: 4px !important;
        font-weight: 500 !important;
      }
      
      /* Success state */
      .field-success input,
      .field-success textarea,
      .field-success select {
        border-color: #10b981 !important;
        background-color: #f0fdf4 !important;
      }
      
      /* Loading state */
      .loading-overlay {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: rgba(255, 255, 255, 0.8) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        z-index: 1000 !important;
      }
      
      /* Card-style layout for main form */
      .main-form-container {
        background: white !important;
        border-radius: 16px !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        overflow: hidden !important;
      }
      
      /* Header section */
      .form-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        padding: 24px !important;
        color: white !important;
      }
      
      .form-header h1 {
        color: white !important;
        font-size: 24px !important;
        font-weight: 700 !important;
        margin: 0 !important;
      }
      
      /* Side panel styling */
      .side-panel {
        background: #f8fafc !important;
        border-left: 1px solid #e2e8f0 !important;
        min-height: 100vh !important;
        padding: 24px !important;
      }
      
      /* Content-manager specific overrides */
      .content-manager-edit-view-layout .row {
        margin: 0 !important;
      }
      
      .content-manager-edit-view-layout .col-md-12 {
        padding: 0 !important;
      }
      
      /* Responsive improvements */
      @media (max-width: 768px) {
        .content-manager-edit-view-layout {
          padding: 16px !important;
        }
        
        .field-group {
          padding: 16px !important;
        }
        
        .collapsible-header {
          padding: 12px 16px !important;
        }
        
        .collapsible-content {
          padding: 16px !important;
        }
      }
      
      /* Markdown editor improvements */
      .ql-editor {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        line-height: 1.6 !important;
        font-size: 14px !important;
      }
      
      /* Make headings visually distinct in editor */
      .ql-editor h1, 
      .ql-editor [data-ql-heading="1"] {
        font-size: 28px !important;
        font-weight: 700 !important;
        color: #1f2937 !important;
        margin: 20px 0 10px 0 !important;
        border-bottom: 2px solid #e5e7eb !important;
        padding-bottom: 8px !important;
      }
      
      .ql-editor h2,
      .ql-editor [data-ql-heading="2"] {
        font-size: 24px !important;
        font-weight: 600 !important;
        color: #374151 !important;
        margin: 18px 0 8px 0 !important;
      }
      
      .ql-editor h3,
      .ql-editor [data-ql-heading="3"] {
        font-size: 20px !important;
        font-weight: 600 !important;
        color: #4b5563 !important;
        margin: 16px 0 6px 0 !important;
      }
      
      .ql-editor h4,
      .ql-editor [data-ql-heading="4"] {
        font-size: 18px !important;
        font-weight: 600 !important;
        color: #6b7280 !important;
        margin: 14px 0 6px 0 !important;
      }
      
      /* Better list styling */
      .ql-editor ul, .ql-editor ol {
        padding-left: 24px !important;
        margin: 12px 0 !important;
      }
      
      .ql-editor li {
        margin: 4px 0 !important;
        line-height: 1.5 !important;
      }
      
      /* Better paragraph spacing */
      .ql-editor p {
        margin: 12px 0 !important;
        line-height: 1.6 !important;
      }
      
      /* Highlight markdown syntax */
      .ql-editor strong,
      .ql-editor [data-ql-bold] {
        font-weight: 700 !important;
        color: #1f2937 !important;
      }
      
      .ql-editor em,
      .ql-editor [data-ql-italic] {
        font-style: italic !important;
        color: #374151 !important;
      }
      
      /* Better code styling */
      .ql-editor code {
        background-color: #f3f4f6 !important;
        padding: 2px 6px !important;
        border-radius: 4px !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        font-size: 13px !important;
        color: #dc2626 !important;
      }
      
      /* Better blockquote styling */
      .ql-editor blockquote {
        border-left: 4px solid #3b82f6 !important;
        margin: 16px 0 !important;
        padding: 12px 20px !important;
        background-color: #f8fafc !important;
        font-style: italic !important;
        color: #475569 !important;
      }
      
      /* Better link styling */
      .ql-editor a {
        color: #3b82f6 !important;
        text-decoration: underline !important;
      }
      
      /* Improve markdown mode button */
      button[aria-label*="markdown"] {
        background-color: #10b981 !important;
        color: white !important;
        border: none !important;
        padding: 6px 12px !important;
        border-radius: 6px !important;
        font-weight: 600 !important;
      }
      
      /* Make editor taller */
      .ql-container {
        min-height: 400px !important;
      }
      
      /* Improve toolbar */
      .ql-toolbar {
        border: 1px solid #d1d5db !important;
        border-radius: 8px 8px 0 0 !important;
        background-color: #f9fafb !important;
      }
      
      .ql-container {
        border: 1px solid #d1d5db !important;
        border-top: none !important;
        border-radius: 0 0 8px 8px !important;
      }
      
      /* Preview improvements */
      .markdown-preview {
        padding: 20px !important;
        background-color: #ffffff !important;
        border: 1px solid #e5e7eb !important;
        border-radius: 8px !important;
        margin-top: 12px !important;
      }
      
      .markdown-preview h1,
      .markdown-preview h2,
      .markdown-preview h3,
      .markdown-preview h4,
      .markdown-preview h5,
      .markdown-preview h6 {
        font-weight: 600 !important;
        margin: 16px 0 8px 0 !important;
        color: #1f2937 !important;
      }
      
      .markdown-preview h1 { font-size: 32px !important; }
      .markdown-preview h2 { font-size: 28px !important; }
      .markdown-preview h3 { font-size: 24px !important; }
      .markdown-preview h4 { font-size: 20px !important; }
      .markdown-preview h5 { font-size: 18px !important; }
      .markdown-preview h6 { font-size: 16px !important; }
      
      .markdown-preview p {
        margin: 12px 0 !important;
        line-height: 1.6 !important;
        color: #374151 !important;
      }
      
      .markdown-preview img {
        max-width: 100% !important;
        height: auto !important;
        border-radius: 8px !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        margin: 16px 0 !important;
      }
      
      .markdown-preview ul,
      .markdown-preview ol {
        padding-left: 24px !important;
        margin: 16px 0 !important;
      }
      
      .markdown-preview li {
        margin: 4px 0 !important;
        line-height: 1.5 !important;
      }
    `;
    document.head.appendChild(style);
  },
};