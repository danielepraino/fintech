import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'dashboard/cards', loadChildren: () => import('./views/cards/cards.module').then(m => m.CardsModule) },
  { path: 'dashboard/movements', loadChildren: () => import('./views/movements/movements.module').then(m => m.MovementsModule) },
  { path: 'dashboard/transfer', loadChildren: () => import('./views/transfer/transfer.module').then(m => m.TransferModule) },
  { path: 'dashboard/appointments', loadChildren: () => import('./views/appointments/appointments.module').then(m => m.AppointmentsModule) },
  //{ path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
