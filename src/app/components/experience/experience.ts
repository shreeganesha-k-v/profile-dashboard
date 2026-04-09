import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Role {
  title: string;
  duration: string;
  current: boolean;
  employmentType?: string;
  project?: string;
  highlights: string[];
  techStack: string[];
}

interface Experience {
  company: string;
  location: string;
  project?: string;
  roles: Role[];
  logoUrl?: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Fidelity Investments (via NTT DATA)',
      location: 'Bengaluru, India',
      project: 'Workplace Investing , Fidelity Healthcare and Benefits (FHB) division',
      logoUrl: '/assets/fidelity-logo.png',
      roles: [
        {
          title: 'Full Stack Developer',
          duration: 'Aug 2025 – Present',
          current: true,
          employmentType: 'Contract',
          highlights: [
            'Worked onsite at Fidelity Investments Workplace Investing division via NTT DATA',
            'Contributed to enterprise recordkeeping platforms managing workplace investment accounts and employee benefit programs',
            'Built systems supporting retirement plans, health insurance, and employee benefits',
            'Developed scalable backend services using Java and Spring Boot',
            'Designed REST APIs and microservices architecture',
            'Built UI features using React and Angular',
            'Improved system performance, security, and reliability',
            'Collaborated in agile cross-functional teams to deliver releases'
          ],
          techStack: [
            'Java',
            'Spring Boot',
            'Microservices',
            'React',
            'Angular',
            'REST API',
            'Kubernetes',
            'Docker',
            'AWS',
            'Azure'
          ]
        }
      ]
    },

    {
      company: 'Tietoevry',
      location: 'Bengaluru, India',
      logoUrl: '/assets/tietoevry-logo.png',
      roles: [
        {
          title: 'Software Engineer',
          duration: 'Feb 2023 – Aug 2025',
          current: false,
          project: 'My Savings Project',
          highlights: [
            'Handled 1M+ daily API calls using Java, Spring Boot, Apache Camel',
            'Built proxy applications improving system interoperability',
            'Worked on React frontend integration',
            'Managed CI/CD pipelines with 99% success rate',
            'Mentored junior developers',
            'Developed batch scheduler for stock updates'
          ],
          techStack: [
            'Java',
            'Spring Boot',
            'Apache Camel',
            'React',
            'Jenkins',
            'Azure'
          ]
        },
        {
          title: 'Junior Software Engineer',
          duration: 'Aug 2022 – Feb 2023',
          current: false,
          project: 'Vibben Migration',
          highlights: [
            'Migrated 15+ SOAP services to REST APIs',
            'Reduced response time by 40%',
            'Maintained 90%+ test coverage',
            'Provided production support'
          ],
          techStack: [
            'Java',
            'Spring Boot',
            'REST API'
          ]
        }
      ]
    }
  ];
}
