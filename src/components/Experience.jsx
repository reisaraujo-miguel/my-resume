import { useTranslation } from "react-i18next";
import Section from "./Section";

const Experience = ({ expType }) => {
	const { t } = useTranslation();

	return (
		<Section title={t(`${expType}.title`)}>
			<span className="top-level-list">
				<ul>
					{t(`${expType}.items`, { returnObjects: true }).map((exp, index) => (
						<li key={index}>
							<div className="experience-item">
								<h2>{exp.role}</h2>
								<p>
									{exp.org} | {exp.dates}
								</p>
								<span className="experience-list">
									<ul>
										{exp.details.map((responsibility, index) => (
											<li key={index}>{responsibility}</li>
										))}
									</ul>
								</span>
							</div>
						</li>
					))}
				</ul>
			</span>
		</Section>
	);
};

export default Experience;
