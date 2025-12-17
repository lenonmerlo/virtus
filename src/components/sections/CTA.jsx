import img4 from "../../assets/img4.png";
import { useI18n } from "../../i18n.jsx";
import Container from "../layout/Container";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section className="cta" id="contato">
      <div className="cta__bg" style={{ backgroundImage: `url(${img4})` }} />
      <div className="cta__overlay" />

      <Container className="cta__frame">
        <div style={{ flex: 1 }}></div>
        <div className="cta__content">
          <h2 className="cta__title">{t("cta_title")}</h2>
          <p className="cta__text">{t("cta_body")}</p>
          <div className="cta__links">
            <p className="cta__linksTitle">{t("cta_cta")}</p>

            <div className="cta__actions">
              <a
                className="btn btn--outline"
                href="mailto:mairagmaciel@gmail.com"
              >
                <span className="btn__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v.4l7 4.2 7-4.2V6a1 1 0 0 0-1-1H6Zm13 4.6-5.92 3.55a2 2 0 0 1-2.16 0L5 9.6V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6Z" />
                  </svg>
                </span>
                {t("cta_contact_email")}
              </a>
              <a
                className="btn btn--outline"
                href="https://wa.me/558596251111"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 2a10 10 0 0 0-8.65 14.93L2 22l5.2-1.32A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.63 12.58l-.26.38A8 8 0 0 1 5.2 17.7l-.38-.26A8 8 0 0 1 12 4Zm-3 3.25c-.14 0-.3.02-.46.04-.45.07-.9.5-.9.97 0 .57.35 1.34.97 2.2.62.84 1.83 2.04 3.48 2.83 1.6.77 2.36.86 2.7.77.45-.12.87-.52.98-.95.12-.44.12-.82.02-.9-.13-.1-.71-.35-1.23-.55-.53-.2-.93-.34-1.08-.34-.18 0-.34.14-.53.35-.19.2-.38.44-.53.44-.13 0-.32-.09-.54-.25a7.1 7.1 0 0 1-1.6-1.38 5.9 5.9 0 0 1-1.02-1.63c-.06-.16 0-.27.13-.4.14-.12.26-.3.38-.45.12-.14.18-.24.24-.38.06-.14.02-.29-.02-.42-.1-.32-.9-2.08-1.1-2.45-.1-.18-.26-.25-.46-.25Z" />
                  </svg>
                </span>
                {t("cta_contact_whatsapp")}
              </a>
              <a
                className="btn btn--outline"
                href="https://linkedin.com/in/mairagurgel"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM4 8h2v12H4V8Zm5 0h2v1.6h.05C11.35 8.64 12.55 8 14.1 8 17.06 8 18 9.94 18 12.73V20h-2v-6.6c0-1.58-.04-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.48V20H9V8Z" />
                  </svg>
                </span>
                {t("cta_contact_linkedin")}
              </a>
              <a
                className="btn btn--outline"
                href="https://www.instagram.com/virtus.financial/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm11.25 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  </svg>
                </span>
                {t("cta_contact_instagram")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
