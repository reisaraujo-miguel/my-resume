import { useTranslation } from "react-i18next";
import Section from "./Section";

const ContactInfo = () => {
	const { t } = useTranslation();

	return (
		<Section title={t("contact.title")}>
			<span className="top-level-list contact-info">
				<ul>
					<li>
						<figure className="fas fa-phone"></figure>
						<a href="tel:+5524992796906">{t("contact.phone")}</a>
					</li>
					<li>
						<figure className="fas fa-envelope"></figure>
						<a href="mailto:reisaraujo.miguel@gmail.com">{t("contact.email")}</a>
					</li>
					<li>
						<figure className="fab fa-github"></figure>
						<a href="https://github.com/reisaraujo-miguel" target="_blank">
							{t("contact.github")}
						</a>
					</li>
					<li>
						<figure className="fab fa-linkedin"></figure>
						<a
							href="https://www.linkedin.com/in/reisaraujo-miguel/"
							target="_blank"
						>
							{t("contact.linkedin")}
						</a>
					</li>
				</ul>
			</span >
		</Section >
	);
};

export default ContactInfo;
