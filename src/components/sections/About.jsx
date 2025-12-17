import { useI18n } from "../../i18n.jsx";
import Container from "../layout/Container";
import Button from "../ui/Button";

import img2 from "../../assets/img2.png";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

export default function About() {
  const { t } = useI18n();

  const handleScrollToContact = () => {
    const target = document.getElementById("contato");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="about" id="sobre">
      <div className="about__bg" style={{ backgroundImage: `url(${img2})` }} />
      <div className="about__overlay" />

      {/* Vetores (um deles “cortado” pelo overflow, como no print) */}
      <img className="about__vector about__vector--1" src={vector1} alt="" />
      <img className="about__vector about__vector--2" src={vector2} alt="" />

      <Container className="about__frame">
        <div className="about__bubble">
          <p className="about__lead">{t("about_lead")}</p>

          <p className="about__p">{t("about_body")}</p>

          <div className="about__btnWrap">
            <Button
              variant="outline"
              type="button"
              onClick={handleScrollToContact}
            >
              {t("about_cta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
