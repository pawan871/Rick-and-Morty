import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: CharacterListComponent, canActivate: [AuthGuard] }, // Use updated guard
  { path: 'character/:id', component: CharacterDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' },  // Fallback to login if route is invalid
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
