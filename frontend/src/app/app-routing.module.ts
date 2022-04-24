import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardGestacComponent} from './board-gestac/board-gestac.component';
import { BoardGestadComponent} from './board-gestad/board-gestad.component';
import { BoardGestrComponent } from './board-gestr/board-gestr.component';
import {AddagComponent} from'./admin/addag/addag.component';
import {AddcmptComponent} from './admin/addcmpt/addcmpt.component';
import {AddfourComponent} from './admin/addfour/addfour.component';
import {AddmatComponent} from './admin/addmat/addmat.component';
import {AddraprecComponent} from './admin/addraprec/addraprec.component';
import {AddrecComponent} from './admin/addrec/addrec.component';
import {ShowagComponent} from './admin/showag/showag.component';
import {ShowcmptComponent} from './admin/showcmpt/showcmpt.component';
import {ShowfourComponent} from './admin/showfour/showfour.component';
import {ShowlrecComponent} from './admin/showlrec/showlrec.component';
import {ShowlrecnowComponent} from './admin/showlrecnow/showlrecnow.component';
import {ShowmatComponent} from './admin/showmat/showmat.component';
import {ShowraprecComponent} from './admin/showraprec/showraprec.component';
import {ShowrecComponent} from './admin/showrec/showrec.component';
import {AddfourgestacComponent} from './gestac/addfourgestac/addfourgestac.component';
import {ShowfourgestacComponent} from './gestac/showfourgestac/showfourgestac.component';
import {ShowlrecgestacComponent} from './gestac/showlrecgestac/showlrecgestac.component';
import {ShowlrecnowgestacComponent} from './gestac/showlrecnowgestac/showlrecnowgestac.component';
import {ShowlrecprocComponent} from './gestac/showlrecproc/showlrecproc.component';
import {AddaggestadComponent} from './gestad/addaggestad/addaggestad.component';
import {AddmatgestadComponent} from './gestad/addmatgestad/addmatgestad.component';
import {AddraprecgestadComponent} from './gestad/addraprecgestad/addraprecgestad.component';
import {ShowaggestadComponent} from './gestad/showaggestad/showaggestad.component';
import {ShowmatgestadComponent} from './gestad/showmatgestad/showmatgestad.component';
import {ShowraprecgestadComponent} from './gestad/showraprecgestad/showraprecgestad.component';
import {ShowrecnowadComponent} from './gestad/showrecnowad/showrecnowad.component'
import {AddmatgestrComponent} from './gestr/addmatgestr/addmatgestr.component';
import {AddrecgestrComponent} from './gestr/addrecgestr/addrecgestr.component';
import {ShowmatgestrComponent} from './gestr/showmatgestr/showmatgestr.component';
import {ShowrecgestrComponent} from './gestr/showrecgestr/showrecgestr.component';
import {HelpCenterComponent } from './help-center/help-center.component';
import {InfosComponent} from './infos/infos.component';
import {ModifcmptComponent} from './admin/modifcmpt/modifcmpt.component';
import {ModifrecComponent} from './admin/modifrec/modifrec.component';
import {ModifagComponent } from './admin/modifag/modifag.component';
import { ModiffourComponent} from'./admin/modiffour/modiffour.component';
import { ModifmatComponent} from './admin/modifmat/modifmat.component';
import { ModifrecgestacComponent } from './gestac/modifrecgestac/modifrecgestac.component'
import {ModiffourgestacComponent} from './gestac/modiffourgestac/modiffourgestac.component';
import {ModifaggestadComponent} from './gestad/modifaggestad/modifaggestad.component';
import { ModifmatgestadComponent } from './gestad/modifmatgestad/modifmatgestad.component';
import {ModifmatgestrComponent} from './gestr/modifmatgestr/modifmatgestr.component';
import { ModifrecgestrComponent } from './gestr/modifrecgestr/modifrecgestr.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
      children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'blank',
        component: BlankComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      { path: 'ADMIN',
       component: BoardAdminComponent

      },
      { path: 'GESTR',
       component: BoardGestrComponent
      },
      { path: 'GESTAD',
       component: BoardGestadComponent
      },
      { path: 'GESTAC',
       component: BoardGestacComponent
      },
      { path: 'Addagadmin',
       component: AddagComponent
      },
      { path: 'Addcmptadmin',
       component: AddcmptComponent
      },
      { path: 'Addfouradmin',
       component: AddfourComponent
      },
      { path: 'Addmatadmin',
       component: AddmatComponent
      },
      { path: 'Addrapadmin',
       component: AddraprecComponent
      },
      { path: 'Addrecadmin',
       component: AddrecComponent
      },
      { path: 'Showagadmin',
       component: ShowagComponent
      },
      { path: 'Showcmptadmin',
       component: ShowcmptComponent
      },
      { path: 'Showfouradmin',
       component: ShowfourComponent
      },
      { path: 'Showlistrecadmin',
       component: ShowlrecComponent
      },
      { path: 'Showlistrecnowadmin',
       component: ShowlrecnowComponent
      },
      { path: 'Showmatadmin',
       component: ShowmatComponent
      },
      { path: 'Showraprecadmin',
       component: ShowraprecComponent
      },
      { path: 'Showrecadmin',
       component: ShowrecComponent
      },
      { path: 'Addfourgestac',
       component: AddfourgestacComponent
      },
      { path: 'Showfourgestac',
       component: ShowfourgestacComponent
      },
      { path: 'Showlistrecgestac',
       component: ShowlrecgestacComponent
      },
      { path: 'Showlistrecnowgestac',
       component: ShowlrecnowgestacComponent
      },
      { path: 'Showlistrecprocgestac',
       component: ShowlrecprocComponent
      },
      { path: 'Addaggestad',
       component: AddaggestadComponent
      },
      { path: 'Addraprecgestad',
       component: AddraprecgestadComponent
      },
      { path: 'Addmatgestad',
       component: AddmatgestadComponent
      },
      { path: 'Showaggestad',
       component: ShowaggestadComponent
      },
      { path: 'Showmatgestad',
       component: ShowmatgestadComponent
      },
      { path: 'Showraprecgestad',
       component: ShowraprecgestadComponent
      },
      { path: 'Showrecnowad',
       component: ShowrecnowadComponent
      },
      { path: 'Addmatgestr',
       component: AddmatgestrComponent
      },
      { path: 'Addrecgestr',
       component: AddrecgestrComponent
      },
      { path: 'Showmatgestr',
       component: ShowmatgestrComponent
      },
      { path: 'Showrecgestr',
       component: ShowrecgestrComponent
      },
      { path: 'Helpcenter',
      component: HelpCenterComponent
     },
     { path: 'Infos',
      component: InfosComponent
     },
     { path: 'Modifcmptadmin/:id',
      component: ModifcmptComponent
     },
     { path: 'Modifrecadmin/:id',
      component: ModifrecComponent
     },
     { path: 'Modifagadmin/:id',
      component: ModifagComponent
     },
     { path: 'Modifouradmin/:id',
      component: ModiffourComponent
     },
     { path: 'Modimatadmin/:id',
      component: ModifmatComponent
     },
     { path: 'Modifrecgestac/:id',
      component: ModifrecgestacComponent
     },
     { path: 'Modifourgestac/:id',
      component: ModiffourgestacComponent
     },
     { path: 'Modifaggestad/:id',
      component: ModifaggestadComponent
     },
     { path: 'Modifmatgestad/:id',
      component: ModifmatgestadComponent
     },
     { path: 'Modifmatgestr/:id',
      component: ModifmatgestrComponent
     },
     { path: 'Modifrecgestr/:id',
     component: ModifrecgestrComponent
    },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,

  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
