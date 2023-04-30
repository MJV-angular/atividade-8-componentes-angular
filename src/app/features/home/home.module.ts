import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    HomeMainComponent,
  ]
})
export class HomeModule {

}
