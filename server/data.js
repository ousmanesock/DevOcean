const { v4: uuidv4 } = require("uuid");

const users = [
  {
    _id: uuidv4(),
    name: "Amanda",
    email: "terika@mailinator.com",
    hashedPassword:
      "$2b$10$IF.YnHjSGfImQdj8Y6qdnOPi/4BAK5vV4wfJnpdCG/Q8rkDnAY0zW",
  },
  {
    _id: uuidv4(),
    name: "Bob",
    email: "ximu@mailinator.com",
    hashedPassword:
      "$2b$10$IF.YnHjSGfImQdj8Y6qdnOPi/4BAK5vV4wfJnpdCG/Q8rkDnAY0zW",
  },
  {
    _id: uuidv4(),
    name: "Charlie",
    email: "sajubyb@mailinator.com",
    hashedPassword:
      "$2b$10$IF.YnHjSGfImQdj8Y6qdnOPi/4BAK5vV4wfJnpdCG/Q8rkDnAY0zW",
  },
  {
    _id: uuidv4(),
    email: "test@test.com",
    hashedPassword:
      "$2b$10$IF.YnHjSGfImQdj8Y6qdnOPi/4BAK5vV4wfJnpdCG/Q8rkDnAY0zW",
  },
];
const documentId = uuidv4();
const workspaceId = uuidv4();
const documents = [
  {
    _id: documentId,
    body: "The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water. An ocean can also refer to any of the large bodies of water into which the world ocean is conventionally divided. [source: wikipedia.org]",
    title: "OceanFact1",
  },
  {
    _id: documentId,
    body: "Acting as a huge heat reservoir, the ocean influences climate and weather patterns, the carbon cycle, and the water cycle. [source: wikipedia.org]",
    title: "OceanFact2",
  },
  {
    _id: documentId,
    body: "The series of mechanical waves that propagate along the interface between water and air is called swell - a term used in sailing, surfing and navigation.[source: wikipedia.org]",
    title: "OceanFact3",
  },
  {
    _id: documentId,
    body: "The size of the waves depends on the fetch, the distance that the wind has blown over the water and the strength and duration of that wind. When waves meet others coming from different directions, interference between the two can produce broken, irregular seas. [source: wikipedia.org]",
    title: "OceanFact4",
  },
  {
    _id: documentId,
    body: "The ocean produces over half of the world's oxygen and stores 50 times more carbon than our atmosphere. [source: US National Ocean Service]",
    title: "OceanFact5",
  },
  {
    _id: documentId,
    body: "The size of the waves depends on the fetch, the distance that the wind has blown over the water and the strength and duration of that wind. When waves meet others coming from different directions, interference between the two can produce broken, irregular seas. [source: wikipedia.org]",
    title: "OceanFact6",
  },
  {
    _id: documentId,
    body: "Produces over 70% of breathable oxygen [source: https://www.treehugger.com/enlightening-facts-about-ocean-4854737]",
    title: "OceanFact7",
  },
  {
    _id: documentId,
    body: "Only 9% of the ocean's species have been classified [source: https://www.treehugger.com/enlightening-facts-about-ocean-4854737]",
    title: "OceanFact8",
  },
  {
    _id: documentId,
    body: "Contains the Mid-Oceanic Ridge, the longest mountain chain in the world. The Mid-Oceanic Ridge is a mountain chain that wraps around the globe. [source: https://www.treehugger.com/enlightening-facts-about-ocean-4854737]",
    title: "OceanFact9",
  },
];
const workspaces = [
  {
    _id: workspaceId,
    project_name: "English assignment",
    // team_members: ["Amanda", "Bob", "Charlie"],
    // team: teamId,
    document: [documentId],
  },
  {
    _id: workspaceId,
    project_name: "Geography assignment",
    // team_members: ["Henry", "Isabel", "Jackie"],
    document: [documentId],
  },
];
const teams = [
  {
    name: "Alpha",
    members: [
      "634f03264ed3b46ca8767fc6",
      "634f03264ed3b46ca8767fc7",
      "634f03264ed3b46ca8767fc8",
    ],
  },
  {
    name: "Bravo",
    members: [
      "634f03264ed3b46ca8767fc6",
      "634f03264ed3b46ca8767fc7",
    ],
  },
];
const threads = [
  {
    _id: uuidv4(),
    workspaceId: "634eef3f77c1adbf720898f4",
    thread: [
      { message: "Good morning", user: "Amanda" },
      { message: "Hello!", user: "Bob" },
      { message: "how are you guys today?", user: "Amanda" },
      {
        message: "Great, thanks how about you?",
        user: "Charlie",
      },
      {
        message: "What are you working on today?",
        user: "Bob",
      },
      {
        message: "I am working on my final project",
        user: "Charlie",
      },
    ],
  },
];

const tasks = [
  // {
  //   name: "presentation",
  //   assigned_to: "David",
  //   status: "Not started",
  //   priority: "urgent",
  // },
  // {
  //   name: "reports",
  //   assigned_to: "Erika",
  //   status: "In Progress",
  //   priority: "high",
  // },
  // {
  //   name: "dashboard",
  //   assigned_to: "Farid",
  //   status: "In Progress",
  //   priority: "normal",
  // },
  // {
  //   name: "vetting",
  //   assigned_to: "Grace",
  //   status: "Completed",
  //   priority: "high",
  // },

  {
    name: "agenda",
    assigned_to: "Kevin",
    status: "Completed",
    priority: "normal",
  },
  {
    name: "minutes",
    assigned_to: "Laura",
    status: "Not started",
    priority: "normal",
  },
  {
    name: "followup",
    assigned_to: "Marc",
    status: "In Progress",
    priority: "urgent",
  },
  {
    name: "review",
    assigned_to: "Octav",
    status: "Completed",
    priority: "high",
  },
];

const taskList = [
  {
    _id: uuidv4(),
    workspaceId: "634eef3f77c1adbf720898f4",
    tasks: [
      "634ef97cbc3247f84538403d",
      "634ef97cbc3247f84538403e",
      "634ef97cbc3247f84538403f",
      "634ef97cbc3247f845384040",
    ],
  },
  {
    _id: uuidv4(),
    workspaceId: "634eef3f77c1adbf720898f5",
    tasks: [
      "634efcd83ccaf9a594b27ccc",
      "634efcd83ccaf9a594b27ccd",
      "634efcd83ccaf9a594b27cce",
      "634efcd83ccaf9a594b27ccf",
    ],
  },
];

module.exports = { workspaces, documents, threads, users, tasks, taskList, teams };
