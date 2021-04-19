import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ApiService } from "./api/api.service";
import { SongComponent } from "./song/song.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  declarations: [AppComponent, HelloComponent, SongComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
