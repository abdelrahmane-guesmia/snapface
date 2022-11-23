import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../../models/face-snap-model';
import { FaceSnapsService } from '../../services/face-snaps-service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  isSnap!: boolean;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSnap = false;
    this.buttonText = 'Oh Snap !';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap() {
    if (this.isSnap) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap !';
      this.isSnap = false;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap !';
      this.isSnap = true;
    }
  }
}
