import { useTranslation } from "react-i18next";
import LanguageToggle from "./components/LanguageToggle";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import DownloadPDF from "./components/DownloadPDF";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <nav id="buttons">
        <LanguageToggle />
        <DownloadPDF />
      </nav>
      <main className="container">
        <div className="content">
          <header>{t("name")}</header>
          <ContactInfo />
          <Education />
          <Skills />
          <Interests />
          <Experience expType="professional-experience" />
          <Experience expType="volunteering-experience" />
        </div>
      </main>
    </div >
  );
}

export default App;
