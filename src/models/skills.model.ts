export type SkillType = 'work-experience' | 'personal-projects' | 'experimental';
export type UsedAt = 'ikonsoft' | 'msg-systems' | 'personal-projects' | 'content-creation';
export type Company = 'ikonsoft' | 'msg-systems';
export type PersonalProject = 'focus-guard' | 'this-website' | 'planning-poker' | 'ollama-chat';

export interface Skill {
    name: string;
    icon?: string;
    type: SkillType[];
    usedAt?: UsedAt[];
    personalProjects?: PersonalProject[];
    skillCategory?: string;
}

export interface SkillSubCategory {
    title: string;
    icon?: string;
    skills: Skill[];
}

export interface SkillCategory {
    title: string;
    icon?: string;
    subcategories: SkillSubCategory[];
}

export interface SkillGroup {
    title: string;
    description?: string;
    categories: SkillCategory[];
}

export interface WorkExperience {
    company: string;
    companyId: Company;
    position: string;
    startDate: string;
    endDate?: string;
    years: number;
}