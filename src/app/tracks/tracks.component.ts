import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})


export class TracksComponent implements OnInit {

  constructor(private spotifyService:SpotifyService,
              private route: ActivatedRoute ) { 
              }

  artists:any[];
  imgAlbum:any[];
  nomAlbum:string;
  release:string;
  id:string;
  nombre:number;
  sons:any[];
  previews:string[]=[];
  playlist:Howl[]=[];
  isPause=true;
  

  ngOnInit(): void {
   this.id= this.route.snapshot.params['id'];
   Howler.autoUnlock = false;
   this.spotifyService.getOnceAlbum(this.id)
      .subscribe((data:any)=>{
        console.log(data.tracks.items);
        this.nomAlbum=data.name;
        this.artists=data.artists;
        this.release=data.release_date;
        this.imgAlbum=data.images;
        this.nombre=data.total_tracks;
        this.sons=data.tracks.items;
        this.sons.forEach(son=>{         
          this.playlist.push(new Howl({
            src:[son.preview_url!=null? son.preview_url:""],
            format:['mp3'],
            html5: true,
            autoplay:false,
            volume: 0.5,
          }));
        });
   });
  }

  duree(ms:number): string {
    var min = Math.floor((ms/1000/60) << 0);
    var sec = Math.floor((ms/1000) % 60);
    return min+":"+sec;
  }

  onPlay(i:number){
    this.playlist[i].play();
    this.isPause=false;
  }

  onPause(i:number){
    this.playlist[i].pause();
    this.isPause=true;
  }

}

