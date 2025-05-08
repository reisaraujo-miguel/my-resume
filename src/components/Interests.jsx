import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const Interests = () => {
	const { t } = useTranslation();

	return (
		<Section title={t("interests.title")}>
			<ul className="interests-list">
				{t("interests.items", { returnObjects: true }).map(
					(interest, index) => (
						<li key={index}>
							<strong>{interest.category}:</strong> {interest.details}
						</li>
					),
				)}
			</ul>
		</Section>
	);
};

export default Interests;
