import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LibraryComponent } from './components/library/library.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { RewardsComponent } from './components/rewards/rewards.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página predeterminada
  { path: 'library', component: LibraryComponent },
  { path: 'book-view/:id', component: BookViewComponent }, // Ruta con parámetro de libro
  { path: 'rewards', component: RewardsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '**', redirectTo: '' } // Redirige a login si la ruta no existe
];