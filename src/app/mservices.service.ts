import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MservicesService {

  constructor(private http: HttpClient) { }

  getCharacters():Observable<any> {
  return this.http.get("https://gateway.marvel.com:443/v1/public/characters?apikey=1a0574214b1894a43a9a82f5090b4ee4")
  
  }

  getCreators():Observable<any> {
    return this.http.get("https://gateway.marvel.com:443/v1/public/creators?apikey=1a0574214b1894a43a9a82f5090b4ee4")
    
    }
    getStories():Observable<any> {
      return this.http.get("https://gateway.marvel.com:443/v1/public/stories?apikey=1a0574214b1894a43a9a82f5090b4ee4")
      
      }
      getSeries():Observable<any> {
        return this.http.get("https://gateway.marvel.com:443/v1/public/series?apikey=1a0574214b1894a43a9a82f5090b4ee4")
        
        }
        getEvents():Observable<any> {
          return this.http.get("https://gateway.marvel.com:443/v1/public/events?apikey=1a0574214b1894a43a9a82f5090b4ee4")
          
          }
          getComics():Observable<any> {
            return this.http.get("https://gateway.marvel.com:443/v1/public/comics?apikey=1a0574214b1894a43a9a82f5090b4ee4")
            
            }
}
