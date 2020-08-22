const projects = [
  {
    id: 1,
    name: "Writing Challenge",
    description: "Website for Ball State Faculty",
    tools: {
      languages: [
        {
          name: "JavaScript",
        },
        {
          name: "PHP",
        },
        {
          name: "SQL",
        },
      ],
      frameworks: [
        {
          name: "React",
        },
        {
          name: "Slim",
        },
      ],
      server: "Apache",
    },
  },
  {
    id: 2,
    name: "Cardinal AR",
    description: "AR app",
    tools: {
      languages: [
        {
          name: "C#",
        },
      ],
      server: "",
      environment: "Unity3D",
    },
  },
  {
    id: 3,
    name: "Softhaven",
    description: "A Java EE app for ships",
    tools: {
      languages: [
        {
          name: "Java",
        },
        {
          name: "SQL",
        },
      ],
      server: "glassfish",
    },
  },
];
module.exports = projects;
