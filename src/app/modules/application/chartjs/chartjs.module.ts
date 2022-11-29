import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsComponent } from './chartjs.component';
import { ChartjsRoutingModule } from './chartjs-routing.module';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartjsComponent],
  exports: [ChartjsComponent],
  imports: [CommonModule, ChartjsRoutingModule, NgChartsModule],
})
export class ChartjsModule {}
