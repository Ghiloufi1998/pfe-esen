import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MenuSidebarComponent } from './main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './pages/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardGestrComponent } from './board-gestr/board-gestr.component';
import { BoardGestadComponent } from './board-gestad/board-gestad.component';
import { BoardGestacComponent } from './board-gestac/board-gestac.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { AddcmptComponent } from './admin/addcmpt/addcmpt.component';
import { ShowcmptComponent } from './admin/showcmpt/showcmpt.component';
import { AddrecComponent } from './admin/addrec/addrec.component';
import { ShowrecComponent } from './admin/showrec/showrec.component';
import { AddagComponent } from './admin/addag/addag.component';
import { ShowagComponent } from './admin/showag/showag.component';
import { ShowlrecComponent } from './admin/showlrec/showlrec.component';
import { ShowlrecnowComponent } from './admin/showlrecnow/showlrecnow.component';
import { AddfourComponent } from './admin/addfour/addfour.component';
import { ShowfourComponent } from './admin/showfour/showfour.component';
import { AddmatComponent } from './admin/addmat/addmat.component';
import { ShowmatComponent } from './admin/showmat/showmat.component';
import { AddraprecComponent } from './admin/addraprec/addraprec.component';
import { ShowraprecComponent } from './admin/showraprec/showraprec.component';
import { ShowlrecprocComponent } from './gestac/showlrecproc/showlrecproc.component';
import { ShowrecnowadComponent } from './gestad/showrecnowad/showrecnowad.component';
import { AddrecgestrComponent } from './gestr/addrecgestr/addrecgestr.component';
import { ShowrecgestrComponent } from './gestr/showrecgestr/showrecgestr.component';
import { AddmatgestrComponent } from './gestr/addmatgestr/addmatgestr.component';
import { ShowmatgestrComponent } from './gestr/showmatgestr/showmatgestr.component';
import { AddaggestadComponent } from './gestad/addaggestad/addaggestad.component';
import { ShowaggestadComponent } from './gestad/showaggestad/showaggestad.component';
import { ShowmatgestadComponent } from './gestad/showmatgestad/showmatgestad.component';
import { AddmatgestadComponent } from './gestad/addmatgestad/addmatgestad.component';
import { AddraprecgestadComponent } from './gestad/addraprecgestad/addraprecgestad.component';
import { ShowraprecgestadComponent } from './gestad/showraprecgestad/showraprecgestad.component';
import { ShowlrecgestacComponent } from './gestac/showlrecgestac/showlrecgestac.component';
import { ShowlrecnowgestacComponent } from './gestac/showlrecnowgestac/showlrecnowgestac.component';
import { AddfourgestacComponent } from './gestac/addfourgestac/addfourgestac.component';
import { ShowfourgestacComponent } from './gestac/showfourgestac/showfourgestac.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { InfosComponent } from './infos/infos.component';
import {MatTableModule} from '@angular/material/table';
import { ModifcmptComponent } from './admin/modifcmpt/modifcmpt.component';
import { ModifrecComponent } from './admin/modifrec/modifrec.component';
import { ModifagComponent } from './admin/modifag/modifag.component';
import { ModiffourComponent } from './admin/modiffour/modiffour.component';
import { ModifmatComponent } from './admin/modifmat/modifmat.component';
import { ModifrecgestacComponent } from './gestac/modifrecgestac/modifrecgestac.component';
import { ModiffourgestacComponent } from './gestac/modiffourgestac/modiffourgestac.component';
import { ModifaggestadComponent } from './gestad/modifaggestad/modifaggestad.component';
import { ModifmatgestadComponent } from './gestad/modifmatgestad/modifmatgestad.component';
import { ModifmatgestrComponent } from './gestr/modifmatgestr/modifmatgestr.component';
import { ModifrecgestrComponent } from './gestr/modifrecgestr/modifrecgestr.component';
import { AbcdefComponent } from './abcdef/abcdef.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    BoardAdminComponent,
    BoardGestrComponent,
    BoardGestadComponent,
    BoardGestacComponent,
    AddcmptComponent,
    ShowcmptComponent,
    AddrecComponent,
    ShowrecComponent,
    AddagComponent,
    ShowagComponent,
    ShowlrecComponent,
    ShowlrecnowComponent,
    AddfourComponent,
    ShowfourComponent,
    AddmatComponent,
    ShowmatComponent,
    AddraprecComponent,
    ShowraprecComponent,
    ShowlrecprocComponent,
    ShowrecnowadComponent,
    AddrecgestrComponent,
    ShowrecgestrComponent,
    AddmatgestrComponent,
    ShowmatgestrComponent,
    AddaggestadComponent,
    ShowaggestadComponent,
    ShowmatgestadComponent,
    AddmatgestadComponent,
    AddraprecgestadComponent,
    ShowraprecgestadComponent,
    ShowlrecgestacComponent,
    ShowlrecnowgestacComponent,
    AddfourgestacComponent,
    ShowfourgestacComponent,
    HelpCenterComponent,
    InfosComponent,
    ModifcmptComponent,
    ModifrecComponent,
    ModifagComponent,
    ModiffourComponent,
    ModifmatComponent,
    ModifrecgestacComponent,
    ModiffourgestacComponent,
    ModifaggestadComponent,
    ModifmatgestadComponent,
    ModifmatgestrComponent,
    ModifrecgestrComponent,
    AbcdefComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
