import { useTranslation } from "react-i18next";

const DownloadPDF = () => {
  const { t } = useTranslation();

  const handlePrint = () => {
    // Add professional ATS-friendly print styles
    const printStyle = document.createElement('style');
    printStyle.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      @media print {
        /* Reset everything for professional resume */
        * {
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }

        body {
          background: white !important;
          color: #000000 !important;
          font-family: "Atkinson Hyperlegible", sans-serif !important;
          font-size: 11pt !important;
          line-height: 1.15 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .container {
          width: 100% !important;
          max-width: 8.5in !important;
          margin: 0 auto !important;
          padding: 0.5in !important;
          background: white !important;
          box-shadow: none !important;
        }

        .content {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Professional header */
        h1 {
          font-size: 24pt !important;
          font-weight: bold !important;
          text-align: center !important;
          color: #000000 !important;
          margin-bottom: 0.2in !important;
          border-bottom: 2pt solid #000000 !important;
          padding-bottom: 0.1in !important;
        }

        h1::before {
          content: none !important;
        }

        /* Section headers */
        h2 {
          font-size: 14pt !important;
          font-weight: bold !important;
          color: #000000 !important;
          margin: 0.2in 0 0.1in 0 !important;
          border-bottom: 1pt solid #000000 !important;
          padding-bottom: 0.05in !important;
          text-transform: uppercase !important;
        }

        h2::before {
          content: none !important;
        }

        /* Job titles and education */
        h3 {
          font-size: 12pt !important;
          font-weight: bold !important;
          color: #000000 !important;
          margin: 0.1in 0 0.05in 0 !important;
        }

        /* Professional sections */
        .section {
          background: white !important;
          border: none !important;
          border-radius: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          page-break-inside: avoid !important;
        }

        /* Contact info */
        .contact-info {
          margin-bottom: 0.2in !important;
        }

        .contact-item {
          display: inline-block !important;
          margin: 0 0.1in !important;
          color: #000000 !important;
          font-size: 10pt !important;
        }

        .contact-item i {
          display: none !important;
        }

        /* Lists for professional formatting */
        ul {
          list-style: disc !important;
          margin-left: 0.3in !important;
          padding-left: 0 !important;
          border-left: none !important;
          color: #000000 !important;
        }

        li {
          margin-bottom: 0.05in !important;
          padding-left: 0 !important;
          font-size: 10pt !important;
          line-height: 1.2 !important;
        }

        li::before {
          content: none !important;
        }

        /* Experience and education items */
        .experience-item,
        .education-item,
        .volunteering-item {
          margin-bottom: 0.1in !important;
          page-break-inside: avoid !important;
        }

        .experience-item p,
        .education-item p,
        .volunteering-item p {
          margin: 0.02in 0 !important;
          color: #000000 !important;
          font-size: 10pt !important;
        }

        /* Skills - horizontal list */
        .skills-list {
          display: block !important;
          list-style: none !important;
          margin: 0.05in 0 !important;
          padding: 0 !important;
        }

        .skills-list li {
          display: inline-block !important;
          background: none !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 0.05in 0.05in 0 !important;
          font-size: 10pt !important;
        }

        .skills-list li::after {
          content: " • " !important;
          color: #000000 !important;
        }

        .skills-list li:last-child::after {
          content: "" !important;
        }

        .skills-list li i {
          display: none !important;
        }

        /* Interests */
        .interests-list {
          list-style: none !important;
          margin-left: 0 !important;
          padding-left: 0 !important;
          border-left: none !important;
        }

        .interests-list li {
          padding-left: 0 !important;
          margin-bottom: 0.05in !important;
        }

        .interests-list li::before {
          content: none !important;
        }

        .interests-list li strong {
          color: #000000 !important;
        }

        /* Hide UI elements */
        .download-btn,
        .language-toggle,
        #language-toggle {
          display: none !important;
        }

        /* Page breaks and formatting */
        @page {
          size: letter;
          margin: 0.5in;
        }

        /* Ensure good page breaks */
        h2, h3 {
          page-break-after: avoid !important;
        }

        .section {
          page-break-inside: avoid !important;
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
      className="download-btn"
      onClick={handlePrint}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      📄 {t("downloadPDF")}
    </button>
  );
};

export default DownloadPDF;

