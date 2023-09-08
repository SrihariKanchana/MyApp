import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DatabindComponent } from './databind/databind.component';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe } from './custom.pipe';
import { CourseService } from './course.service';
import { HttpComponent } from './http/http.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DatabindComponent,
    LoginComponent,
    DirectiveComponent,
    CustomDirective,
    PipeComponent,
    CustomPipe,
    HttpComponent,
    CoursedetailsComponent,
    TdfComponent,
    MdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
