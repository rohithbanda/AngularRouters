import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { Routes, RouterModule } from '@angular/router';

import { RouterExComponent } from './router-ex/router-ex.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'router', component: RouterExComponent  },
  { path: 'text', component: TextComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RouterExComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
