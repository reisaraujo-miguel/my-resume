import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const Education = () => {
	const { t } = useTranslation();

	return (
		<Section title={t("education.title")}>
			{t("education.items", { returnObjects: true }).map((item, index) => (
				<div className="education-item" key={index}>
					<h3>{item.degree}</h3>
					<p>{item.institution}</p>
					<p>({item.dates})</p>
				</div>
			))}
		</Section>
	);
};

export default Education;
