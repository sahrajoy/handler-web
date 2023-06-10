import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { OnlinecoachingComponent } from './onlinecoaching/onlinecoaching.component';
import { PersonaltrainingComponent } from './personaltraining/personaltraining.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'onlinecoaching',
    component: OnlinecoachingComponent
  },
  {
    path: 'personaltraining',
    component: PersonaltrainingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'imprint',
    component: ImprintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
