import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceSnapFormRoutingModule } from './face-snap-form-routing.module';
import { FaceSnapFormComponent } from './face-snap-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FaceSnapFormComponent],
  exports: [FaceSnapFormComponent],
  imports: [CommonModule, FaceSnapFormRoutingModule, FormsModule],
})
export class FaceSnapFormModule {}
