import type {PersonalProject, SkillCategory} from "@/models/skills.model.ts";

export interface Link {
    title?: string;
    url: string;
}

export interface SocialLink extends Link {
    description: string;
    icon?: string;
    identifier: string;
}

export interface Project {
    name: string;
    skillsUsed?: SkillCategory[];
    description: string;
    links?: Link[];
    repos?: Link[];
    videos?: Link[];
    personalProject?: PersonalProject;
}