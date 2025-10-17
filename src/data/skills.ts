import type {SkillGroup} from "@/models/skills.model.ts";

export const skills: SkillGroup = {
    title: "Software Development Skills",
    description:
        "A comprehensive overview of my software development skills, categorized for clarity.",
    categories: [
        {
            title: "Frontend Development",
            icon: "🖥️",
            subcategories: [
                {
                    title: "Frameworks & Libraries",
                    skills: [
                        {name: "Angular", type: ["work-experience", "personal-projects"], usedAt: ['msg-systems'], personalProjects: ['ollama-chat']},
                        {name: "React", type: ["personal-projects", "work-experience"], usedAt: ['msg-systems'], personalProjects: ['planning-poker']},
                        {name: "Vue", type: ["experimental"], personalProjects: ['this-website', 'focus-guard']},
                        {name: "Next.js", type: ["personal-projects"]},
                        {name: "Vuex", type: ["experimental"]},
                        {name: "NestJS", type: ["personal-projects"]},
                        {name: "Dojo", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "PrimeNG", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Angular Material", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "React MUI", type: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Vuetify", type: ["experimental"]},
                    ],
                },
                {
                    title: "Languages",
                    skills: [
                        {name: "JavaScript", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "TypeScript", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "HTML", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "CSS", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "SCSS", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "UI & Styling",
                    skills: [
                        {name: "TailwindCSS", type: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Bootstrap", type: ["work-experience"]},
                        {name: "Material Design", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "CSS Modules", type: ["experimental"], usedAt: ['msg-systems']},
                    ],
                },
            ],
        },
        {
            title: "Backend Development",
            icon: "⚙️",
            subcategories: [
                {
                    title: "Languages & Frameworks",
                    skills: [
                        {name: "Java", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Java EE", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Spring", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Spring Boot", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Quarkus", type: ["experimental"], usedAt: ['msg-systems']},
                        {name: "Micronaut", type: ["experimental"]},
                        {name: "Python", type: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Flask", type: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Django", type: ["experimental"]},
                        {name: "FastAPI", type: ["experimental"]},
                        {name: "Node.js", type: ["personal-projects"]},
                        {name: "Express.js", type: ["personal-projects"]},
                        {name: "C#", type: ["work-experience"]},
                        {name: ".NET", type: ["work-experience"], usedAt: ['ikonsoft']},
                    ],
                },
                {
                    title: "Application Servers",
                    skills: [
                        {name: "Tomcat", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "WildFly", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GlassFish", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Payara", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "JBoss", type: ["work-experience"]},
                        {name: "Red Hat OpenShift", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "API",
                    skills: [
                        {name: "REST API", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Swagger", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GraphQL", type: ["personal-projects"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Database & Migration",
                    skills: [
                        {name: "Flyway", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Liquibase", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Microservices Architecture",
                    skills: [
                        {name: "Microservices", type: ["work-experience"], usedAt: ['msg-systems']},
                        {
                            name: "Monolith to Microservices Migration",
                            type: ["work-experience"],
                        },
                    ],
                },
            ],
        },
        {
            title: "Databases",
            icon: "🗄️",
            subcategories: [
                {
                    title: "Relational",
                    skills: [
                        {name: "SQL", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "MySQL", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "PostgreSQL", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "PL/SQL", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "MariaDB", type: ["work-experience"]},
                        {name: "Microsoft SQL Server", type: ["work-experience"]},
                        {name: "DB2", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "NoSQL",
                    skills: [
                        {name: "MongoDB", type: ["personal-projects"]},
                        {name: "Firebase", type: ["personal-projects"]},
                        {name: "Neo4j", type: ["experimental"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Tools",
                    skills: [
                        {name: "PgAdmin", type: ["work-experience"]},
                        {name: "phpMyAdmin", type: ["work-experience"]},
                    ],
                },
            ],
        },
        {
            title: "DevOps & Cloud",
            icon: "☁️",
            subcategories: [
                {
                    title: "Containers & Orchestration",
                    skills: [
                        {name: "Docker", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Podman", type: ["experimental"]},
                        {name: "Kubernetes", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Helm", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "CI/CD & Version Control",
                    skills: [
                        {name: "Git", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GitHub", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GitHub Desktop", type: ["work-experience"]},
                        {name: "GitLab", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Bitbucket", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Jenkins", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "CI/CD Pipelines", type: ["work-experience"]},
                    ],
                },
                {
                    title: "Cloud Platforms",
                    skills: [
                        {name: "Azure", type: ["work-experience"]},
                        {name: "AWS", type: ["experimental"]},
                        {name: "OpenShift", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Infrastructure as Code",
                    skills: [
                        {name: "Terraform", type: ["personal-projects"]},
                        {name: "Nx Monorepo", type: ["personal-projects"]},
                    ],
                },
            ],
        },
        {
            title: "Monitoring & Logging",
            icon: "📊",
            subcategories: [
                {
                    title: "Tools",
                    skills: [
                        {name: "Grafana", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Kibana", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "ElasticSearch", type: ["work-experience"]},
                        {name: "Splunk", type: ["experimental"]},
                        {name: "Prometheus", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
            ],
        },
        {
            title: "AI & Machine Learning",
            icon: "🤖",
            subcategories: [
                {
                    title: "LLM APIs",
                    skills: [
                        {name: "OpenAI (ChatGPT)", type: ["personal-projects"]},
                        {name: "Anthropic (Claude)", type: ["experimental"]},
                        {name: "Perplexity", type: ["experimental"]},
                        {name: "Grok", type: ["experimental"]},
                        {name: "Ollama API", type: ["personal-projects"]},
                        {name: "OpenRouter", type: ["experimental"]},
                        {name: "Microsoft 365 Copilot", type: ["work-experience"]},
                    ],
                },
                {
                    title: "Frameworks & Tools",
                    skills: [
                        {name: "LangChain", type: ["personal-projects"]},
                        {name: "LangGraph", type: ["experimental"]},
                        {name: "LangSmith", type: ["experimental"]},
                        {name: "RAG", type: ["personal-projects"]},
                        {name: "MLOps", type: ["experimental"]},
                        {name: "LLM APIs", type: ["personal-projects"]},
                    ],
                },
                {
                    title: "Privacy & Cryptography",
                    skills: [
                        {name: "PETs", type: ["experimental"]},
                        {name: "FHE (Fully Homomorphic Encryption)", type: ["experimental"]},
                        {name: "Private Set Intersection", type: ["experimental"]},
                        {name: "SMPC (Secure Multi-Party Computation)", type: ["experimental"]},
                    ],
                },
                {
                    title: "Libraries",
                    skills: [
                        {name: "NumPy", type: ["personal-projects"]},
                        {name: "SciPy", type: ["experimental"]},
                        {name: "scikit-learn", type: ["experimental"]},
                        {name: "TensorFlow", type: ["experimental"]},
                        {name: "PyTorch", type: ["experimental"]},
                    ],
                },
            ],
        },
        {
            title: "Testing",
            icon: "🧪",
            subcategories: [
                {
                    title: "Unit Testing",
                    skills: [
                        {name: "JUnit", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Mockito", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Jest", type: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Jasmine", type: ["work-experience"]},
                        {name: "PyUnit", type: ["experimental"]},
                        {name: "PyTest", type: ["experimental"]},
                        {name: "unittest", type: ["experimental"]},
                        {name: "Cypress", type: ["personal-projects"]},
                    ],
                },
                {
                    title: "Integration & Load Testing",
                    skills: [
                        {name: "Postman", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "LoadTest", type: ["experimental"]},
                        {name: "LastTest", type: ["experimental"]},
                        {name: "Integration Tests", type: ["work-experience"]},
                    ],
                },
                {
                    title: "Automation",
                    skills: [
                        {name: "Test Automation Pipelines", type: ["work-experience"]},
                    ],
                },
            ],
        },
        {
            title: "Tools & IDEs",
            icon: "🧰",
            subcategories: [
                {
                    title: "IDE & Editors",
                    skills: [
                        {name: "IntelliJ IDEA", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "WebStorm", type: ["work-experience"]},
                        {name: "VS Code", type: ["personal-projects"]},
                        {name: "Eclipse", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Notepad++", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Documentation & Notes",
                    skills: [
                        {name: "Confluence", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Jira", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "SharePoint", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Bitbucket", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GitLab", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Obsidian", type: ["personal-projects"]},
                        {name: "OneNote", type: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "XMind", type: ["personal-projects"]},
                        {name: "Mermaid", type: ["personal-projects"]},
                    ],
                },
                {
                    title: "Office & Documentation Tools",
                    skills: [
                        {name: "LibreOffice", type: ["personal-projects"]},
                        {name: "OpenOffice", type: ["personal-projects"]},
                        {name: "LaTeX", type: ["experimental"]},
                        {name: "KaTeX", type: ["experimental"]},
                        {name: "Microsoft 365", type: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Design & Graphics",
                    skills: [
                        {name: "Figma", type: ["personal-projects"]},
                        {name: "Penpot", type: ["experimental"]},
                        {name: "Lunacy", type: ["personal-projects"]},
                        {name: "Inkscape", type: ["personal-projects"]},
                        {name: "Gimp", type: ["personal-projects"]},
                        {name: "Krita", type: ["personal-projects"]},
                        {name: "Canva", type: ["personal-projects"]},
                        {name: "Picsart", type: ["personal-projects"]},
                    ],
                },
                {
                    title: "Media & Video Tools",
                    skills: [
                        {name: "Kapwing", type: ["personal-projects"]},
                        {name: "ClipChamp", type: ["personal-projects"]},
                        {name: "Picsart", type: ["personal-projects"]},
                        {name: "Canva", type: ["personal-projects"]},
                    ],
                },
            ],
        },
        {
            title: "Security & Authentication",
            icon: "🔐",
            subcategories: [
                {
                    title: "Security & Auth",
                    skills: [
                        {name: "SSO", type: ["work-experience"]},
                        {name: "Authorization", type: ["work-experience"]},
                        {name: "Authentication", type: ["work-experience"]},
                        {name: "Keycloak", type: ["work-experience"]},
                    ],
                },
            ],
        },
        {
            title: "Other Languages",
            icon: "💡",
            subcategories: [
                {
                    title: "Programming Languages",
                    skills: [
                        {name: "Pascal", type: ["experimental"]},
                        {name: "C++", type: ["experimental"]},
                    ],
                },
            ],
        },
    ],
};
