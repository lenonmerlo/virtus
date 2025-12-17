import { useI18n } from "../../i18n.jsx";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const select = value => {
    if (value !== lang) setLang(value);
  };

  return (
    <div className="lang-toggle" role="group" aria-label="Selecionar idioma">
      <button
        type="button"
        className={`lang-toggle__btn ${lang === "pt" ? "is-active" : ""}`}
        onClick={() => select("pt")}
      >
        PT
      </button>
      <button
        type="button"
        className={`lang-toggle__btn ${lang === "en" ? "is-active" : ""}`}
        onClick={() => select("en")}
      >
        EN
      </button>
    </div>
  );
}
