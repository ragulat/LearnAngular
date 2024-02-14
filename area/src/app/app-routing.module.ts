import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

const routes: Routes = [

{path:'home', component:HomeComponent},
{path:'empaddedit', component: EmpAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
