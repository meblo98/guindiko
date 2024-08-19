import { Routes } from '@angular/router';
import { InscriptionMenteComponent } from './auth/inscription-mente/inscription-mente.component';
import { LoginComponent } from './auth/login/login.component';
import { InscriptionMentorComponent } from './auth/inscription-mentor/inscription-mentor.component';
import { TableauBordComponent } from './admin/tableau-bord/tableau-bord.component';
import { RoleComponent } from './admin/role/role.component';
import { PermissionComponent } from './admin/permission/permission.component';
import { GestionUserComponent } from './admin/gestion-user/gestion-user.component';
import { ForumComponent } from './admin/forum/forum.component';
import { ListeMesDemandesComponent } from './mente/liste-mes-demandes/liste-mes-demandes.component';
import { ListeRDVComponent } from './mente/liste-rdv/liste-rdv.component';
import { ListeDemandesComponent } from './mentor/liste-demandes/liste-demandes.component';
import { DetailDemandeComponent } from './mentor/detail-demande/detail-demande.component';
import { FormRDVComponent } from './mentor/form-rdv/form-rdv.component';

import { ServicesComponent } from './portail/services/services.component'; //MOI Mise à jour 


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription-mente', component: InscriptionMenteComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inscription-mentor', component: InscriptionMentorComponent},
  { path: 'dashbord', component: TableauBordComponent},
  { path: 'role', component: RoleComponent},
  { path: 'permission', component: PermissionComponent},
  { path: 'user', component: GestionUserComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'mes-demandes', component: ListeMesDemandesComponent},
  { path: 'mes-rdv', component: ListeRDVComponent},
  { path: 'mentor-rdv', component: ListeRDVComponent},
  { path: 'mentor-demande', component: ListeDemandesComponent},
  { path: 'mentor-demande/:id', component: DetailDemandeComponent},
  { path: 'ajout-rdv', component: FormRDVComponent},

  { path: 'services', component: ServicesComponent }// MOI Route pour l'accueil


  
];
