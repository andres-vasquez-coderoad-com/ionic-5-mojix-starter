import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchSongs(apiKey: string, language: string): Observable<MovieResponse> {
    const path = `https://api.themoviedb.org/3/movie/popular?language=${language}&api_key=${apiKey}`;
    return this.http.get<MovieResponse>(path);
  }
}
