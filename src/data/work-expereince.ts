import type { WorkExperience } from '@/models/skills.model.ts'
import { softwareDevelopment } from '@/data/software-development.ts'

const workExperience: WorkExperience[] = [
  {
    company: 'IKONSOFT',
    companyId: 'ikonsoft',
    position: '3rd Level Support',
    description:
      'Analyzing and solving complex technical issues reported by users, providing expert guidance to lower-level ' +
      'support teams, and ensuring timely resolution of critical problems to maintain high customer satisfaction.',
    startDate: '2013-Apr',
    endDate: '2016-Jun',
    years: 3,
  },
  {
    company: 'msg systems AG',
    companyId: 'msg-systems',
    position: 'Software Engineer',
    description:
      'Designing, developing, and maintaining software applications and systems, collaborating with cross-functional ' +
      'teams to deliver high-quality solutions that meet business requirements and enhance user experience. ',
    startDate: '2016-Jul',
    endDate: 'present',
    years: 9,
  },
]

export { workExperience }
