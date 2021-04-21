import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ApiService } from "../../api/api.service";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, IonicModule],
  providers: [ApiService],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule {}
