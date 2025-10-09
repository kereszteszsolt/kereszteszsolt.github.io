import type { SkillGroup } from "@/models/skills.model.ts";

export const softwareDevelopment: SkillGroup = {
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
                        { name: "Angular", type: ["work-experience", "personal-projects"] },
                        { name: "React", type: ["personal-projects", "work-experience"] },
                        { name: "Vue", type: ["experimental"] },
                        { name: "Next.js", type: ["personal-projects"] },
                        { name: "Vuex", type: ["experimental"] },
                        { name: "NestJS", type: ["personal-projects"] },
                        { name: "Dojo", type: ["work-experience"] },
                        { name: "PrimeNG", type: ["work-experience"] },
                        { name: "Angular Material", type: ["work-experience"] },
                        { name: "React MUI", type: ["personal-projects"] },
                        { name: "Vuetify", type: ["experimental"] },
                    ],
                },
                {
                    title: "Languages",
                    skills: [
                        { name: "JavaScript", type: ["work-experience"] },
                        { name: "TypeScript", type: ["work-experience"] },
                        { name: "HTML", type: ["work-experience"] },
                        { name: "CSS", type: ["work-experience"] },
                        { name: "SCSS", type: ["work-experience"] },
                    ],
                },
                {
                    title: "UI & Styling",
                    skills: [
                        { name: "TailwindCSS", type: ["personal-projects"] },
                        { name: "Bootstrap", type: ["work-experience"] },
                        { name: "Material Design", type: ["work-experience"] },
                        { name: "CSS Modules", type: ["experimental"] },
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
                        { name: "Java", type: ["work-experience"] },
                        { name: "Java EE", type: ["work-experience"] },
                        { name: "Spring", type: ["work-experience"] },
                        { name: "Spring Boot", type: ["work-experience"] },
                        { name: "Quarkus", type: ["experimental"] },
                        { name: "Micronaut", type: ["experimental"] },
                        { name: "Python", type: ["personal-projects"] },
                        { name: "Flask", type: ["personal-projects"] },
                        { name: "Django", type: ["experimental"] },
                        { name: "FastAPI", type: ["experimental"] },
                        { name: "Node.js", type: ["personal-projects"] },
                        { name: "Express.js", type: ["personal-projects"] },
                        { name: "C#", type: ["work-experience"] },
                        { name: ".NET", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Application Servers",
                    skills: [
                        { name: "Tomcat", type: ["work-experience"] },
                        { name: "WildFly", type: ["work-experience"] },
                        { name: "GlassFish", type: ["work-experience"] },
                        { name: "Payara", type: ["work-experience"] },
                        { name: "JBoss", type: ["work-experience"] },
                        { name: "Red Hat OpenShift", type: ["work-experience"] },
                    ],
                },
                {
                    title: "API",
                    skills: [
                        { name: "REST API", type: ["work-experience"] },
                        { name: "Swagger", type: ["work-experience"] },
                        { name: "GraphQL", type: ["personal-projects"] },
                    ],
                },
                {
                    title: "Database & Migration",
                    skills: [
                        { name: "Flyway", type: ["work-experience"] },
                        { name: "Liquibase", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Microservices Architecture",
                    skills: [
                        { name: "Microservices", type: ["work-experience"] },
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
                        { name: "SQL", type: ["work-experience"] },
                        { name: "MySQL", type: ["work-experience"] },
                        { name: "PostgreSQL", type: ["work-experience"] },
                        { name: "PL/SQL", type: ["work-experience"] },
                        { name: "MariaDB", type: ["work-experience"] },
                        { name: "Microsoft SQL Server", type: ["work-experience"] },
                        { name: "DB2", type: ["work-experience"] },
                    ],
                },
                {
                    title: "NoSQL",
                    skills: [
                        { name: "MongoDB", type: ["personal-projects"] },
                        { name: "Firebase", type: ["personal-projects"] },
                        { name: "Neo4j", type: ["experimental"] },
                    ],
                },
                {
                    title: "Tools",
                    skills: [
                        { name: "PgAdmin", type: ["work-experience"] },
                        { name: "phpMyAdmin", type: ["work-experience"] },
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
                        { name: "Docker", type: ["work-experience"] },
                        { name: "Podman", type: ["experimental"] },
                        { name: "Kubernetes", type: ["work-experience"] },
                        { name: "Helm", type: ["work-experience"] },
                    ],
                },
                {
                    title: "CI/CD & Version Control",
                    skills: [
                        { name: "Git", type: ["work-experience"] },
                        { name: "GitHub", type: ["work-experience"] },
                        { name: "GitHub Desktop", type: ["work-experience"] },
                        { name: "GitLab", type: ["work-experience"] },
                        { name: "Bitbucket", type: ["work-experience"] },
                        { name: "Jenkins", type: ["work-experience"] },
                        { name: "CI/CD Pipelines", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Cloud Platforms",
                    skills: [
                        { name: "Azure", type: ["work-experience"] },
                        { name: "AWS", type: ["experimental"] },
                        { name: "OpenShift", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Infrastructure as Code",
                    skills: [
                        { name: "Terraform", type: ["personal-projects"] },
                        { name: "Nx Monorepo", type: ["personal-projects"] },
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
                        { name: "Grafana", type: ["work-experience"] },
                        { name: "Kibana", type: ["work-experience"] },
                        { name: "ElasticSearch", type: ["work-experience"] },
                        { name: "Splunk", type: ["experimental"] },
                        { name: "Prometheus", type: ["work-experience"] },
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
                        { name: "OpenAI (ChatGPT)", type: ["personal-projects"] },
                        { name: "Anthropic (Claude)", type: ["experimental"] },
                        { name: "Perplexity", type: ["experimental"] },
                        { name: "Grok", type: ["experimental"] },
                        { name: "Ollama API", type: ["personal-projects"] },
                        { name: "OpenRouter", type: ["experimental"] },
                        { name: "Microsoft 365 Copilot", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Frameworks & Tools",
                    skills: [
                        { name: "LangChain", type: ["personal-projects"] },
                        { name: "LangGraph", type: ["experimental"] },
                        { name: "LangSmith", type: ["experimental"] },
                        { name: "RAG", type: ["personal-projects"] },
                        { name: "MLOps", type: ["experimental"] },
                        { name: "LLM APIs", type: ["personal-projects"] },
                    ],
                },
                {
                    title: "Privacy & Cryptography",
                    skills: [
                        { name: "PETs", type: ["experimental"] },
                        { name: "FHE (Fully Homomorphic Encryption)", type: ["experimental"] },
                        { name: "Private Set Intersection", type: ["experimental"] },
                        { name: "SMPC (Secure Multi-Party Computation)", type: ["experimental"] },
                    ],
                },
                {
                    title: "Libraries",
                    skills: [
                        { name: "NumPy", type: ["personal-projects"] },
                        { name: "SciPy", type: ["experimental"] },
                        { name: "scikit-learn", type: ["experimental"] },
                        { name: "TensorFlow", type: ["experimental"] },
                        { name: "PyTorch", type: ["experimental"] },
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
                        { name: "JUnit", type: ["work-experience"] },
                        { name: "Mockito", type: ["work-experience"] },
                        { name: "Jest", type: ["personal-projects"] },
                        { name: "Jasmine", type: ["work-experience"] },
                        { name: "PyUnit", type: ["experimental"] },
                        { name: "PyTest", type: ["experimental"] },
                        { name: "unittest", type: ["experimental"] },
                        { name: "Cypress", type: ["personal-projects"] },
                    ],
                },
                {
                    title: "Integration & Load Testing",
                    skills: [
                        { name: "Postman", type: ["work-experience"] },
                        { name: "LoadTest", type: ["experimental"] },
                        { name: "LastTest", type: ["experimental"] },
                        { name: "Integration Tests", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Automation",
                    skills: [
                        { name: "Test Automation Pipelines", type: ["work-experience"] },
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
                        { name: "IntelliJ IDEA", type: ["work-experience"] },
                        { name: "WebStorm", type: ["work-experience"] },
                        { name: "VS Code", type: ["personal-projects"] },
                        { name: "Eclipse", type: ["work-experience"] },
                        { name: "Notepad++", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Documentation & Notes",
                    skills: [
                        { name: "Confluence", type: ["work-experience"] },
                        { name: "Jira", type: ["work-experience"] },
                        { name: "SharePoint", type: ["work-experience"] },
                        { name: "Bitbucket", type: ["work-experience"] },
                        { name: "GitLab", type: ["work-experience"] },
                        { name: "Obsidian", type: ["personal-projects"] },
                        { name: "OneNote", type: ["work-experience"] },
                        { name: "XMind", type: ["personal-projects"] },
                        { name: "Mermaid", type: ["personal-projects"] },
                    ],
                },
                {
                    title: "Office & Documentation Tools",
                    skills: [
                        { name: "LibreOffice", type: ["personal-projects"] },
                        { name: "OpenOffice", type: ["personal-projects"] },
                        { name: "LaTeX", type: ["experimental"] },
                        { name: "KaTeX", type: ["experimental"] },
                        { name: "Microsoft 365", type: ["work-experience"] },
                    ],
                },
                {
                    title: "Design & Graphics",
                    skills: [
                        { name: "Figma", type: ["personal-projects"] },
                        { name: "Penpot", type: ["experimental"] },
                        { name: "Lunacy", type: ["personal-projects"] },
                        { name: "Inkscape", type: ["personal-projects"] },
                        { name: "Gimp", type: ["personal-projects"] },
                        { name: "Krita", type: ["personal-projects"] },
                        { name: "Canva", type: ["personal-projects"] },
                        { name: "Picsart", type: ["personal-projects"] },
                    ],
                },
                {
                    title: "Media & Video Tools",
                    skills: [
                        { name: "Kapwing", type: ["personal-projects"] },
                        { name: "ClipChamp", type: ["personal-projects"] },
                        { name: "Picsart", type: ["personal-projects"] },
                        { name: "Canva", type: ["personal-projects"] },
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
                        { name: "SSO", type: ["work-experience"] },
                        { name: "Authorization", type: ["work-experience"] },
                        { name: "Authentication", type: ["work-experience"] },
                        { name: "Keycloak", type: ["work-experience"] },
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
                        { name: "Pascal", type: ["experimental"] },
                        { name: "C++", type: ["experimental"] },
                    ],
                },
            ],
        },
    ],
};
