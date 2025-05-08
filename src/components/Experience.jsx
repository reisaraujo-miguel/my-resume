import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const Experience = ({ expType }) => {
	const { t } = useTranslation();

	return (
		<Section title={t(`${expType}.title`)}>
			<div>
				{t(`${expType}.items`, { returnObjects: true }).map((exp, index) => (
					<div className="experience-item" key={index}>
						<h3>{exp.role}</h3>
						<p>
							{exp.org} | {exp.dates}
						</p>
						<ul>
							{exp.details.map((responsibility, index) => (
								<li key={index}>{responsibility}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Experience;
