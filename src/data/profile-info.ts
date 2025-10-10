import type { ProfileInfo } from "@/models/profile-info.model";

export const profileInfo: ProfileInfo = {
    fullName: "Keresztes Zsolt",
    firstName: "Zsolt",
    lastName: "Keresztes",
    title: "Software Developer & Content Creator",
    photo: "https://github.com/kereszteszsolt.png",
    infoCard: [
        {
            label: "Work experience",
            details: "12+ years in the IT industry since 2013 (3+ years in 3rd level support, 9+ years as a software engineer)",
            icon: "icons/briefcase-icon.png"
        },
        {
            label: "Personal projects",
            details: "2+ years of experience building and maintaining personal projects for the public.",
            icon: "icons/project-icon.png"
        },
        {
            label: "Content creation",
            details: "2+ years of experience creating and sharing educational content on YouTube and TikTok (self-development and STEM)",
            info: "STEM: Science, Technology, Engineering, and Mathematics",
            icon: "icons/content-creation-icon.png"
        },
        {
            label: "Hobby",
            details: "I love learning new things, improving myself, and sharing my knowledge with others. I am a lifelong learner and passionate about nonfiction books, especially audiobooks—several books per month.",
            icon: "icons/hobby-icon.png"
        },
        {
            label: "Languages",
            details: "Hungarian (native), Romanian (daily communication), English (working proficiency), German (basic)",
            icon: "icons/languages-icon.png"
        },
        {
            label: "MSc in Engineering",
            details: "Applied Informatics in Complex Systems Engineering, Automation and Computer Science, Technical University of Cluj-Napoca, Romania (2012–2014)",
            icon: "icons/graduation-cap-icon.png"
        },
        {
            label: "BSc in Engineering",
            details: "Applied Informatics and Automation (Systems Engineering), Automation and Computer Science, Technical University of Cluj-Napoca, Romania (2008–2012)",
            icon: "icons/graduation-cap-icon.png"
        },
        {
            label: "Main interests (2025–2026...)" ,
            details: "Angular, Vue, Python, AI tools and APIs, Linux, NestJS, cross-platform development (like Ionic, React Native), content creation, productivity, self-development.",
            icon: "icons/interests-icon.png"
        }
    ]
};
