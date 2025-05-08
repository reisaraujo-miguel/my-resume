import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const ContactInfo = () => {
	const { t } = useTranslation();

	return (
		<Section title={t("contact.title")}>
			<div className="contact-info">
				<div className="contact-item">
					<i className="fas fa-phone"></i>
					{t("contact.phone")}
				</div>
				<div className="contact-item">
					<i className="fas fa-envelope"></i>
					{t("contact.email")}
				</div>
				<div className="contact-item">
					<i className="fab fa-github"></i>
					<a href="https://github.com/reisaraujo-miguel" target="_blank">
						{t("contact.github")}
					</a>
				</div>
				<div className="contact-item">
					<i className="fab fa-linkedin"></i>
					<a
						href="https://www.linkedin.com/in/reisaraujo-miguel/"
						target="_blank"
					>
						{t("contact.linkedin")}
					</a>
				</div>
			</div>
		</Section>
	);
};

export default ContactInfo;
