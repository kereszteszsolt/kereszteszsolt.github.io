import type { WorkExperience } from "@/models/skills.model.ts";
import { softwareDevelopment } from "@/data/software-development.ts";

const workExperience: WorkExperience[] = [
    {
        company: "IKONSOFT",
        companyId: "ikonsoft",
        position: "3rd Level Support",
        startDate: "2013-Apr",
        endDate: "2016-Jun",
        years: 3,
        skillsUsed: []
    },
    {
        company: "msg systems AG",
        companyId: "msg-systems",
        position: "Software Engineer",
        startDate: "2016-Jul",
        endDate: "present",
        years: 7,
        skillsUsed: []
    },
];

export { workExperience };
