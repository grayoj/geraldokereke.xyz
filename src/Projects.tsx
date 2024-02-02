interface Language {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  languages: Language[];
}

const languageColorMap: Record<string, string> = {
  Typescript: "#3178C6",
  Python: "#3776AB",
  "Jupyter Notebook": "#F37626",
  Elixir: "#4E2A8E",
  JavaScript: "#F0DB4F",
  Go: "#00ADD8",
  Rust: "#DEA584",
  C: "#A8B9CC",
  "C++": "#00599C",
  Java: "#007396",
};

export const projects: Project[] = [
  {
    title: "Console",
    description:
      "Console is an activity, process monitoring system written in Go and Typescript.",
    languages: [
      { name: "Typescript", color: languageColorMap["Typescript"] },
      { name: "Go", color: languageColorMap["Go"] },
    ],
  },
  {
    title: "Gostore",
    description:
      "Simple implementation of a distributed key-value store in Go.",
    languages: [{ name: "Go", color: languageColorMap["Go"] }],
  },
  {
    title: "Heuvera",
    description: "A startup project for helping users find a place.",
    languages: [{ name: "Typescript", color: languageColorMap["Typescript"] }],
  },
  {
    title: "Image Classifier",
    description:
      "A flask application to illustrate image classification in Tensorflow.",
    languages: [{ name: "Python", color: languageColorMap["Python"] }],
  },
];
