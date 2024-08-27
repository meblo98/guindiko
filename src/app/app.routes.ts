import { UserFormComponent } from './admin/user-form/user-form.component';
import { Routes } from '@angular/router';

import { InscriptionMenteComponent } from './auth/inscription-mente/inscription-mente.component';
import { LoginComponent } from './auth/login/login.component';
import { InscriptionMentorComponent } from './auth/inscription-mentor/inscription-mentor.component';
import { TableauBordComponent } from './admin/tableau-bord/tableau-bord.component';
import { RoleComponent } from './admin/role/role.component';
import { PermissionsComponent } from './admin/permission/permission.component';
import { GestionUserComponent } from './admin/gestion-user/gestion-user.component';

// import { ForumComponent } from './admin/forum/forum.component';                                 // trouver ici

import { ListeMesDemandesComponent } from './mente/liste-mes-demandes/liste-mes-demandes.component';
import { ListeRDVComponent } from './mente/liste-rdv/liste-rdv.component';
import { ListeDemandesComponent } from './mentor/liste-demandes/liste-demandes.component';
import { DetailDemandeComponent } from './mentor/detail-demande/detail-demande.component';
import { FormRDVComponent } from './mentor/form-rdv/form-rdv.component';

import { AccueilComponent } from './portail/accueil/accueil.component'; //MOI Mise à jour du chemin
import { DetailUserComponent } from './admin/detail-user/detail-user.component';
import { AssignPermissionComponent } from './admin/assign-permission/assign-permission.component';
import { AproposComponent } from './portail/apropos/apropos.component'; //MOI Mise à jour
import { ServicesComponent } from './portail/services/services.component'; //MOI Mise à jour

            // Importation des composants BASSINE
            import { ForumComponent } from './forum/forum/forum.component'; //MOI FORUM
            import { PostForumComponent } from './post/post-forum/post-forum.component'; // Composant pour les posts de forums
            import { PostCommentaireComponent } from './commentaire/post-commentaire/post-commentaire.component';


            // import { ForumComponent } from './admin/forum/forum.component'; //moi ici
            // import { CommentaireForumComponent } from './admin/commentaire-forum/commentaire-forum.component'; // Composant pour les commentaires de forums
            import { DashboardMentorComponent } from './mentor/dashboard-mentor/dashboard-mentor.component';
            import { ListeRDVMentorComponent } from './mentor/liste-rdv/liste-rdv.component';
            import { ListeMenteAccepteComponent } from './mentor/liste-mente-accepte/liste-mente-accepte.component';
            
            import { AuthGuard } from './auth.guard';
            import { RoleGuard } from './role.guard';
import { PortailComponent } from './mente/accueil/accueil.component';
import { ListeMentorsComponent } from './mente/liste-mentors/liste-mentors.component';
import { ContactComponent } from './portail/contact/contact.component';
                       




           

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inscription-mente', component: InscriptionMenteComponent},
  { path: 'inscription-mentor', component: InscriptionMentorComponent},
  { path: 'dashboard', component: TableauBordComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
  { path: 'roles', component: RoleComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
  { path: 'permissions', component: PermissionsComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
  { path: 'user', component: GestionUserComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
  { path: 'detail-user/:id', component: DetailUserComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
  { path: 'assign-permission', component: AssignPermissionComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
  { path: 'user-form/:id', component: UserFormComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},

  { path: 'forum', component: ForumComponent, canActivate: [AuthGuard] },
  { path: 'mes-demandes', component: ListeMesDemandesComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'menti' }},
  { path: 'mes-rdv', component: ListeRDVComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'menti' }},
  { path: 'liste-mentor', component: ListeMentorsComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'menti' }},

  { path: 'mentor-rdv', component: ListeRDVMentorComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'mentor-demande', component: ListeDemandesComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'mentor-demande/:id', component: DetailDemandeComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'ajout-rdv', component: FormRDVComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'dashboard-mentor', component: DashboardMentorComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  

  { path: 'liste-mente', component: ListeMenteAccepteComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'mentor' }},
  { path: 'accueil-mentee', component: PortailComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'menti' }},
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent }

];


