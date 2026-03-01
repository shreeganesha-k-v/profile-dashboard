import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { SkillsComponent } from './components/skills/skills';
import { AboutComponent } from './components/about/about';
import { ProjectsComponent } from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { CertificationsComponent } from './components/certifications/certifications';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'skills', component: SkillsComponent },
 { path: 'projects', component: ProjectsComponent },
 { path: 'experience', component: ExperienceComponent },
 { path: 'certifications', component: CertificationsComponent },
 { path: 'contact', component: ContactComponent }
];
