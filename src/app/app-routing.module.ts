import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ParentComponent } from './components/parent/parent.component';
import { WellListComponent } from './components/well-list/well-list.component';


const routes: Routes = [{
  path: 'poc1', component: UsersComponent},
  {path: 'poc2', component: WellListComponent},
  {path:'poc3', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
