import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'resources',
    loadChildren: 'app/resources/resources.module#ResourcesModule'
  },
  { path: '',   redirectTo: '/resources', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
