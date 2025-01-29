import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  @Input() isOpen = false;
  @Input() projectName = '';
  @Input() projectDescription = '';
  @Input() projectPhoto = '';
  @Input() projectVideo = '';
  @Input() projectDemo = '';
  @Input() projectRepo = '';

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
