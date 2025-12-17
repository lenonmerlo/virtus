import { createContext, useContext, useMemo, useState } from "react";

const translations = {
  pt: {
    hero_title_line1: "Inteligência e segurança",
    hero_title_line2: "para multiplicar seu patrimônio.",
    hero_body:
      "Uma empresa fundada por Maria Gurgel, com soluções financeiras inovadoras e confiáveis para pessoas e empresas que desejam crescer com propósito.",
    hero_cta: "Conheça Maria Gurgel",
    hero_cta_secondary: "Ir para contato",

    about_lead:
      "Na Virtus Financial, acreditamos que cada decisão financeira molda o futuro.",
    about_body:
      "Nosso compromisso é transformar seus objetivos em conquistas sólidas e duradouras, com consultoria especializada e credibilidade internacional.",
    about_cta: "Fale com a Virtus Financial",

    services_title: "Nossos Serviços",
    services_headline:
      "Mais do que números, oferecemos estratégias inteligentes para ampliar seu patrimônio com segurança e planejamento de longo prazo.",
    services_items: [
      {
        title: "Consórcio Inteligente",
        body: "Mais que um consórcio, uma estratégia planejada para conquistar bens sem juros abusivos.",
      },
      {
        title: "Home Equity (Crédito com imóvel em Garantia)",
        body: "Liquidez imediata para investir, quitar dívidas ou alavancar seu patrimônio com segurança.",
      },
      {
        title: "Seguro de Vida Inteligente",
        body: "Proteção adaptada ao seu estilo de vida. Tranquilidade para quem você ama e para seu futuro.",
      },
      {
        title: "Previdência Privada de Vida",
        body: "Planejamento sólido para o futuro, construindo hoje a tranquilidade financeira de amanhã.",
      },
      {
        title: "Alavancagem Patrimonial",
        body: "Estratégias de aquisição de bens e diversificação de investimentos para expandir sua riqueza de forma sustentável.",
      },
      {
        title: "Treinamento e Desenvolvimento",
        body: "Treinamentos e capacitação financeira para equipes e empresas, com metodologias modernas e resultados mensuráveis.",
      },
    ],

    why_title: "Por que escolher a Virtus Financial?",
    why_list: [
      "Credibilidade e confiança em todos os processos.",
      "Planejamento financeiro com método próprio e acompanhamento personalizado alinhado aos seus objetivos.",
      "Experiência internacional — clientes no Brasil e no exterior já transformaram seus hábitos e resultados com a Virtus Financial.",
      "Equipe especializada e focada em resultados consistentes.",
    ],

    cta_title: "Chegou a hora de transformar seu dinheiro em liberdade real.",
    cta_body:
      "Seu patrimônio pode crescer com inteligência, propósito e segurança.",
    cta_cta: "Fale com a Virtus Financial",
    cta_contact_title: "Fale com a Virtus Financial",
    cta_contact_email: "E-mail",
    cta_contact_whatsapp: "Whatsapp",
    cta_contact_linkedin: "LinkedIn",
    cta_contact_instagram: "Instagram",
  },

  en: {
    hero_title_line1: "Intelligence and security",
    hero_title_line2: "to grow your wealth.",
    hero_body:
      "A company founded by Maria Gurgel, delivering innovative and reliable financial solutions for people and businesses that want to grow with purpose.",
    hero_cta: "Meet Maria Gurgel",
    hero_cta_secondary: "Go to contact",

    about_lead:
      "At Virtus Financial, we believe every financial decision shapes the future.",
    about_body:
      "Our commitment is to turn your goals into solid, long-lasting achievements with specialized consulting and international credibility.",
    about_cta: "Talk to Virtus Financial",

    services_title: "Our Services",
    services_headline:
      "More than numbers, we deliver intelligent strategies to expand your wealth safely and with long-term planning.",
    services_items: [
      {
        title: "Smart Consortium",
        body: "More than a consortium, a planned strategy to acquire assets without abusive interest rates.",
      },
      {
        title: "Home Equity (Real Estate–Backed Credit)",
        body: "Immediate liquidity to invest, pay off debt, or leverage your wealth with security.",
      },
      {
        title: "Smart Life Insurance",
        body: "Protection tailored to your lifestyle. Peace of mind for those you love and for your future.",
      },
      {
        title: "Private Life Pension",
        body: "Solid planning for the future, building tomorrow's financial peace of mind today.",
      },
      {
        title: "Wealth Leverage",
        body: "Strategies for acquiring assets and diversifying investments to sustainably expand your wealth.",
      },
      {
        title: "Training and Development",
        body: "Financial training and upskilling for teams and companies, with modern methodologies and measurable results.",
      },
    ],

    why_title: "Why choose Virtus Financial?",
    why_list: [
      "Credibility and trust in every process.",
      "Financial planning with a proprietary method and personalized follow-up aligned to your goals.",
      "International experience — clients in Brazil and abroad have already transformed their habits and results with Virtus Financial.",
      "Specialized team focused on consistent results.",
    ],

    cta_title: "It is time to turn your money into real freedom.",
    cta_body: "Your wealth can grow with intelligence, purpose, and security.",
    cta_cta: "Talk to Virtus Financial",
    cta_contact_title: "Talk to Virtus Financial",
    cta_contact_email: "Email",
    cta_contact_whatsapp: "WhatsApp",
    cta_contact_linkedin: "LinkedIn",
    cta_contact_instagram: "Instagram",
  },
};

const I18nContext = createContext({
  lang: "pt",
  t: key => key,
  setLang: () => {},
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("pt");

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: key => translations[lang]?.[key] ?? key,
      list: key => translations[lang]?.[key] ?? [],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
