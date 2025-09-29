import { useTranslation } from "react-i18next";

const DownloadPDF = () => {
  const { t } = useTranslation();

  const handlePrint = () => {
    // Add professional ATS-friendly print styles
    const printStyle = document.createElement('style');
    printStyle.innerHTML = `
      @media print {
        /* ATS-Friendly Reset */
        * {
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }

        /* Professional ATS-Friendly Body */
        body {
          background: white !important;
          color: #000000 !important;
          font-family: "Arial", "Helvetica", sans-serif !important;
          font-size: 11pt !important;
          line-height: 1.2 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Container - A4 Paper Size */
        .container {
          width: 100% !important;
          max-width: 21cm !important;
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;
          box-shadow: none !important;
        }

        /* Content Area */
        .content {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Professional Header - ATS Friendly */
        .content header {
          font-size: 20pt !important;
          font-weight: bold !important;
          text-align: left !important;
          color: #000000 !important;
          margin-bottom: 0.3in !important;
          border-bottom: 2pt solid #000000 !important;
          padding: 0 0 0.1in 0 !important;
        }

        .content header::before {
          content: none !important;
        }

        /* Section Headers - Clean and Professional */
        h1 {
          font-size: 14pt !important;
          font-weight: bold !important;
          color: #000000 !important;
          margin: 0.2in 0 0.1in 0 !important;
          border-bottom: 1pt solid #333333 !important;
          padding-bottom: 0.05in !important;
          text-transform: uppercase !important;
        }

        h1::before {
          content: none !important;
        }

        /* Job Titles and Education */
        h2 {
          font-size: 12pt !important;
          font-weight: bold !important;
          color: #000000 !important;
          margin: 0.1in 0 0.05in 0 !important;
        }

        /* Professional Sections - Clean and Minimal */
        section {
          background: white !important;
          border: none !important;
          border-radius: 0 !important;
          margin: 0.15in 0 !important;
          padding: 0 !important;
          page-break-inside: avoid !important;
        }

        /* Contact Info - Professional Formatting */
        .contact-info {
          margin-bottom: 0.2in !important;
        }

        .contact-info ul {
          list-style: none !important;
          margin-left: 0 !important;
          padding-left: 0 !important;
          border-left: none !important;
        }

        .contact-info li {
          display: inline-block !important;
          margin: 0 0.15in 0.05in 0 !important;
          color: #000000 !important;
          font-size: 10pt !important;
        }

        .contact-info figure {
          display: none !important;
        }

        .contact-info a {
          color: #000000 !important;
          text-decoration: none !important;
        }

        /* Experience Lists - Professional Bullet Points */
        .experience-list ul,
        .education-list ul,
        .volunteering-list ul {
          list-style: disc !important;
          margin-left: 0.4in !important;
          padding-left: 0 !important;
          border-left: none !important;
          color: #000000 !important;
        }

        .experience-list li,
        .education-list li,
        .volunteering-list li {
          margin-bottom: 0.05in !important;
          padding-left: 0 !important;
          font-size: 10pt !important;
          line-height: 1.2 !important;
        }

        .experience-list li::before,
        .education-list li::before,
        .volunteering-list li::before {
          content: none !important;
        }

        /* Experience and Education Items */
        .experience-item,
        .education-item,
        .volunteering-item {
          margin-bottom: 0.15in !important;
          page-break-inside: avoid !important;
        }

        .experience-item p,
        .education-item p,
        .volunteering-item p {
          margin: 0.02in 0 !important;
          color: #000000 !important;
          font-size: 10pt !important;
        }

        /* Skills - Clean Horizontal List */
        .skills-list {
          display: block !important;
          list-style: none !important;
          margin: 0.1in 0 !important;
          padding: 0 !important;
        }

        .skills-list li {
          display: inline-block !important;
          background: none !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 0.08in 0.05in 0 !important;
          font-size: 10pt !important;
        }

        .skills-list li p {
          background: none !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          color: #000000 !important;
        }

       .skills-list li:last-child::after {
          content: "" !important;
        }

        .skills-list figure {
          display: none !important;
        }

        /* Interests - Clean Formatting */
        .interests-list {
          list-style: none !important;
          margin-left: 0 !important;
          padding-left: 0 !important;
          border-left: none !important;
        }

        .interests-list li {
          padding-left: 0 !important;
          margin-bottom: 0.05in !important;
          color: #000000 !important;
          font-size: 10pt !important;
        }

        .interests-list li::before {
          content: none !important;
        }

        .interests-list li strong {
          color: #000000 !important;
          font-weight: bold !important;
        }

        /* Hide UI Elements */
        #buttons,
        .button,
        .download-btn,
        .language-toggle {
          display: none !important;
        }

        /* Professional Page Settings */
        @page {
          size: A4;
          margin: 1.5cm;
        }

        /* Page Break Control */
        h2, h3 {
          page-break-after: avoid !important;
        }

        section {
          page-break-inside: avoid !important;
        }

        /* Ensure good spacing and readability */
        .top-level-list ul {
          list-style: none !important;
          margin-left: 0 !important;
          padding-left: 0 !important;
          border-left: none !important;
        }

        .top-level-list li {
          display: inline-block !important;
          color: #000000 !important;
          font-size: 10pt !important;
          margin: 0 0.15in 0.05in 0 !important;
        }

        .top-level-list li:before {
          content: none !important;
        }
      }
    `;
    document.head.appendChild(printStyle);

    // Set document title for PDF
    const originalTitle = document.title;
    document.title = `${t("name")} - Resume`;

    // Trigger print
    window.print();

    // Clean up
    setTimeout(() => {
      document.head.removeChild(printStyle);
      document.title = originalTitle;
    }, 100);
  };

  return (
    <button
      className="button"
      onClick={handlePrint}
    >
      {t("downloadPDF")}
    </button>
  );
};

export default DownloadPDF;

