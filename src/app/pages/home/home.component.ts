import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { ApiService } from "../../api/api.service";
import { SongModel, SongResponse } from "../../song/song.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnChanges, AfterViewInit {
  
  @ViewChild('search', { static: false}) search: IonSearchbar;
  
  soungs: SongModel[];

  constructor(public service: ApiService) { 
    const artist = "Shakira";
    const media = "musicVideo";
    this.service.searchSongs(artist, media).subscribe(
      (data: SongResponse) => {
        this.soungs = data.results;
        console.log("Data", data);
        console.log("Data", data.results[0]);
      },
      error => {}
    );
  }

  searchArtist(event) {
    console.log("type event: " + event)
    this.initService(event.target.value)
  }

  initService(artistName) {
    const artist = artistName;
    const media = "musicVideo";
    this.service.searchSongs(artist, media).subscribe(
      (data: SongResponse) => {
        this.soungs = data.results;
        console.log("Data", data);
        console.log("Data", data.results[0]);
      },
      error => {}
    );
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit() {}
}
