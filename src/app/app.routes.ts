import { Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule , NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

export const routes: Routes = [
    {path:'' , redirectTo:'login',pathMatch:'full'},
    {path:'login' , component:LoginComponent},
    {path:'home' , component:HomeComponent},
    {path:'header' , component:HeaderComponent},
    {path:'footer' , component:FooterComponent},
    {path:'**' , component:LoginComponent}
];

@NgModule({
    imports: [NgbModule],
})

export class AppComponent {
    constructor(ngbAlertConfig: NgbAlertConfig) {
      ngbAlertConfig.animation = false;
    }
  }
