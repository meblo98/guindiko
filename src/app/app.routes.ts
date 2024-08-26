import { UserFormComponent } from './admin/user-form/user-form.component';
import { Routes } from '@angular/router';

import { InscriptionMenteComponent } from './auth/inscription-mente/inscription-mente.component';
import { LoginComponent } from './auth/login/login.component';
import { InscriptionMentorComponent } from './auth/inscription-mentor/inscription-mentor.component';
import { TableauBordComponent } from './admin/tableau-bord/tableau-bord.component';
import { RoleComponent } from './admin/role/role.component';
import { PermissionsComponent } from './admin/permission/permission.component';
import { GestionUserComponent } from './admin/gestion-user/gestion-user.component';
import { ForumComponent } from './admin/forum/forum.component';
import { ListeMesDemandesComponent } from './mente/liste-mes-demandes/liste-mes-demandes.component';
import { ListeRDVComponent } from './mente/liste-rdv/liste-rdv.component';
import { ListeDemandesComponent } from './mentor/liste-demandes/liste-demandes.component';
import { DetailDemandeComponent } from './mentor/detail-demande/detail-demande.component';
import { FormRDVComponent } from './mentor/form-rdv/form-rdv.component';
import { AccueilComponent } from './portail/accueil/accueil.component';
import { DetailUserComponent } from './admin/detail-user/detail-user.component';
import { AssignPermissionComponent } from './admin/assign-permission/assign-permission.component';
import { AproposComponent } from './portail/apropos/apropos.component';
import { ServicesComponent } from './portail/services/services.component';
import { PortailComponent } from './mente/accueil/accueil.component';
import { ListeMentorsComponent } from './mente/liste-mentors/liste-mentors.component';
import { DashboardMentorComponent } from './mentor/dashboard-mentor/dashboard-mentor.component';
import { ListeRDVMentorComponent } from './mentor/liste-rdv/liste-rdv.component';
import { ListeMenteAccepteComponent } from './mentor/liste-mente-accepte/liste-mente-accepte.component';

import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

// export const routes: Routes = [
//   { path: '', redirectTo: '/accueil', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'inscription-mente', component: InscriptionMenteComponent},
//   { path: 'inscription-mentor', component: InscriptionMentorComponent},

//   // Routes protégées par AuthGuard
//   { path: 'dashboard', component: TableauBordComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },
//   { path: 'roles', component: RoleComponent, canActivate: [AuthGuard] },
//   { path: 'permissions', component: PermissionsComponent, canActivate: [AuthGuard] },
//   { path: 'user', component: GestionUserComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
//   { path: 'detail-user/:id', component: DetailUserComponent, canActivate: [AuthGuard] },
//   { path: 'forum', component: ForumComponent, canActivate: [AuthGuard] },
//   { path: 'mes-demandes', component: ListeMesDemandesComponent, canActivate: [AuthGuard] },
//   { path: 'mes-rdv', component: ListeRDVComponent, canActivate: [AuthGuard] },
//   { path: 'liste-mentor', component: ListeMentorsComponent, canActivate: [AuthGuard] },
//   { path: 'mentor-rdv', component: ListeRDVMentorComponent, canActivate: [AuthGuard] },
//   { path: 'mentor-demande', component: ListeDemandesComponent, canActivate: [AuthGuard] },
//   { path: 'mentor-demande/:id', component: DetailDemandeComponent, canActivate: [AuthGuard] },
//   { path: 'ajout-rdv', component: FormRDVComponent, canActivate: [AuthGuard] },
//   { path: 'dashboard-mentor', component: DashboardMentorComponent, canActivate: [AuthGuard] },
//   { path: 'liste-mente', component: ListeMenteAccepteComponent, canActivate: [AuthGuard] },

//   { path: 'accueil', component: AccueilComponent },
//   { path: 'accueil-mentee', component: PortailComponent},
//   { path: 'user-form/:id', component: UserFormComponent, canActivate: [AuthGuard] },
//   { path: 'assign-permission', component: AssignPermissionComponent, canActivate: [AuthGuard] },
//   { path: 'apropos', component: AproposComponent },

//   { path: 'services', component: ServicesComponent }
// ];
export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inscription-mente', component: InscriptionMenteComponent},
  { path: 'inscription-mentor', component: InscriptionMentorComponent},
  { path: 'dashboard', component: TableauBordComponent, canActivate: [AuthGuard]},
  { path: 'roles', component: RoleComponent, canActivate: [AuthGuard]},
  { path: 'permissions', component: PermissionsComponent, canActivate: [AuthGuard]},
  { path: 'user', component: GestionUserComponent, canActivate: [AuthGuard]},
  { path: 'detail-user/:id', component: DetailUserComponent, canActivate: [AuthGuard]},
  { path: 'assign-permission', component: AssignPermissionComponent, canActivate: [AuthGuard]},
  { path: 'user-form/:id', component: UserFormComponent, canActivate: [AuthGuard]},

  { path: 'forum', component: ForumComponent, canActivate: [AuthGuard] },
  { path: 'mes-demandes', component: ListeMesDemandesComponent, canActivate: [AuthGuard] },
  { path: 'mes-rdv', component: ListeRDVComponent, canActivate: [AuthGuard] },
  { path: 'liste-mentor', component: ListeMentorsComponent, canActivate: [AuthGuard] },

  { path: 'mentor-rdv', component: ListeRDVMentorComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'mentor-demande', component: ListeDemandesComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'mentor-demande/:id', component: DetailDemandeComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'ajout-rdv', component: FormRDVComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'dashboard-mentor', component: DashboardMentorComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  
  { path: 'liste-mente', component: ListeMenteAccepteComponent, canActivate: [AuthGuard] },
  { path: 'accueil-mentee', component: PortailComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'menti' }},
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent }, 
  { path: 'services', component: ServicesComponent }
];

