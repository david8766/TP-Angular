import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UListComponent } from './admin/user/u-list/u-list.component';
import { UAddComponent } from './admin/user/u-add/u-add.component';
import { UEditComponent } from './admin/user/u-edit/u-edit.component';
import { UDeleteComponent } from './admin/user/u-delete/u-delete.component';
import { UlistComponent } from './components/ulist/ulist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    HomeComponent,
    AdminComponent,
    UListComponent,
    UAddComponent,
    UEditComponent,
    UDeleteComponent,
    UlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
