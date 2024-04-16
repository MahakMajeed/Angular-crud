import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';

import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
   {path:'', component:UserComponent},
   {path:'new', component:NewUserComponent },
   {path:'edit/:id', component:EditUserComponent},

  //  {
  //   path:'', component:UserComponent,
  //   children:[
  //     {path:'edit/:id', component:EditUserComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
