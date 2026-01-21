// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Root component
import { AppComponent } from './app.component';

// Page components
import { HomeComponent } from './pages/home/home.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { AdminComponent } from './pages/admin/admin.component';

// Components
import { StoryFormComponent } from './components/story-form/story-form.component';
import { StoryListComponent } from './components/story-list/story-list.component';

// Routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoriesComponent,
    AdminComponent,
    StoryFormComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
