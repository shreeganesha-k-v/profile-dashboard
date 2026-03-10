import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  projects = [
{
 name:"Vibben Migration",
 tech:"Spring Boot, REST",
 desc:"Migrated SOAP services to REST."
},
{
 name:"Kubernetes Hands-on",
 tech:"Docker, K8s",
 desc:"Containerized applications."
}
];
}
