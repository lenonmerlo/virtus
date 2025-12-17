import { useI18n } from "../../i18n.jsx";
import Container from "../layout/Container";
import Button from "../ui/Button";
import LanguageToggle from "../ui/LanguageToggle";

import img1 from "../../assets/img1.png";
import logo from "../../assets/logo.png";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" style={{ backgroundImage: `url(${img1})` }} />
      <div className="hero__overlay" />

      <Container className="hero__frame">
        <div style={{ flex: 1 }}></div>
        <div className="hero__content">
          <div className="hero__topBar">
            <img src={logo} className="hero__logo" alt="Virtus Financial" />
            <LanguageToggle />
          </div>

          <h1 className="hero__title">
            {t("hero_title_line1")} <br />
            {t("hero_title_line2")}
          </h1>
          <p className="hero__text">{t("hero_body")}</p>

          <div className="hero__ctaRow">
            <Button href="https://www.mairagurgel.com.br/" target="_blank" rel="noopener noreferrer" variant="outline">{t("hero_cta")}</Button>
            <a className="btn btn--outline" href="#contato">
              {t("hero_cta_secondary")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
