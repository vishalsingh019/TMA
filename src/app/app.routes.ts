import { Routes } from '@angular/router';
import { UserListComponent } from './features/home/pages/user-list/user-list.component';
import { NoRoutesComponent } from './features/no-component/pages/no-routes/no-routes.component';
import { UserDetailComponent } from './features/user-details/pages/user-detail/user-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user-detail',
    loadComponent: () =>
      import('./features/user-details/pages/user-detail/user-detail.component').then(
        m => m.UserDetailComponent
      )
  },
  {
    path: '**',
    component: NoRoutesComponent
  }
];