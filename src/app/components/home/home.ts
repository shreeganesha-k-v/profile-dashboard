import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  name: string = "Shreeganesha K V";

  role: string = "Full Stack Developer";

  tagline: string = "Spring Boot | Microservices | REST APIs";

  description: string =
    "Full Stack Developer experienced in developing and scaling enterprise-grade FinTech applications for workplace investing and employee benefit platforms. Skilled in backend architecture, RESTful services, and leading system migrations from legacy to modern microservices, ensuring performance, security, and reliability.";

  profileImage: string = "assets/profile.jpeg";

  showProfileDialog = false;

  openProfileDialog() {
    this.showProfileDialog = true;
  }

  closeProfileDialog() {
    this.showProfileDialog = false;
  }

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
