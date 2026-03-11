import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  name: string = "Shreeganesha K V";

  role: string = "Java Backend Developer";

  tagline: string = "Spring Boot | Microservices | REST APIs";

  description: string =
    "Backend Developer with experience building scalable banking applications and REST APIs in the FinTech domain.";

  profileImage: string = "assets/profile.jpeg";

  techStack: string[] = [
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "PostGreSQL",
    "Docker",
    "Angular",
    "Git",
    "Kubernetes",
    "AWS"
  ];

  stats = [
    {
      value: "3.5+",
      label: "Years Experience"
    },
    {
      value: "10+",
      label: "Microservices Built"
    },
    {
      value: "500+",
      label: "LeetCode Problems"
    }
  ];

  achievements = [
    {
      title: "100 Day LeetCode Streak",
      description: "Top 4% of LeetCode users"
    },
    {
      title: "SAFe 6.0 Certified",
      description: "Scaled Agile Framework Certification"
    },
    {
      title: "Pat on the Back Award",
      description: "Recognized for technical contribution"
    }
  ];
}
