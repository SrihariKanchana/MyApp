import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent} from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectiveComponent } from './directive/directive.component';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';
import { MdfComponent } from './mdf/mdf.component';
import { PipeComponent } from './pipe/pipe.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
{path:'course' ,component:CourseComponent ,children:[{path:':cno',component:CoursedetailsComponent}]},
{path:'databind' ,component:DatabindComponent},
{path:'directive' ,component:DirectiveComponent},
{path:'http' ,component:HttpComponent},
{path:'login' ,component:LoginComponent},
{path:'pipe' ,component:PipeComponent},
{path:'tdf' ,component:TdfComponent},
{path:'mdf' ,component:MdfComponent},
{path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
