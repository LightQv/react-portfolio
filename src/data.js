import wildfest from "./assets/image/projects/wildfest.png";
import pokedex from "./assets/image/projects/pokedex.png";
import keskonregarde from "./assets/image/projects/keskonregarde.png";
import animalz from "./assets/image/projects/animalz.png";
import discovery from "./assets/image/projects/discovery.png";

export const projects = [
  {
    id: 1,
    name: "WildFest",
    img: wildfest,
    description:
      "is a website for a music festival that allow the users to check every different artists and prices.",
    language: ["HTML", "CSS", "JavaScript"],
    deployed: "gh-pages",
    code_source: "https://github.com/LightQv/Wild-Festival",
    demo_link:
      "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-BrainForge/index.html",
  },
  {
    id: 2,
    name: "Pokedex",
    img: pokedex,
    description: "is an app which lists every Pokemon's datas sorted by areas.",
    language: ["React.js", "CSS", "Node.js"],
    deployed: "gh-pages",
    code_source: "https://github.com/LightQv/pokedex",
    demo_link: "https://lightqv.github.io/pokedex/",
  },
  {
    id: 3,
    name: "Keskonregarde ?",
    img: keskonregarde,
    description:
      "is a search website that aim to help the users to find a movie to watch.",
    language: ["React.js", "CSS", "Node.js"],
    deployed: "Netlify",
    code_source: "https://github.com/LightQv/keskonregarde",
    demo_link: "https://lightqv-keskonregarde.netlify.app/",
  },
  {
    id: 4,
    name: "Animalz",
    img: animalz,
    description:
      "is a meeting app that help travelers to find a partner. Hackathon 24h proof of concept.",
    language: ["React.js", "CSS", "Node.js"],
    deployed: null,
    code_source: "https://github.com/LightQv/animalz",
    demo_link: null,
  },
  {
    id: 5,
    name: "Discovery",
    img: discovery,
    description:
      "is a Spotify client to center the most usefull datas from the user's account.",
    language: ["React.js", "Tailwind CSS", "Express.js"],
    deployed: null,
    code_source: "https://github.com/LightQv/discovery",
    demo_link: null,
  },
];
