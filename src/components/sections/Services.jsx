import img3 from "../../assets/img3.png";
import logo from "../../assets/logo.png";
import { useI18n } from "../../i18n.jsx";
import Container from "../layout/Container";

export default function Services() {
  const { t, list } = useI18n();
  const items = list("services_items");

  return (
    <section className="services" id="servicos">
      <Container className="services__frame">
        <div
          className="services__left"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="services__leftOverlay" />
          <div className="services__brand">
            <img src={logo} className="services__miniLogo" alt="" />
            <h2 className="services__bigTitle">{t("services_title")}</h2>
          </div>
        </div>

        <div className="services__right">
          <h3 className="services__headline">{t("services_headline")}</h3>

          <div className="services__list">
            {items.map(item => (
              <div className="services__item" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
