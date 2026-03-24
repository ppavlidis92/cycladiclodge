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
      story: {
        intro: [
          "Calliope was born in 1870 and, at just eight years old, found herself in Constantinople working and sending money back home.",
          "That day marked the beginning of what is now Cycladic Lodge, something she built slowly, little by little.",
          "Back in her homeland, where her heart belonged. Four generations later, in 2024, Olga came to renovate it and open its doors.",
          "Creating not simply a place to stay, but something familiar, comfortable, calm, and carefree, offering not only relaxation but also the peace and well-being anyone seeks beneath the blue sky. Right where our own heart belongs, on unique Sifnos.",
        ],
        columns: [
          {
            title: "WHITE",
            lines: [
              "In Cycladic style, filled with white that reflects the sun. Bright, warm, familiar.",
              "Simple and understated.",
            ],
          },
          {
            title: "GRAY",
            lines: [
              "Sifnian stone and shutters.",
              "Sand and shimmering golden dust.",
              "You run so you do not burn. Then you pause. You observe and unwind.",
            ],
          },
          {
            title: "GREEN",
            lines: [
              "Up in the mountain. Gazing at green and sky. With calm and silence. The high chapels.",
              "The side of Sifnos that is always quiet.",
            ],
          },
        ],
      },
      stay: {
        intro: [
          "White and grey, nestled in green, in the heart of Sifnos, in Katavati.",
          "Four independent rooms, newly built and renovated in 2024,",
          "fully equipped and with private parking.",
        ],
        amenities: [
          ["Free WiFi", "Air conditioning", "Parking"],
          ["TV", "Wardrobe", "Mini fridge"],
          ["Coffee/Tea Maker", "Iron", "Hair dryer"],
          ["Personal care products", "Safe box", "Towels"],
        ],
        rooms: [
          {
            id: "vathy",
            name: "VATHY",
            size: "20 S.q.m",
            guests: "2 Adults",
          },
          {
            id: "fykiada",
            name: "FYKIADA",
            size: "20 S.q.m",
            guests: "2 Adults",
          },
          {
            id: "vroulidia",
            name: "VROULIDIA",
            size: "18 S.q.m",
            guests: "2 Adults",
          },
          {
            id: "fasolou",
            name: "FASOLOU",
            size: "16 S.q.m",
            guests: "2 Adults",
          },
        ],
        labels: {
          previousImages: "Previous {{room}} images",
          nextImages: "Next {{room}} images",
          roomImage: "{{room}} room image {{index}}",
          roomTypes: "Cycladic Lodge room types",
        },
      },
      experience: {
        sections: [
          {
            id: "sea",
            title: "SEA",
            paragraphs: [
              [
                "From the well-known beaches of Chrysopigi, Platis",
                "Gialos, and Vathi, to the picturesque spots of",
                "Cheronissos and Kamares, and our own hidden gems",
                "Glyfo, Fasolou, Saoures, and Poulati, you will",
                "always find somewhere to cool off.",
              ],
              [
                "You will step in or dive, in green or blue.",
                "Until sunset. Beneath the tamarisk trees, with",
                "the loveliest whispers of the waves.",
              ],
            ],
          },
          {
            id: "stroll",
            title: "STROLL",
            paragraphs: [
              [
                "To Kastro for the dreamiest sunset, looking out",
                "towards the other islands of the Aegean, and to",
                "Artemonas for sweets and loukoumia.",
              ],
              [
                'To end up at the "steno". For the first drink at',
                "Doloma, a little buzz at Botzi, and the best last",
                "dance at Argo.",
              ],
            ],
          },
          {
            id: "delight",
            title: "DELIGHT",
            paragraphs: [
              [
                "Tselementes. One word, many flavors, images, and",
                "memories. Mizithra, Manoura, Sunday revithia,",
                "Mastelo.",
              ],
              [
                "By the sea or in the hidden little tavernas",
                "between the greenery and the alleys. At our own",
                "favorites: Ammoudia, Kelari, Tsikali, and Steki.",
              ],
            ],
          },
        ],
        labels: {
          imageAlt: "{{section}} experience photo {{index}}",
        },
      },
      contact: {
        title: "Contact info",
        address: "Katavati, Sifnos 84003, Greece",
        mapTitle: "Cycladic Lodge Sifnos contact map",
      },
      footer: {
        addressLineOne: "Katavati, Apollonia",
        addressLineTwo: "Sifnos 84003, Greece",
        phone: "Tel: +30 22840 32170",
        email: "Email:",
        mapTitle: "Cycladic Lodge Sifnos map",
        copyright: "All rights reserved © Cycladic Lodge 2024",
        cookieSettings: "Cookie Settings",
      },
    },
  },
  el: {
    translation: {
      nav: {
        ourStory: "\u0399\u03c3\u03c4\u03bf\u03c1\u03af\u03b1",
        stayWithUs: "\u0394\u03b9\u03b1\u03bc\u03bf\u03bd\u03ae",
        experience: "\u0395\u03bc\u03c0\u03b5\u03b9\u03c1\u03af\u03b1",
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
      story: {
        intro: [
          "\u0397 \u039a\u03b1\u03bb\u03bb\u03b9\u03cc\u03c0\u03b7 \u03b3\u03b5\u03bd\u03bd\u03ae\u03b8\u03b7\u03ba\u03b5 \u03c4\u03bf 1870 \u03ba\u03b1\u03b9 \u03c3\u03b5 \u03b7\u03bb\u03b9\u03ba\u03af\u03b1 8 \u03c7\u03c1\u03bf\u03bd\u03ce\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b7\u03bd \u03a0\u03cc\u03bb\u03b7 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03bf\u03c5\u03bb\u03ad\u03c8\u03b5\u03b9 \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03c3\u03c4\u03ad\u03bb\u03bd\u03b5\u03b9 \u03c7\u03c1\u03ae\u03bc\u03b1\u03c4\u03b1 \u03c0\u03af\u03c3\u03c9.",
          "\u0391\u03c0\u03cc \u03b5\u03ba\u03b5\u03af\u03bd\u03b7 \u03c4\u03b7\u03bd \u03b7\u03bc\u03ad\u03c1\u03b1 \u03be\u03b5\u03ba\u03af\u03bd\u03b7\u03c3\u03b5 \u03c4\u03bf \u03c3\u03b7\u03bc\u03b5\u03c1\u03b9\u03bd\u03cc Cycladic Lodge, \u03c4\u03bf \u03bf\u03c0\u03bf\u03af\u03bf \u03ba\u03b1\u03b9 \u03ad\u03c7\u03c4\u03b9\u03b6\u03b5 \u03c3\u03b9\u03b3\u03ac \u03c3\u03b9\u03b3\u03ac.",
          "\u03a0\u03af\u03c3\u03c9 \u03c3\u03c4\u03b7\u03bd \u03c0\u03b1\u03c4\u03c1\u03af\u03b4\u03b1 \u03c4\u03b7\u03c2, \u03b5\u03ba\u03b5\u03af \u03c0\u03bf\u03c5 \u03ac\u03bd\u03b7\u03ba\u03b5 \u03b7 \u03ba\u03b1\u03c1\u03b4\u03b9\u03ac \u03c4\u03b7\u03c2. \u03a4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b9\u03c2 \u03b3\u03b5\u03bd\u03b9\u03ad\u03c2 \u03b1\u03c1\u03b3\u03cc\u03c4\u03b5\u03c1\u03b1, \u03c4\u03bf 2024, \u03ad\u03c1\u03c7\u03b5\u03c4\u03b1\u03b9 \u03b7 \u038c\u03bb\u03b3\u03b1 \u03bd\u03b1 \u03c4\u03bf \u03b1\u03bd\u03b1\u03ba\u03b1\u03b9\u03bd\u03af\u03c3\u03b5\u03b9 \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03c4\u03bf \u03b5\u03b3\u03ba\u03b1\u03b9\u03bd\u03b9\u03ac\u03c3\u03b5\u03b9.",
          "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ce\u03bd\u03c4\u03b1\u03c2 \u03cc\u03c7\u03b9 \u03b1\u03c0\u03bb\u03ac \u03ad\u03bd\u03b1 \u03ba\u03b1\u03c4\u03ac\u03bb\u03c5\u03bc\u03b1, \u03b1\u03bb\u03bb\u03ac \u03ba\u03ac\u03c4\u03b9 \u03bf\u03b9\u03ba\u03b5\u03af\u03bf, comfort, \u03ae\u03c1\u03b5\u03bc\u03bf \u03ba\u03b1\u03b9 \u03be\u03ad\u03b3\u03bd\u03bf\u03b9\u03b1\u03c3\u03c4\u03bf, \u03c0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03bf\u03bd\u03c4\u03b1\u03c2 \u03cc\u03c7\u03b9 \u03b1\u03c0\u03bb\u03ac \u03c7\u03b1\u03bb\u03ac\u03c1\u03c9\u03c3\u03b7 \u03b1\u03bb\u03bb\u03ac \u03ba\u03b1\u03b9 \u03c4\u03b7\u03bd \u03b7\u03c1\u03b5\u03bc\u03af\u03b1/\u03b5\u03c5\u03b5\u03be\u03af\u03b1 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03b1\u03b6\u03b7\u03c4\u03b5\u03af \u03bf \u03bf\u03c0\u03bf\u03b9\u03bf\u03c3\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03ba\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03bc\u03c0\u03bb\u03b5 \u03bf\u03c5\u03c1\u03b1\u03bd\u03cc. \u0395\u03ba\u03b5\u03af \u03c0\u03bf\u03c5 \u03b1\u03bd\u03ae\u03ba\u03b5\u03b9 \u03b7 \u03b4\u03b9\u03ba\u03ae \u03bc\u03b1\u03c2 \u03ba\u03b1\u03c1\u03b4\u03b9\u03ac, \u03c3\u03c4\u03b7 \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ae \u03a3\u03af\u03c6\u03bd\u03bf.",
        ],
        columns: [
          {
            title: "\u0391\u03a3\u03a0\u03a1\u039f",
            lines: [
              "\u03a3\u03b5 \u03ba\u03c5\u03ba\u03bb\u03b1\u03b4\u03af\u03c4\u03b9\u03ba\u03bf \u03cd\u03c6\u03bf\u03c2, \u03b3\u03b5\u03bc\u03ac\u03c4\u03bf \u03bb\u03b5\u03c5\u03ba\u03cc \u03c4\u03bf \u03bf\u03c0\u03bf\u03af\u03bf \u03b1\u03bd\u03c4\u03b1\u03bd\u03b1\u03ba\u03bb\u03ac \u03c4\u03bf\u03bd \u03ae\u03bb\u03b9\u03bf. \u03a6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc, \u03b6\u03b5\u03c3\u03c4\u03cc, \u03b3\u03bd\u03ce\u03c1\u03b9\u03bc\u03bf.",
              "\u039b\u03b9\u03c4\u03cc \u03ba\u03b1\u03b9 \u03b1\u03c0\u03ad\u03c1\u03b9\u03c4\u03c4\u03bf.",
            ],
          },
          {
            title: "\u0393\u039a\u03a1\u0399",
            lines: [
              "\u03a3\u03b9\u03c6\u03bd\u03ad\u03b9\u03ba\u03b7 \u03c0\u03bb\u03ac\u03ba\u03b1 \u03ba\u03b1\u03b9 \u03c0\u03b1\u03bd\u03c4\u03b6\u03bf\u03cd\u03c1\u03b9\u03b1.",
              "\u0386\u03bc\u03bc\u03bf\u03c2 \u03ba\u03b1\u03b9 \u03c7\u03c1\u03c5\u03c3\u03cc\u03c3\u03ba\u03bf\u03bd\u03b7 \u03c0\u03bf\u03c5 \u03b3\u03c5\u03b1\u03bb\u03af\u03b6\u03b5\u03b9.",
              "\u03a4\u03c1\u03ad\u03c7\u03b5\u03b9\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bc\u03b7 \u03ba\u03b1\u03b5\u03af\u03c2. \u03a0\u03b1\u03c1\u03b1\u03c4\u03b7\u03c1\u03b5\u03af\u03c2 \u03ba\u03b1\u03b9 \u03b7\u03c1\u03b5\u03bc\u03b5\u03af\u03c2.",
            ],
          },
          {
            title: "\u03a0\u03a1\u0391\u03a3\u0399\u039d\u039f",
            lines: [
              "\u03a3\u03c4\u03bf \u03b2\u03bf\u03c5\u03bd\u03cc. \u0391\u03b3\u03bd\u03b1\u03bd\u03c4\u03b5\u03cd\u03bf\u03bd\u03c4\u03b1\u03c2 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03ba\u03b1\u03b9 \u03bf\u03c5\u03c1\u03b1\u03bd\u03cc. \u039c\u03b5 \u03b7\u03c1\u03b5\u03bc\u03af\u03b1 \u03ba\u03b1\u03b9 \u03b7\u03c3\u03c5\u03c7\u03af\u03b1. \u03a4\u03b1 \u03c8\u03b7\u03bb\u03ac \u03be\u03c9\u03ba\u03bb\u03ae\u03c3\u03b9\u03b1.",
              "\u03a4\u03b7 \u03bc\u03b5\u03c1\u03b9\u03ac \u03c4\u03b7\u03c2 \u03a3\u03af\u03c6\u03bd\u03bf\u03c5 \u03c0\u03bf\u03c5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03ac\u03bd\u03c4\u03b1 \u03ae\u03c3\u03c5\u03c7\u03b7.",
            ],
          },
        ],
      },
      stay: {
        intro: [
          "\u0386\u03c3\u03c0\u03c1\u03bf \u03ba\u03b1\u03b9 \u03b3\u03ba\u03c1\u03b9, \u03bc\u03ad\u03c3\u03b1 \u03c3\u03c4\u03bf \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03c3\u03c4\u03b7\u03bd \u03ba\u03b1\u03c1\u03b4\u03b9\u03ac \u03c4\u03b7\u03c2 \u03a3\u03af\u03c6\u03bd\u03bf\u03c5, \u03c3\u03c4\u03b1 \u039a\u03b1\u03c4\u03b1\u03b2\u03b1\u03c4\u03ac.",
          "\u03a4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1 \u03b1\u03bd\u03b5\u03be\u03ac\u03c1\u03c4\u03b7\u03c4\u03b1 \u03b4\u03c9\u03bc\u03ac\u03c4\u03b9\u03b1, \u03bd\u03b5\u03cc\u03ba\u03c4\u03b9\u03c3\u03c4\u03b1 \u03ba\u03b1\u03b9 \u03b1\u03bd\u03b1\u03ba\u03b1\u03b9\u03bd\u03b9\u03c3\u03bc\u03ad\u03bd\u03b1 \u03c4\u03bf 2024,",
          "\u03c0\u03bb\u03ae\u03c1\u03c9\u03c2 \u03b5\u03be\u03bf\u03c0\u03bb\u03b9\u03c3\u03bc\u03ad\u03bd\u03b1 \u03ba\u03b1\u03b9 \u03bc\u03b5 \u03b9\u03b4\u03b9\u03c9\u03c4\u03b9\u03ba\u03cc parking.",
        ],
        amenities: [
          [
            "\u0394\u03c9\u03c1\u03b5\u03ac\u03bd WiFi",
            "\u039a\u03bb\u03b9\u03bc\u03b1\u03c4\u03b9\u03c3\u03bc\u03cc\u03c2",
            "\u03a0\u03ac\u03c1\u03ba\u03b9\u03bd\u03b3\u03ba",
          ],
          [
            "\u03a4\u03b7\u03bb\u03b5\u03cc\u03c1\u03b1\u03c3\u03b7",
            "\u039d\u03c4\u03bf\u03c5\u03bb\u03ac\u03c0\u03b1",
            "\u039c\u03b9\u03bd\u03b9 \u03c8\u03c5\u03b3\u03b5\u03af\u03bf",
          ],
          [
            "\u039a\u03b1\u03c6\u03b5\u03c4\u03b9\u03ad\u03c1\u03b1/\u03c4\u03c3\u03b1\u03b3\u03b9\u03ad\u03c1\u03b1",
            "\u03a3\u03af\u03b4\u03b5\u03c1\u03bf",
            "\u03a0\u03b9\u03c3\u03c4\u03bf\u03bb\u03ac\u03ba\u03b9 \u03bc\u03b1\u03bb\u03bb\u03b9\u03ce\u03bd",
          ],
          [
            "\u03a0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1 \u03c0\u03c1\u03bf\u03c3\u03c9\u03c0\u03b9\u03ba\u03ae\u03c2 \u03c6\u03c1\u03bf\u03bd\u03c4\u03af\u03b4\u03b1\u03c2",
            "\u03a7\u03c1\u03b7\u03bc\u03b1\u03c4\u03bf\u03ba\u03b9\u03b2\u03ce\u03c4\u03b9\u03bf",
            "\u03a0\u03b5\u03c4\u03c3\u03ad\u03c4\u03b5\u03c2",
          ],
        ],
        rooms: [
          {
            id: "vathy",
            name: "\u0392\u0391\u0398\u03a5",
            size: "20 \u03c4.\u03bc",
            guests: "2 \u0395\u03bd\u03ae\u03bb\u03b9\u03ba\u03b5\u03c2",
          },
          {
            id: "fykiada",
            name: "\u03a6\u03a5\u039a\u0399\u0391\u0394\u0391",
            size: "20 \u03c4.\u03bc",
            guests: "2 \u0395\u03bd\u03ae\u03bb\u03b9\u03ba\u03b5\u03c2",
          },
          {
            id: "vroulidia",
            name: "\u0392\u03a1\u039f\u03a5\u039b\u0399\u0394\u0399\u0391",
            size: "18 \u03c4.\u03bc",
            guests: "2 \u0395\u03bd\u03ae\u03bb\u03b9\u03ba\u03b5\u03c2",
          },
          {
            id: "fasolou",
            name: "\u03a6\u0391\u03a3\u039f\u039b\u039f\u03a5",
            size: "16 \u03c4.\u03bc",
            guests: "2 \u0395\u03bd\u03ae\u03bb\u03b9\u03ba\u03b5\u03c2",
          },
        ],
        labels: {
          previousImages: "\u03a0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b5\u03c2 \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2 \u03c4\u03bf\u03c5 {{room}}",
          nextImages: "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03b5\u03c2 \u03c6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2 \u03c4\u03bf\u03c5 {{room}}",
          roomImage: "\u03a6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b1 \u03b4\u03c9\u03bc\u03b1\u03c4\u03af\u03bf\u03c5 {{room}} {{index}}",
          roomTypes: "\u03a4\u03cd\u03c0\u03bf\u03b9 \u03b4\u03c9\u03bc\u03b1\u03c4\u03af\u03c9\u03bd Cycladic Lodge",
        },
      },
      experience: {
        sections: [
          {
            id: "sea",
            title: "\u0398\u0391\u039b\u0391\u03a3\u03a3\u0391",
            paragraphs: [
              [
                "\u0391\u03c0\u03cc \u03c4\u03b9\u03c2 \u03c0\u03b9\u03bf \u03b3\u03bd\u03c9\u03c3\u03c4\u03ad\u03c2 \u03a7\u03c1\u03c5\u03c3\u03bf\u03c0\u03b7\u03b3\u03ae, \u03a0\u03bb\u03b1\u03c4\u03cd \u0393\u03c5\u03b1\u03bb\u03cc, \u0392\u03b1\u03b8\u03cd,",
                "\u03ad\u03c9\u03c2 \u03c4\u03b9\u03c2 \u03c0\u03b9\u03bf \u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ad\u03c2 \u03a7\u03b5\u03c1\u03c1\u03cc\u03bd\u03b7\u03c3\u03bf & \u039a\u03b1\u03bc\u03ac\u03c1\u03b5\u03c2, \u03ba\u03b1\u03b9 \u03c4\u03b1",
                "\u03b4\u03b9\u03ba\u03ac \u03bc\u03b1\u03c2 \u03b1\u03c0\u03cc\u03ba\u03c1\u03c5\u03c6\u03b1 \u03b4\u03b9\u03b1\u03bc\u03ac\u03bd\u03c4\u03b9\u03b1 \u0393\u03bb\u03c5\u03c6\u03cc, \u03a6\u03b1\u03c3\u03bf\u03bb\u03bf\u03cd, \u03a3\u03b1\u03bf\u03cd\u03c1\u03b5\u03c2",
                "\u03ba\u03b1\u03b9 \u03a0\u03bf\u03c5\u03bb\u03ac\u03c4\u03b7 \u03cc\u03bb\u03bf \u03ba\u03b1\u03b9 \u03ba\u03ac\u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b4\u03c1\u03bf\u03c3\u03b9\u03c3\u03c4\u03b5\u03af\u03c2.",
              ],
              [
                "\u0398\u03b1 \u03bc\u03c0\u03b5\u03b9\u03c2 \u03ae \u03b8\u03b1 \u03b2\u03bf\u03c5\u03c4\u03ae\u03be\u03b5\u03b9\u03c2, \u03c3\u03b5 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03ae \u03bc\u03c0\u03bb\u03b5.",
                "\u039c\u03ad\u03c7\u03c1\u03b9 \u03c4\u03bf \u03c3\u03bf\u03cd\u03c1\u03bf\u03c5\u03c0\u03bf. \u039a\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc \u03c4\u03b1 \u03b1\u03bb\u03bc\u03c5\u03c1\u03af\u03ba\u03b9\u03b1 \u03bc\u03b5",
                "\u03c4\u03bf\u03c5\u03c2 \u03c0\u03b9\u03bf \u03c9\u03c1\u03b1\u03af\u03bf\u03c5\u03c2 \u03c8\u03af\u03b8\u03c5\u03c1\u03bf\u03c5\u03c2 \u03c4\u03bf\u03c5 \u03ba\u03cd\u03bc\u03b1\u03c4\u03bf\u03c2.",
              ],
            ],
          },
          {
            id: "stroll",
            title: "\u0392\u039f\u039b\u03a4\u0391",
            paragraphs: [
              [
                "\u03a3\u03c4\u03bf \u039a\u03ac\u03c3\u03c4\u03c1\u03bf \u03bc\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c0\u03b9\u03bf \u03bf\u03bd\u03b5\u03b9\u03c1\u03b9\u03ba\u03cc \u03c3\u03bf\u03cd\u03c1\u03bf\u03c5\u03c0\u03bf, \u03b2\u03bb\u03ad\u03c0\u03bf\u03bd\u03c4\u03b1\u03c2",
                "\u03c4\u03b1 \u03c5\u03c0\u03cc\u03bb\u03bf\u03b9\u03c0\u03b1 \u03bd\u03b7\u03c3\u03b9\u03ac \u03c4\u03bf\u03c5 \u0391\u03b9\u03b3\u03b1\u03af\u03bf\u03c5, \u03ba\u03b1\u03b9 \u03c3\u03c4\u03bf\u03bd \u0391\u03c1\u03c4\u03b5\u03bc\u03ce\u03bd\u03b1",
                "\u03b3\u03b9\u03b1 \u03b3\u03bb\u03c5\u03ba\u03ac \u03ba\u03b1\u03b9 \u03bb\u03bf\u03c5\u03ba\u03bf\u03cd\u03bc\u03b9\u03b1.",
              ],
              [
                "\u0393\u03b9\u03b1 \u03bd\u03b1 \u03ba\u03b1\u03c4\u03b1\u03bb\u03ae\u03be\u03b5\u03b9\u03c2 \u03c3\u03c4\u03bf \"\u03c3\u03c4\u03b5\u03bd\u03cc\". \u0393\u03b9\u03b1 \u03c4\u03bf \u03c0\u03c1\u03ce\u03c4\u03bf \u03c0\u03bf\u03c4\u03cc",
                "\u03c3\u03c4\u03bf \u0394\u03cc\u03bb\u03c9\u03bc\u03b1, \u03c3\u03bf\u03c5\u03c3\u03bf\u03cd \u03c3\u03c4\u03bf \u039c\u03c0\u03cc\u03c4\u03b6\u03b9 \u03ba\u03b1\u03b9 \u03c4\u03bf\u03bd \u03c0\u03b9\u03bf \u03c9\u03c1\u03b1\u03af\u03bf",
                "\u03c7\u03bf\u03c1\u03cc, \u03b3\u03b9\u03b1 \u03c3\u03b2\u03ae\u03c3\u03b9\u03bc\u03bf, \u03c3\u03c4\u03b7\u03bd \u0391\u03c1\u03b3\u03ce.",
              ],
            ],
          },
          {
            id: "delight",
            title: "\u0391\u03a0\u039f\u039b\u0391\u03a5\u03a3\u0397",
            paragraphs: [
              [
                "\u03a4\u03c3\u03b5\u03bb\u03b5\u03bc\u03b5\u03bd\u03c4\u03ad\u03c2. \u039c\u03b9\u03b1 \u03bb\u03ad\u03be\u03b7, \u03c0\u03bf\u03bb\u03bb\u03ad\u03c2 \u03b3\u03b5\u03cd\u03c3\u03b5\u03b9\u03c2, \u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2 \u03ba\u03b1\u03b9",
                "\u03b1\u03bd\u03b1\u03bc\u03bd\u03ae\u03c3\u03b5\u03b9\u03c2. \u039c\u03c5\u03b6\u03ae\u03b8\u03c1\u03b1, \u039c\u03b1\u03bd\u03bf\u03cd\u03c1\u03b1, \u03ba\u03c5\u03c1\u03b9\u03b1\u03ba\u03ac\u03c4\u03b9\u03ba\u03b1",
                "\u03a1\u03b5\u03b2\u03cd\u03b8\u03b9\u03b1, \u039c\u03b1\u03c3\u03c4\u03ad\u03bb\u03bf.",
              ],
              [
                "\u0394\u03af\u03c0\u03bb\u03b1 \u03c3\u03c4\u03b7 \u03b8\u03ac\u03bb\u03b1\u03c3\u03c3\u03b1 \u03ae \u03c3\u03c4\u03b1 \u03ba\u03c1\u03c5\u03c6\u03ac \u03c4\u03b1\u03b2\u03b5\u03c1\u03bd\u03ac\u03ba\u03b9\u03b1 \u03b1\u03bd\u03ac\u03bc\u03b5\u03c3\u03b1 \u03b1\u03c0\u03cc \u03c4\u03bf",
                "\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03ba\u03b1\u03b9 \u03c4\u03b1 \u03c3\u03bf\u03ba\u03ac\u03ba\u03b9\u03b1. \u03a3\u03c4\u03b1 \u03b4\u03b9\u03ba\u03ac \u03bc\u03b1\u03c2 \u03b1\u03b3\u03b1\u03c0\u03b7\u03bc\u03ad\u03bd\u03b1:",
                "\u0391\u03bc\u03bc\u03bf\u03c5\u03b4\u03b9\u03ac, \u039a\u03b5\u03bb\u03ac\u03c1\u03b9, \u03a4\u03c3\u03b9\u03ba\u03ac\u03bb\u03b9, \u03ba\u03b1\u03b9 \u03c4\u03bf \u03a3\u03c4\u03ad\u03ba\u03b9.",
              ],
            ],
          },
        ],
        labels: {
          imageAlt: "\u03a6\u03c9\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b1 \u03b5\u03bc\u03c0\u03b5\u03b9\u03c1\u03af\u03b1\u03c2 {{section}} {{index}}",
        },
      },
      contact: {
        title: "\u03a3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1\u03c2",
        address: "\u039a\u03b1\u03c4\u03b1\u03b2\u03b1\u03c4\u03af, \u03a3\u03af\u03c6\u03bd\u03bf\u03c2 84003, \u0395\u03bb\u03bb\u03ac\u03b4\u03b1",
        mapTitle: "\u03a7\u03ac\u03c1\u03c4\u03b7\u03c2 \u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1\u03c2 Cycladic Lodge Sifnos",
      },
      footer: {
        addressLineOne: "\u039a\u03b1\u03c4\u03b1\u03b2\u03b1\u03c4\u03af, \u0391\u03c0\u03bf\u03bb\u03bb\u03c9\u03bd\u03af\u03b1",
        addressLineTwo: "\u03a3\u03af\u03c6\u03bd\u03bf\u03c2 84003, \u0395\u03bb\u03bb\u03ac\u03b4\u03b1",
        phone: "\u03a4\u03b7\u03bb: +30 22840 32170",
        email: "Email:",
        mapTitle: "\u03a7\u03ac\u03c1\u03c4\u03b7\u03c2 Cycladic Lodge Sifnos",
        copyright: "\u039c\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03b5\u03c0\u03b9\u03c6\u03cd\u03bb\u03b1\u03be\u03b7 \u00a9 Cycladic Lodge 2024",
        cookieSettings: "\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 cookies",
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
