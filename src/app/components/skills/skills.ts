import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class SkillsComponent {
  skills = [
 "Java",
 "Spring Boot",
 "Microservices",
 "Angular",
 "JavaScript",
 "Oracle",
 "Docker",
 "REST APIs"
];
}
