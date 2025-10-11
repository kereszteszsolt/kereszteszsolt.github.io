import { softwareDevelopment } from "@/data/software-development.ts";
import type { Project } from "@/models/projects.model.ts";

export const personalProjects: Project[] = [
    {
        name: "Focus Guard",
        description:
            "A productivity app that helps you stay focused by blocking distracting websites and apps during your work sessions.",
        links: [
            {
                title: "Chrome Web Store",
                url: "https://chromewebstore.google.com/detail/focus-guard/bdfnblnbjckkhknignkpmckeelfplill",
            },
        ],
        repos: [
            {
                title: "GitHub Repository",
                url: "https://github.com/kereszteszsolt/PA_Focus_Guard",
            },
        ],
        projectId: "focus-guard",
        videos: [],
    },
    {
        name: "Personal Portfolio Website",
        description:
            "My personal portfolio website to showcase my skills, work experience, and personal projects.",
        links: [
            {
                title: "Live Website",
                url: "https://kereszteszsolt.com",
            },
        ],
        repos: [
            {
                title: "GitHub Repository",
                url: "https://github.com/kereszteszsolt/kereszteszsolt.github.io",
            },
        ],
        projectId: "this-website",
        videos: [],
    },
    {
        name: "Planning Poker",
        description:
            "A web-based planning poker app to help agile teams estimate user stories collaboratively.",
        links: [
            {
                title: "Live Demo",
                url: "https://planning-poker-kereszteszsolt.vercel.app/",
            },
        ],
        repos: [
            {
                title: "GitHub Repository",
                url: "https://github.com/kereszteszsolt/example-planning-poker-react-express-socket-io",
            },
        ],
        projectId: "planning-poker",
        videos: [],
    },
    {
        name: "Ollama Chat",
        description:
            "A chat application that integrates with Ollama's language models to provide AI-powered conversations.",
        links: [
            {
                title: "Live Demo",
                url: "https://ollama-chat-kereszteszsolt.vercel.app/",
            },
        ],
        repos: [
            {
                title: "GitHub Repository",
                url: "https://github.com/kereszteszsolt/example-ollama-local-chat-angular-tailwind-docker-lightweight",
            },
        ],
        projectId: "ollama-chat",
        videos: [
            {
                title: "Magyar bemutató (hu)",
                url: "https://www.youtube.com/watch?v=r2X0joUIEbE"
            },
            {
                title: "English demo (en)",
                url: "https://www.youtube.com/watch?v=qRj7CoxSkOw"
            },
            {
                title: "Demonstrație Română (ro)",
                url: "https://www.youtube.com/watch?v=Uer_qGa1TC0"
            },
            {
                title: "Deutsch Demo (de)",
                url: "https://www.youtube.com/watch?v=3oHuoYVxqEc"
            }
        ],
    },
];
