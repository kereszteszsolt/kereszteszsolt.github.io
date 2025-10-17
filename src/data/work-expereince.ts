import type { WorkExperience } from '@/models/skills.model.ts'
import { softwareDevelopment } from '@/data/software-development.ts'

const workExperience: WorkExperience[] = [
  {
    company: 'IKONSOFT',
    companyId: 'ikonsoft',
    position: '3rd Level Support',
    description:
      'Responsibilities include analyzing and resolving complex technical issues reported by users, providing expert ' +
      'guidance to junior support teams, and ensuring the timely resolution of critical incidents within tight deadlines.',
    startDate: '2013-Apr',
    endDate: '2016-Jun',
    years: 3,
  },
  {
    company: 'msg systems AG',
    companyId: 'msg-systems',
    position: 'Software Engineer',
    description:
      'Responsible for designing, developing, and maintaining software applications and systems, while collaborating' +
      ' with cross-functional teams to deliver high-quality solutions that meet business requirements and enhance user' +
      ' experience. Additionally, responsible for onboarding new team members.' +
      ' Successfully contributed to 9+ projects across various domains.',
    startDate: '2016-Jul',
    endDate: 'present',
    years: 9,
  },
]

export { workExperience }
