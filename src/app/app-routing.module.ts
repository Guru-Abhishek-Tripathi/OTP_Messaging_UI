import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { ListofmessagesComponent } from './listofmessages/listofmessages.component';

const routes: Routes = [
  {
    path: 'contactdetails',
    component: ContactdetailsComponent
  },
  {
    path: 'listofmessages',
    component: ListofmessagesComponent
  },
  {
    path: '**',
    redirectTo: 'contactdetails',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
