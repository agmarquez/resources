import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListResourcesComponent } from './components/list-resources/list-resources.component';
import { ListSeriesComponent } from './components/list-series/list-series.component';
import { NgModule } from '@angular/core';

/** Rutas */
export const resourcesRoutes: Routes = [
    {
        path: '',
        component: ListResourcesComponent
    },
    {
      path: 'list-series',
      component: ListSeriesComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(resourcesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResourcesRoutingModule { }
