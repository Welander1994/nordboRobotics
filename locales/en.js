export default {
  //Header translations
  header: {
    solutions: "Solutions",
    partners: "Partners",
    resources: "Resources",
    about: "About us",
    portal: "Partner Portal",
    cta: "Get in Touch",
  },

  //Headings for 1-type-of-robot
  type: "What type of robot?",
  type2: "Choose a brand",

  //Headings for 2-type-of-material
  material: "Which material is being used?",
  material2: "Choose Material",

  //Headings for 3-type-of-process
  process: "Which process is needed?",
  process2: "Choose process",

  //Headings for 4-level-of-detail
  detail: "What is the level of detail?",
  detail2: "Choose level of detail",

  //Headings for 5-size-of-product
  product: "What is the size of the product?",
  product2: "Choose size of product",

  //Headings for 6-size-of-batch
  batch: "How large is the batch?",
  batch2: "Choose size of batch",

  //Headings for 7-level-of-automation
  automatization: "What is the desired level of automatization?",
  automatization2: "Choose level of automatization",

  //Headings for 8-solution
  solution: "The optimal solution for you is:",

  //Text for the Slider
  slider: {
    low: "Low",
    high: "High",
    smaller: "Smaller",
    larger: "Larger",
  },

  //Text for the Next Button
  button: {
    next: "Next",
  },

  //Translations for the steps
  steps: [
    {
      description: [
        "These are the robot brands that Nordbo Robotics solutions work with.",
        "The choice of software will depend on which brand of robot the company uses.",
        "If the company does not currently have a robot, Nordbo can help find the best solution for them.",
      ],
      robots: ["Nachi", "Universal Robots", "KUKA", "None"],
    },
    {
      description: {
        description1:
          "The choice of material is important as it will determine which type of processes are available in the next step.",
        description2:
          "If the client is working with several types of materials, it is recommended to run through the wizard again.",
      },
      materials: [
        {
          name: "Wood",
        },
        {
          name: "Plastic",
        },
        {
          name: "Metal",
        },
        {
          name: "Other",
        },
      ]
    },
    {
      process: [
        {
          description:
            "Sanding: There are four main types of wood sanders: belt sanders, random orbital sanders, disc sanders, and finishing sanders.",
          name: "Sanding",
        },
        {
          description:
            "Finishing: Processes including varnishing, oiling, waxing, etc...",
          name: "Finishing",
        },
        {
          description: "Painting: Airbrushing with Polyurethane, epoxy, etc.",
          name: "Painting",
        },
        {
          description:
            "Dispensing: Dispensing systems deliver precise amounts of either objects or liquids into a process flow.",
          name: "Dispensing",
        },
      ],
    },
    {
      description: {
        description1:
          "Use the slider to choose the approximate level of detail for the final product.",
        description2:
          "Certain processes may be too detailed for robotic solutions, such as sanding wooden products with intricate details.",
        description3:
          "Processes without any requirement for detail may be better handled by a different type of industrial machine, especially when the batch size is large.",
      },
    },
    {
      description: {
        description1:
          "Use the slider to indicate the approximate size of the final product.",
        description2:
          "Certain processes may be too small for robotic solutions, such as finishing small metal pieces.",
        description3:
          "Larger products may be better handled by a different type of industrial machine, especially when the detail level is low and/or the batch size is large.",
      },
    },
    {
      description: {
        description1:
          "Batch size indicates the number of units manufactured in a production run.",
        description2:
          "Larger batches will likely need several robots to be efficient.",
        description3:
          "Smaller batches that require reconfigurations will likely need a trained technician to manage the equipment.",
      },
    },
    {
      description: {
        description1:
          "The level of automation defines the level of human involvement in the process.",
        description2:
          "Understanding client requirements in regards to automation will help manage the clients' expectations.",
        description3:
          'If a client expects 100% automation, this is an opportunity to explain the difference between "robots" and "co-bots".',
      },
    },
  ],

  //Translations for the products
  products: {
    Mimic: {
      description: [
        "Fits the description: Wood, Sanding, Not detailed, product big, batch big, 75% auto = Mimic",
        "Mimic is excellent to handle bigger wood products in big batches, and is more than efficient with less detailed products",
      ],
    },
    AI: {
      description: [
        "Fits the description: Wood, Sanding, Not detailed, product big, batch big, 75% auto = AI",
        "AI is excellent to handle bigger wood products in big batches, and is more than efficient with less detailed products",
      ],
    },
    CraftMate: {
      description: [
        "Fits the description: Wood, Sanding, Not detailed, product big, batch big, 75% auto = CraftMate",
        "CraftMate is excellent to handle bigger wood products in big batches, and is more than efficient with less detailed products",
      ],
    },
  },

  aside: {
    "Type of robot": "Type of robot",
    "Type of material": "Type of material",
    "Type of process": "Type of process",
    "Level of detail": "Level of detail",
    "Size of product": "Size of product",
    "Size of batch": "Size of batch",
    "Level of automation": "Level of automation",
    "Solution": "Solution",
  },
};
