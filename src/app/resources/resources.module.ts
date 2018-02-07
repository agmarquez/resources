import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ResourcesRoutingModule } from './resources.routing.module';
import { ListResourcesComponent } from './components/list-resources/list-resources.component';
import { ListSeriesComponent } from './components/list-series/list-series.component';
import { ResourcesService } from './service/resources.service';
import { SeriesService } from './service/series.service';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { MessagesComponent } from '../components/snack-bar/components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    SharedModule,
    ResourcesRoutingModule
  ],
  declarations: [
    ListResourcesComponent,
    ListSeriesComponent,
    SnackBarComponent,
    MessagesComponent
  ],
  providers: [
    ResourcesService,
    SeriesService
  ],
  entryComponents: [
    MessagesComponent
  ]
})
export class ResourcesModule { }
