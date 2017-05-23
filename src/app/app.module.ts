import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule , Routes} from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AuthService } from './service/auth.service'
import { UserService } from './service/user.service'
import { HutService } from './service/hut.service'

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';

const ROUTES : Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"posts",
    component: PostsComponent
  },
  {
    path:"map",
    component: MapComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    MapComponent,
    HeaderComponent,
    CarouselComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMe52VdxfjAFcQBZg1w3lBAdWbIUOZWLI'
    }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService,UserService,HutService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AIzaSyCMe52VdxfjAFcQBZg1w3lBAdWbIUOZWLI