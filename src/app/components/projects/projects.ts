import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project{
  title: string;
  description: string;
  techStack: string[];
  github: string;
  image: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
   projects: Project[] =[
      {
        title: 'Spring AI',
        description: 'This project is a Spring Boot application built to explore and experiment with Spring AI, integrating with Gemini (Google’s Generative AI) for intelligent conversational capabilities.',
        techStack: ['Java 21', 'Spring Boot 3.3+', 'Spring AI', 'Gemini API', 'RESTful APIs', 'Maven  Build', 'JUnit 5', 'Mockito', 'Docker'],
        github: 'https://github.com/shreeganesha-k-v/Spring-AI',
        image: 'assets/spring_ai.png' 
      },
      {
        title: 'Profile Dashboard',
        description: 'Built a responsive portfolio dashboard using Angular with component-based architecture to dynamically render projects, skills, and contact details. Deployed and hosted using GitHub Pages for seamless accessibility.',
        techStack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        github: 'https://github.com/shreeganesha-k-v/profile-dashboard',
        image: 'assets/angular.png'
      },
      {
        title: 'Library Service App',
        description: 'Designed and developed a scalable Library Management system with RESTful APIs to manage books, users, and transactions. Implemented CRUD operations, optimized data handling, and ensured efficient backend processing.',
        techStack: ['Java', 'Spring Boot', 'REST API', 'Oracle', 'JPA','Docker'],
        github: 'https://github.com/shreeganesha-k-v/library-service-app',
        image: 'assets/spring_boot.png'
      },
      {
        title: 'Role Play Game',
        description: 'Developed an interactive browser-based RPG game with dynamic gameplay, character progression, and event-driven logic for an engaging user experience.',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/shreeganesha-k-v/Role-Play-Game',
        image: 'assets/javascript.png'
      },
      {
        title: 'Spreadsheet Builder',
        description: 'Built a web-based spreadsheet application supporting dynamic cell updates, formula handling, and real-time data manipulation similar to Excel.',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/shreeganesha-k-v/Spreadsheet-Builder',
        image: 'assets/javascript.png'
      },
      {
        title: 'Kafka Demo Project',
        description: 'Implemented an event-driven system using Apache Kafka with producers and consumers to demonstrate real-time data streaming and asynchronous processing.',
        techStack: ['Java', 'Spring Boot', 'Apache Kafka'],
        github: 'https://github.com/shreeganesha-k-v/kafka-demo-project',
        image: 'assets/kafka.png'
      },
      {
        title: 'Computer Human Interaction by Gestures',
        description: 'Developed a gesture recognition system using computer vision to control system operations through real-time hand movements.',
        techStack: ['Arduino Uno', 'Python', 'Ultrasonic Sensor'],
        github: 'https://github.com/shreeganesha-k-v/Computer-Human-Interaction-by-Gestures',
        image: 'assets/arduino.png'
      },
      {
        title: 'Virtual Try-On System',
        description: 'Built a virtual try-on solution using computer vision techniques to simulate real-time product fitting and enhance user experience.',
        techStack: ['Python', 'OpenCV', 'Computer Vision'],
        github: 'https://github.com/shreeganesha-k-v/Virtual-try-on',
        image: 'assets/machine_learning.png'
      },
      {
        title: 'Kubernetes Hands-on',
        description: 'Practiced container orchestration concepts by deploying and managing applications using Kubernetes, including pods, deployments, and service configurations.',
        techStack: ['Kubernetes', 'Docker', 'DevOps'],
        github: 'https://github.com/shreeganesha-k-v/kubernetes-handson',
        image: 'assets/kubernetes.png'
      },
      {
        title: 'Python Learning',
        description: 'Explored core Python concepts including data structures, problem-solving, and scripting to build a strong foundation in programming and automation.',
        techStack: ['Python'],
        github: 'https://github.com/shreeganesha-k-v/Python-learning',
        image: 'assets/python.png'
      }
   ]
}
