import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
