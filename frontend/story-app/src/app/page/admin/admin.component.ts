import { Component } from '@angular/core';
import { StoryListComponent } from '../../components/story-list/story-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StoryListComponent],
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
