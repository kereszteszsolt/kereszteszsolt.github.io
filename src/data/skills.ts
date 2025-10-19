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
                        {name: "Angular", usageType: ["work-experience", "personal-projects"], usedAt: ['msg-systems'], personalProjects: ['ollama-chat']},
                        {name: "React", usageType: ["personal-projects", "work-experience"], usedAt: ['msg-systems'], personalProjects: ['planning-poker']},
                        {name: "Vue", usageType: ["personal-projects"], personalProjects: ['this-website', 'focus-guard']},
                        {name: "Next.js", usageType: ["experimental"]},
                        {name: "Vuex", usageType: ["experimental"]},
                        {name: "NestJS", usageType: ["experimental"]},
                        {name: "Dojo", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "PrimeNG", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Angular Material", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "React MUI", usageType: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Vuetify", usageType: ["personal-projects"], personalProjects: ['ollama-chat']},
                    ],
                },
                {
                    title: "Languages",
                    skills: [
                        {name: "JavaScript", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "TypeScript", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "HTML", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "CSS", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "SCSS", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "UI & Styling",
                    skills: [
                        {name: "TailwindCSS", usageType: ["personal-projects", "work-experience"], usedAt: ['msg-systems']},
                        {name: "Bootstrap", usageType: ["work-experience"]},
                        {name: "Material Design", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "CSS", usageType: ["work-experience", "personal-projects"], usedAt: ['msg-systems']},
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
                        {name: "Java", usageType: ["work-experience"], usedAt: ['msg-systems', 'ikonsoft']},
                        {name: "Java EE", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Spring", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Spring Boot", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Quarkus", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Micronaut", usageType: ["experimental"]},
                        {name: "Python", usageType: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Flask", usageType: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Django", usageType: ["experimental"]},
                        {name: "FastAPI", usageType: ["experimental"]},
                        {name: "Node.js", usageType: ["personal-projects"]},
                        {name: "Express.js", usageType: ["personal-projects"]},
                        {name: "C#", usageType: ["work-experience"], usedAt: ['ikonsoft']},
                        {name: ".NET", usageType: ["work-experience"], usedAt: ['ikonsoft']},
                    ],
                },
                {
                    title: "Application Servers",
                    skills: [
                        {name: "Tomcat", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "WildFly", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GlassFish", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Payara", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "JBoss", usageType: ["work-experience"]},
                        {name: "Red Hat OpenShift", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "API",
                    skills: [
                        {name: "REST API", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Swagger", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GraphQL", usageType: ["personal-projects"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Database & Migration",
                    skills: [
                        {name: "Flyway", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Liquibase", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Microservices Architecture",
                    skills: [
                        {name: "Microservices", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        // "Monolith to Microservices Migration" removed per request
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
                        {name: "SQL", usageType: ["work-experience"], usedAt: ['msg-systems', 'ikonsoft']},
                        {name: "MySQL", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "PostgreSQL", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "PL/SQL", usageType: ["work-experience"], usedAt: ['msg-systems', 'ikonsoft']},
                        {name: "Oracle APEX", usageType: ["work-experience"], usedAt: ['ikonsoft']},
                        {name: "MariaDB", usageType: ["work-experience"]},
                        {name: "Microsoft SQL Server", usageType: ["work-experience"], usedAt: ['ikonsoft']},
                        {name: "DB2", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "NoSQL",
                    skills: [
                        {name: "MongoDB", usageType: ["personal-projects"]},
                        {name: "Firebase", usageType: ["personal-projects"]},
                        {name: "Neo4j", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Tools",
                    skills: [
                        {name: "PgAdmin", usageType: ["work-experience"]},
                        {name: "phpMyAdmin", usageType: ["work-experience"]},
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
                        {name: "Docker", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Podman", usageType: ["experimental"]},
                        {name: "Kubernetes", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Helm", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "CI/CD & Version Control",
                    skills: [
                        {name: "Git", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GitHub", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GitHub Desktop", usageType: ["work-experience"]},
                        {name: "GitLab", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Bitbucket", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Jenkins", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "CI/CD Pipelines", usageType: ["work-experience"]},
                    ],
                },
                {
                    title: "Cloud Platforms",
                    skills: [
                        {name: "Azure", usageType: ["work-experience"]},
                        {name: "AWS", usageType: ["experimental"]},
                        {name: "OpenShift", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Infrastructure as Code",
                    skills: [
                        {name: "Terraform", usageType: ["personal-projects"]},
                        {name: "Nx Monorepo", usageType: ["personal-projects"]},
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
                        {name: "Grafana", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Kibana", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "ElasticSearch", usageType: ["work-experience"]},
                        {name: "Splunk", usageType: ["experimental"]},
                        {name: "Prometheus", usageType: ["work-experience"], usedAt: ['msg-systems']},
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
                        {name: "OpenAI (ChatGPT)", usageType: ["personal-projects"]},
                        {name: "Anthropic (Claude)", usageType: ["experimental"]},
                        {name: "Perplexity", usageType: ["experimental"]},
                        {name: "Grok", usageType: ["experimental"]},
                        {name: "Ollama API", usageType: ["personal-projects"]},
                        {name: "OpenRouter", usageType: ["experimental"]},
                        {name: "Microsoft 365 Copilot", usageType: ["work-experience"]},
                    ],
                },
                {
                    title: "Frameworks & Tools",
                    skills: [
                        {name: "LangChain", usageType: ["personal-projects"]},
                        {name: "LangGraph", usageType: ["experimental"]},
                        {name: "LangSmith", usageType: ["experimental"]},
                        {name: "RAG", usageType: ["personal-projects"]},
                        {name: "MLOps", usageType: ["experimental"]},
                        {name: "LLM APIs", usageType: ["personal-projects"]},
                    ],
                },
                {
                    title: "Privacy & Cryptography",
                    skills: [
                        {name: "PETs", usageType: ["experimental"]},
                        {name: "FHE (Fully Homomorphic Encryption)", usageType: ["experimental"]},
                        {name: "Private Set Intersection", usageType: ["experimental"]},
                        {name: "SMPC (Secure Multi-Party Computation)", usageType: ["experimental"]},
                    ],
                },
                {
                    title: "Libraries",
                    skills: [
                        {name: "NumPy", usageType: ["personal-projects"]},
                        {name: "SciPy", usageType: ["experimental"]},
                        {name: "scikit-learn", usageType: ["experimental"]},
                        {name: "TensorFlow", usageType: ["experimental"]},
                        {name: "PyTorch", usageType: ["experimental"]},
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
                        {name: "JUnit", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Mockito", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Jest", usageType: ["personal-projects"], usedAt: ['msg-systems']},
                        {name: "Jasmine", usageType: ["work-experience"]},
                        {name: "PyUnit", usageType: ["experimental"]},
                        {name: "PyTest", usageType: ["experimental"]},
                        {name: "unittest", usageType: ["experimental"]},
                        {name: "Cypress", usageType: ["personal-projects"]},
                    ],
                },
                {
                    title: "Integration & Load Testing",
                    skills: [
                        {name: "Postman", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "LoadTest", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "LastTest", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Integration Tests", usageType: ["work-experience"]},
                    ],
                },
                {
                    title: "Automation",
                    skills: [
                        {name: "Test Automation Pipelines", usageType: ["work-experience"], usedAt: ['msg-systems']},
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
                        {name: "IntelliJ IDEA", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "WebStorm", usageType: ["work-experience"]},
                        {name: "VS Code", usageType: ["personal-projects"]},
                        {name: "Eclipse", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Notepad++", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Documentation & Notes",
                    skills: [
                        {name: "Confluence", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Jira", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "SharePoint", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Bitbucket", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "GitLab", usageType: ["work-experience"], usedAt: ['msg-systems']},
                        {name: "Obsidian", usageType: ["personal-projects"]},
                        {name: "OneNote", usageType: ["work-experience"], usedAt: ['msg-systems', 'ikonsoft']},
                        {name: "XMind", usageType: ["personal-projects"]},
                        {name: "Mermaid", usageType: ["personal-projects"]},
                    ],
                },
                {
                    title: "Office & Documentation Tools",
                    skills: [
                        {name: "LibreOffice", usageType: ["personal-projects"]},
                        {name: "OpenOffice", usageType: ["personal-projects"]},
                        {name: "LaTeX", usageType: ["experimental"]},
                        {name: "KaTeX", usageType: ["experimental"]},
                        {name: "Microsoft 365", usageType: ["work-experience"], usedAt: ['msg-systems']},
                    ],
                },
                {
                    title: "Design & Graphics",
                    skills: [
                        {name: "Figma", usageType: ["personal-projects"]},
                        {name: "Penpot", usageType: ["experimental"]},
                        {name: "Lunacy", usageType: ["personal-projects"]},
                        {name: "Inkscape", usageType: ["personal-projects"]},
                        {name: "Gimp", usageType: ["personal-projects"]},
                        {name: "Krita", usageType: ["personal-projects"]},
                        {name: "Canva", usageType: ["personal-projects"]},
                        {name: "Picsart", usageType: ["personal-projects"]},
                    ],
                },
                {
                    title: "Media & Video Tools",
                    skills: [
                        {name: "Kapwing", usageType: ["personal-projects"]},
                        {name: "ClipChamp", usageType: ["personal-projects"]},
                        {name: "Picsart", usageType: ["personal-projects"]},
                        {name: "Canva", usageType: ["personal-projects"]},
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
                        {name: "SSO", usageType: ["work-experience"]},
                        {name: "Authorization", usageType: ["work-experience"]},
                        {name: "Authentication", usageType: ["work-experience"]},
                        {name: "Keycloak", usageType: ["work-experience"]},
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
                        {name: "Pascal", usageType: ["experimental"]},
                        {name: "C++", usageType: ["experimental"]},
                    ],
                },
            ],
        },
    ],
 };
