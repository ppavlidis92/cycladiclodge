import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        ourStory: "Our Story",
        stayWithUs: "Stay With Us",
        experience: "The Experience",
        contact: "Get In Touch",
        language: "Language",
      },
      hero: {
        kicker: "Cycladic Lodge, Sifnos",
        title: "A quiet island stay shaped by light, sea, and simple elegance.",
        description:
          "A refined boutique escape inspired by Cycladic architecture, warm hospitality, and the calm rhythm of the Aegean.",
        awardCaption: "Awarded to",
        awardTitle: "Cycladic Lodge Sifnos",
        awardMeta: "Traveller Review Awards 2026",
      },
    },
  },
  el: {
    translation: {
      nav: {
        ourStory: "\u0397 \u0399\u03c3\u03c4\u03bf\u03c1\u03af\u03b1 \u039c\u03b1\u03c2",
        stayWithUs:
          "\u039c\u03b5\u03af\u03bd\u03b5\u03c4\u03b5 \u039c\u03b1\u03b6\u03af \u039c\u03b1\u03c2",
        experience: "\u0397 \u0395\u03bc\u03c0\u03b5\u03b9\u03c1\u03af\u03b1",
        contact: "\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1",
        language: "\u0393\u03bb\u03ce\u03c3\u03c3\u03b1",
      },
      hero: {
        kicker: "Cycladic Lodge, \u03a3\u03af\u03c6\u03bd\u03bf\u03c2",
        title:
          "\u039c\u03b9\u03b1 \u03ae\u03c1\u03b5\u03bc\u03b7 \u03bd\u03b7\u03c3\u03b9\u03c9\u03c4\u03b9\u03ba\u03ae \u03b4\u03b9\u03b1\u03bc\u03bf\u03bd\u03ae \u03bc\u03b5 \u03c6\u03c9\u03c2, \u03b8\u03ac\u03bb\u03b1\u03c3\u03c3\u03b1 \u03ba\u03b1\u03b9 \u03b1\u03c0\u03bb\u03ae \u03ba\u03bf\u03bc\u03c8\u03cc\u03c4\u03b7\u03c4\u03b1.",
        description:
          "\u0388\u03bd\u03b1 \u03b5\u03ba\u03bb\u03b5\u03c0\u03c4\u03c5\u03c3\u03bc\u03ad\u03bd\u03bf boutique \u03ba\u03b1\u03c4\u03b1\u03c6\u03cd\u03b3\u03b9\u03bf \u03b5\u03bc\u03c0\u03bd\u03b5\u03c5\u03c3\u03bc\u03ad\u03bd\u03bf \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03ba\u03c5\u03ba\u03bb\u03b1\u03b4\u03af\u03c4\u03b9\u03ba\u03b7 \u03b1\u03c1\u03c7\u03b9\u03c4\u03b5\u03ba\u03c4\u03bf\u03bd\u03b9\u03ba\u03ae, \u03c4\u03b7 \u03b6\u03b5\u03c3\u03c4\u03ae \u03c6\u03b9\u03bb\u03bf\u03be\u03b5\u03bd\u03af\u03b1 \u03ba\u03b1\u03b9 \u03c4\u03bf\u03bd \u03ae\u03c1\u03b5\u03bc\u03bf \u03c1\u03c5\u03b8\u03bc\u03cc \u03c4\u03bf\u03c5 \u0391\u03b9\u03b3\u03b1\u03af\u03bf\u03c5.",
        awardCaption: "\u0392\u03c1\u03b1\u03b2\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5",
        awardTitle: "Cycladic Lodge Sifnos",
        awardMeta: "Traveller Review Awards 2026",
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
