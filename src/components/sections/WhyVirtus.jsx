import { useI18n } from "../../i18n.jsx";
import Container from "../layout/Container";

export default function WhyVirtus() {
  const { t, list } = useI18n();
  const points = list("why_list");

  return (
    <section className="why">
      <Container className="why__frame">
        <h2 className="why__title">{t("why_title")}</h2>

        <ul className="why__list">
          {points.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
