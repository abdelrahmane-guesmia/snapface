import { Component } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap-model';

@Component({
  selector: 'app-face-snap-form',
  templateUrl: './face-snap-form.component.html',
  styleUrls: ['./face-snap-form.component.scss'],
})
export class FaceSnapFormComponent {
  faceSnap: FaceSnap = new FaceSnap();
  constructor() {
    this.faceSnap.title = 'test';
    this.faceSnap.description = 'test description';
    this.faceSnap.imageUrl = 'imageUrl';
    this.faceSnap.location = 'Paris';
    this.faceSnap.snaps = 0;
  }
}
