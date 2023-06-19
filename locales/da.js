export default {
  //Header translations
  header: {
    solutions: "Løsninger",
    partners: "Partnere",
    resources: "Ressourcer",
    about: "Om os",
    portal: "Partner Portal",
    cta: "Kontakt os",
  },

  //Headings for 1-type-of-robot
  type: "Hvilken type robot?",
  type2: "Vælg et mærke",

  //Headings for 2-type-of-material
  material: "Hvilket materiale bruges?",
  material2: "Vælg materiale",

  //Headings for 3-type-of-process
  process: "Hvilken proces er nødvendig?",
  process2: "Vælg en proces",

  //Headings for 4-level-of-detail
  detail: "Hvad er detaljeringsniveauet?",
  detail2: "Vælg detaljeringsniveau",

  //Headings for 5-size-of-product
  product: "Hvad er produktets størrelse?",
  product2: "Vælg størrelse på produktet",

  //Headings for 6-size-of-batch
  batch: "Hvor stor er produktionen?",
  batch2: "Vælg produktion størrelse",

  //Headings for 7-level-of-automation
  automatization: "Hvad er det ønskede automatiseringsniveau?",
  automatization2: "Vælg automatiseringsniveau",

  //Headings for 8-solution
  solution: "Den optimale løsning for dig er:",

  //Text for the Slider
  slider: {
    low: "Lav",
    high: "Høj",
    smaller: "Mindre",
    larger: "Større",
  },

  //Text for the Next Button
  button: {
    next: "Næste",
  },

  //Translations for the steps
  steps: [
    {
      description: [
        "Dette er de robotmærker, som Nordbo Robotics-løsninger fungerer med.",
        "Valget af software afhænger af, hvilket robotmærke virksomheden bruger.",
        "Hvis virksomheden ikke har en robot i øjeblikket, kan Nordbo hjælpe med at finde den bedste løsning til dem.",
      ],
      robots: ["Nachi", "Universal Robots", "KUKA", "Ingen"],
    },
    {
      description: {
        description1:
          "Valget af materiale er vigtigt, da det vil bestemme hvilken type processer der er tilgængelige i næste trin.",
        description2:
          "Hvis klienten arbejder med flere typer materialer, anbefales det at køre guiden igen.",
      },
      materials: [
        {
          name: "Træ",
        },
        {
          name: "Plast",
        },
        {
          name: "Metal",
        },
        {
          name: "Andet",
        },
      ],
    },
    {
      process: [
        {
          description:
            "Slibning: Der er fire hovedtyper af træslibemaskiner: båndslibemaskiner, excenterslibemaskiner, planslibemaskiner og slibemaskiner til afslutning.",
          name: "Slibning",
        },
        {
          description:
            "Afslutning: Processer som lakering, oliering, voksning osv.",
          name: "Afslutning",
        },
        {
          description: "Maling: Luftbørstning med polyurethan, epoxy osv.",
          name: "Maling",
        },
        {
          description:
            "Dosering: Doseringssystemer leverer præcise mængder af enten genstande eller væsker til en processtrøm.",
          name: "Dosering",
        },
      ],
    },
    {
      description: {
        description1:
          "Brug skyderen til at vælge det omtrentlige detaljeringsniveau for det endelige produkt.",
        description2:
          "Visse processer kan være for detaljerede for robotløsninger. For eksempel slibning af træprodukter med intrikate detaljer.",
        description3:
          "Processer uden krav til detaljer kan håndteres bedre af en anden type industrielt udstyr, især når produktionstørrelsen er stor.",
      },
    },
    {
      description: {
        description1:
          "Brug skyderen til at angive den omtrentlige størrelse på det endelige produkt.",
        description2:
          "Visse processer kan være for små til robotløsninger. For eksempel afslutning af små metalstykker.",
        description3:
          "Større produkter kan håndteres bedre af en anden type industrielt udstyr, især når detaljeringsniveauet er lavt og/eller produktionstørrelsen er stor.",
      },
    },
    {
      description: {
        description1:
          "Produktionstørrelsen angiver antallet af enheder, der fremstilles i en produktionskørsel.",
        description2:
          "Større produktionstørrelse kræver sandsynligvis flere robotter for at være effektive.",
        description3:
          "Mindre produktionstørrelse, der kræver omkonfigurationer, kræver sandsynligvis en uddannet tekniker til at styre udstyret.",
      },
    },
    {
      description: {
        description1:
          "Automatiseringsniveauet definerer graden af menneskelig involvering i processen.",
        description2:
          "Forståelse af klientens krav til automatisering vil hjælpe med at håndtere klientens forventninger.",
        description3:
          'Hvis en klient forventer 100% automatisering, kan du bruge denne mulighed til at forklare forskellen mellem "robotter" og "co-bots".',
      },
    },
  ],

  //Translations for the products
  products: {
    Mimic: {
      description: [
        "Passer til beskrivelse: Træ, Slibning, Ikke detaljeret, stort produkt, stor produktion, 75% auto = Mimic",
        "Mimic er fremragende til håndtering af større træprodukter i store produktioner og er mere end effektiv med mindre detaljerede produkter",
      ],
    },
    AI: {
      description: [
        "Passer til beskrivelse: Træ, Slibning, Ikke detaljeret, stort produkt, stor produktion, 75% auto = AI",
        "AI er fremragende til håndtering af større træprodukter i store produktioner og er mere end effektiv med mindre detaljerede produkter",
      ],
    },
    CraftMate: {
      description: [
        "Passer til beskrivelse: Træ, Slibning, Ikke detaljeret, stort produkt, stor produktion, 75% auto = CraftMate",
        "CraftMate er fremragende til håndtering af større træprodukter i store produktioner og er mere end effektiv med mindre detaljerede produkter",
      ],
    },
  },

  //Translations for the aside steps
  aside: {
    "Type of robot": "Type af robot",
    "Type of material": "Type af materiale",
    "Type of process": "Type af proces",
    "Level of detail": "Detaljeniveau",
    "Size of product": "Produktstørrelse",
    "Size of batch": "Produktionsstørrelse",
    "Level of automation": "Automationsniveau",
    "Solution": "Løsning",
  },
};
