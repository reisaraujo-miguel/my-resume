import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		try {
			localStorage.setItem("resumeLang", lng);
		} catch (e) {
			console.error("Could not save language preference:", e);
		}
	};

	const getButtonClass = (lng) => (i18n.language === lng ? "active" : "");

	return (
		<div id="language-toggle">
			<button
				onClick={() => changeLanguage("pt")}
				className={getButtonClass("pt")}
			>
				PT
			</button>
			<button
				onClick={() => changeLanguage("en")}
				className={getButtonClass("en")}
			>
				EN
			</button>
		</div>
	);
};

export default LanguageToggle;
