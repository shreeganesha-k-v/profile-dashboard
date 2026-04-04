import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class SkillsComponent {

  skillCategories: SkillCategory[] = [

    {
      title: "Backend Development",
      skills: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Hibernate / JPA",
        "Java Reflection",
        "Java Streams",
        "Java Concurrency",
        "Design Patterns"
      ]
    },

    {
      title: "Frontend Development",
      skills: [
        "Angular",
        "ReactJs",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Bootstrap"
      ]
    },

    {
      title: "Databases",
      skills: [
        "Oracle",
        "SQL",
        "H2 Database",
        "Database Design"
      ]
    },

    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Git",
        "GitHub",
        "CI/CD",
        "Postman",
        "Swagger",
        "Jenkins"
      ]
    },

    {
      title: "Architecture & Practices",
      skills: [
        "Microservices Architecture",
        "System Design",
        "Distributed Systems",
        "API Security",
        "Performance Optimization"
      ]
    }

  ];
}