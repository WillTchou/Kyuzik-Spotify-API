import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '@ngx-spotify-api/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(private spotifyService:SpotifyService,
              private router:Router) { }

  nouveauxSons:any[];

  ngOnInit(): void {
    this.spotifyService.getReleases().
      subscribe((data:any)=>{
        console.log(data.albums.items);
        this.nouveauxSons=data.albums.items;
      });
  }

  onTracks(id:string){
    this.router.navigate(['/album','view',id]);
  }
  

}
