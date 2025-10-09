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
        skillsUsed: softwareDevelopment.categories.filter((category) =>
            category.subcategories.some((sub) =>
                sub.skills.some((skill) => skill.usedAt?.includes("ikonsoft"))
            )
        ),
    },
    {
        company: "msg systems AG",
        companyId: "msg-systems",
        position: "Software Engineer",
        startDate: "2016-Jul",
        endDate: "2023-Dec",
        years: 7,
        skillsUsed: softwareDevelopment.categories.filter((category) =>
            category.subcategories.some((sub) =>
                sub.skills.some((skill) => skill.usedAt?.includes("msg-systems"))
            )
        ),
    },
];

export { workExperience };
