import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from './grid/grid.component';
import {NgModule} from '@angular/core';
import { TableComponent } from './table/table.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BrowserModule} from '@angular/platform-browser';

const routing: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    GridComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routing),
    NgZorroAntdModule
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsModule {}
