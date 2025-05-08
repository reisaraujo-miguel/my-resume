import React from "react";
import { useTranslation } from "react-i18next";

import Section from "./Section";

const Skills = () => {
	const { t } = useTranslation();

	return (
		<Section title={t("skills.title")}>
			<ul className="skills-list">
				{t("skills.items", { returnObjects: true }).map((skill, index) => (
					<li key={index}>
						<i className={skill.icon}></i> {skill.name}
					</li>
				))}
			</ul>
		</Section>
	);
};

export default Skills;
