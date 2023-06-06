import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'vendor-rate',
  pathMatch: 'full',
},
{
  path: '',
  component: LayoutComponentComponent,
  children: [
    { path: 'vendor-rate', loadChildren: () => import('./rate/vendor-rate/vendor-rate.module').then(m => m.VendorRateModule) },
  ]
},
{
  path: '**',
  pathMatch: 'full',
  component: ErrorPageComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
