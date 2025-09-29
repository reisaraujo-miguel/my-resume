import { useTranslation } from "react-i18next";
import Section from "./Section";

const Education = () => {
	const { t } = useTranslation();

	return (
		<Section title={t("education.title")}>
			<span className="top-level-list">
				<ul>
					{t("education.items", { returnObjects: true }).map((item, index) => (
						<li>
							<div className="education-item">
								<h2 key={index}>{item.degree}</h2>
								<p>{item.institution}</p>
								<p>({item.dates})</p>
							</div>
						</li>
					))}
				</ul>
			</span>
		</Section >
	);
};

export default Education;
