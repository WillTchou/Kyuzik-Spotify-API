import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpotifyService } from '../services/spotify.service';
import {} from 'rxjs';
import { debounceTime, distinctUntilChanged,switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  results:any[]=[];
  queryField:FormControl=new FormControl();

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.queryField.valueChanges
    .pipe(debounceTime(200),
          distinctUntilChanged(),
          switchMap((query)=>this.spotifyService.getSearch(query)))
            .subscribe((response:any)=>{
              this.results=response.albums.items
          });
  }
}
