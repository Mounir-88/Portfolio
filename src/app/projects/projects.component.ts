import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { Project } from '../cards/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardsComponent, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isModalOpen = false;
  modalData: Project | null = null;

  openModal(project: Project) {
    this.modalData = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalData = null;
  }
}
