import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpotifyService } from './services/spotify.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyApiConfig } from '@ngx-spotify-api/core';
import { TracksComponent } from './tracks/tracks.component';

const appRoutes:Routes=[
  { path: 'album', component: AlbumComponent },
  { path: 'album/view/:id', component: TracksComponent },
  { path: '', component: AlbumComponent,pathMatch:'full' },
  { path: '**', redirectTo:'album' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistComponent,
    AlbumComponent,
    TracksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
