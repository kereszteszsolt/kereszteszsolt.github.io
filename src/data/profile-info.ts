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
      details: "12+ years in the IT industry since 2013 (3+ years in third-level support, 9+ years as a software engineer).",
      icon: "/assets/icons/briefcase-bag-color-icon.png"
    },
    {
      label: "Personal projects",
      details: "Over 2 years of experience building and maintaining personal projects for the public.",
      icon: "/assets/icons/architecture-plan-icon.png"
    },
    {
      label: "Content creation",
      details: "More than 2 years of experience creating and sharing educational content on YouTube and TikTok, focusing on self-development and STEM.",
      info: "STEM: Science, Technology, Engineering, and Mathematics.",
      icon: "/assets/icons/film-movie-icon.png"
    },
    {
      label: "Hobby",
      details: "I enjoy learning new things, improving myself, and sharing knowledge with others. I am a lifelong learner and passionate about nonfiction books, especially audiobooks—listening to several each month.",
      icon: "/assets/icons/healthy-lifestyle-icon.png"
    },
    {
      label: "Languages",
      details: "Hungarian (native), Romanian (daily communication), English (working proficiency), German (basic).",
      icon: "/assets/icons/language-translator-icon.png"
    },
    {
      label: "MSc in Engineering",
      details: "Applied Informatics in Complex Systems Engineering, Automation and Computer Science, Technical University of Cluj-Napoca, Romania (2012–2014).",
      icon: "/assets/icons/graduation-cap-icon.png"
    },
    {
      label: "BSc in Engineering",
      details: "Applied Informatics and Automation (Systems Engineering), Automation and Computer Science, Technical University of Cluj-Napoca, Romania (2008–2012).",
      icon: "/assets/icons/graduation-cap-icon.png"
    },
    {
      label: "Main interests (2025–2026)",
      details: "Angular, Vue, Python, AI tools and APIs, Linux, NestJS, cross-platform development (e.g., Ionic, React Native), content creation, productivity, and self-development.",
      icon: "/assets/icons/target-goals-icon.png"
    }
  ]
};
