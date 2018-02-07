import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatSidenav, MatInput } from '@angular/material';
import { ResourcesService } from '../../service/resources.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SnackBarComponent } from '../../../components/snack-bar/snack-bar.component';
import { Router } from '@angular/router';
import { ListUtil } from '../util/list.util';

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent implements OnInit, AfterViewInit {

  displayedColumns = [ 'name', 'description', 'series'];

  showProgress = false;

  datasource = new MatTableDataSource();

  filter = '';

  title = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSidenav) sideNav: MatSidenav;
  @ViewChild(MatInput) searchInput: MatInput;
  @ViewChild(SnackBarComponent) snackBarComponent: SnackBarComponent;

  constructor(private router: Router,
    private resourcesService: ResourcesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      if (this.datasource.data && this.datasource.data.length > 0) {
        this.search(this.filter, false);
    }});
  }

  private getResources(filter: string, orderField: string, orderDir: string, notification: boolean) {
    this.showProgress = true;
    this.resourcesService.getResources(filter, orderField, orderDir).
    subscribe((data) => {
      this.datasource.data = data.data.results;
      this.showProgress = false;
      if (notification) {
        ListUtil.processNotification(this.snackBarComponent, data.data.count, data.data.total);
      }
    }, (error) => {
      this.showProgress = false;
      this.snackBarComponent.open({'error': 'Inexpected error'}, 'error');
    });
  }

  viewSeries(id: Number) {
    this.router.navigate(['/resources/list-series'], { queryParams: { 'characterId': id} });
  }

  private search(text: string, notification: boolean) {
    this.filter = text;
    this.getResources(this.filter, this.sort.active, this.sort.direction, notification);
  }

  changeValue(event: any) {
    if (event.keyCode === 13) {
      if (event.target.value != null && event.target.value.trim().length > 2) {
        this.search(event.target.value.trim(), true);
      }
    }
  }

}
