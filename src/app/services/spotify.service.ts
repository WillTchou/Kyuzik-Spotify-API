import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  devant: HttpHeaders=new HttpHeaders({
    'Authorization': 'Bearer BQDapG-cT-Q56IO1YgSMnYKBuom1-7cpHdV8cfSBgFGbNLa-v_423H-dUJ_pCixYl1dFGwgwANIcKvj9jBSQVSVH3E8O2I4v6bChFdgQmJrO9ZoNjQnLr5WwiNT3HoQkpxPvnwJsmA-wZv0BNf6c0TfppcoeTEwZ3UWx8huhRxEWqCoyesDBDgbYFZEqR1KmpgNxbQEj3bvuL1LHm_NXU8JItsnVdlui0--blPeZh30N4f-nP6tL2F51JoXZMf7SVIe0YX4b0PCRAW7nJsTB3Ncd'
  })

  constructor(private http:HttpClient) { }

  getAlbums(){
    return this.http.get('https://api.spotify.com/v1/albums',
                        {headers: this.devant});
  }

  getReleases(){
    return this.http.get("https://api.spotify.com/v1/browse/new-releases",
                        {headers: this.devant});
  }

  getArtists(){
    return this.http.get("https://api.spotify.com/v1/artists",
                        {headers: this.devant})
  }

  getPlaylists(){
    return this.http.get("https://api.spotify.com/v1/me/playlists",
                        {headers: this.devant});
  }

  getOnceAlbum(id:string){
    return this.http.get("https://api.spotify.com/v1/albums/"+id,
                    {headers: this.devant});
  }

  getOnceAritist(id:string){
    return this.http.get("https://api.spotify.com/v1/artists/"+id,
                    {headers: this.devant});
  }

  getOncePlaylist(id:string){
    return this.http.get("https://api.spotify.com/v1//"+id,
                    {headers: this.devant});
  }

  getOnceTrack(id:string){
    return this.http.get("https://api.spotify.com/v1/tracks/"+id,
                    {headers: this.devant});
  }

  getSearch(queryString:string){
    return this.http.get("https://api.spotify.com/v1/search?q="+queryString+"&type=album&market=FR&limit=5&offset=5",
                        {headers: this.devant});
  }
}
