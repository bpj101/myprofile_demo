import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StatsComponent } from './components/stats/stats.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowersComponent } from './components/followers/followers.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StatsComponent,
    FollowingComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'profile', pathMatch: 'full'
      },
      {
        path: 'profile', component: ProfileComponent,
        children: [
          {
            path: '', redirectTo: 'following', pathMatch: 'full'
          },
          {
            path: 'following',
            component: FollowingComponent
          },
          {
            path: 'followers',
            component: FollowersComponent
          }
        ]
      }
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
