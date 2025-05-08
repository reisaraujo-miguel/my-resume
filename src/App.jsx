import React from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./components/LanguageToggle";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageToggle />
      <div className="container">
        <div className="content">
          <h1>{t("name")}</h1>
          <ContactInfo />
          <Education />
          <Skills />
          <Interests />
          <Experience expType="professional-experience" />
          <Experience expType="volunteering-experience" />
        </div>
      </div>
    </div>
  );
}

export default App;
