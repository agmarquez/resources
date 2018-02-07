import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatSidenav, MatInput } from '@angular/material';
import { SnackBarComponent } from '../../../components/snack-bar/snack-bar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SeriesService } from '../../service/series.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ListUtil } from '../util/list.util';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.css']
})
export class ListSeriesComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = [ 'title', 'description', 'startYear', 'endYear'];

  showProgress = false;

  datasource = new MatTableDataSource();

  characterId: Number;

  subscriptionRouter: any;

  filter = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSidenav) sideNav: MatSidenav;
  @ViewChild(MatInput) searchInput: MatInput;
  @ViewChild(SnackBarComponent) snackBarComponent: SnackBarComponent;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private seriesService: SeriesService) { }

  ngOnInit() {
    this.subscriptionRouter = this.route.queryParams.subscribe(params => {
      if (params['characterId']) {
          this.characterId = params['characterId'];
      }
  });
  }

  ngOnDestroy() {
    this.subscriptionRouter.unsubscribe();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {  if (this.filter.trim().length > 2) {
      this.search(this.filter, false);
    }});
  }

  private search(text: string, notification: boolean) {
    this.filter = text;
    this.getSeries(this.filter, this.sort.active, this.sort.direction, notification);
  }

  private getSeries(filter: string, orderField: string, orderDir: string, notification: boolean) {
    this.showProgress = true;
    this.seriesService.getSeries(this.characterId, filter, orderField, orderDir).
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

  back() {
    this.router.navigate(['/resources']);
  }

  changeValue(event: any) {
    if (event.keyCode === 13) {
      if (event.target.value != null && event.target.value.trim().length > 2) {
        this.search(event.target.value.trim(), true);
      }
    }
  }

}
