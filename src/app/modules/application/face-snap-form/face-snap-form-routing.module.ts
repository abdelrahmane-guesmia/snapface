import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaceSnapFormComponent } from './face-snap-form.component';

const routes: Routes = [{ path: '', component: FaceSnapFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceSnapFormRoutingModule {}
