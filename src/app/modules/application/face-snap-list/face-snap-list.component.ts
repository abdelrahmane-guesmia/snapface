import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';

const STATE_KEY_ITEMS = makeStateKey('items');

import { FaceSnap } from '../../../models/face-snap-model';
import { FaceSnapsService } from '../../../services/face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  facesSnaps!: FaceSnap[] | undefined;
  loaded: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {
    this.loaded = false;
  }

  ngOnInit() {
    this.getFacesnap();
  }

  getFacesnap(): void {
    this.loaded = false;
    this.facesSnaps = this.state.get(STATE_KEY_ITEMS, <any>[]);
    if (this.facesSnaps!.length === 0) {
      this.faceSnapsService.getAllFaceSnaps().subscribe({
        next: (data) => {
          const platform = isPlatformBrowser(this.platformId)
            ? 'in the browser'
            : 'on the server';
          console.log(
            `getUsers : Running ${platform} with appId=${this.appId}`
          );
          this.facesSnaps = data;
          this.loaded = true;
          this.state.set(STATE_KEY_ITEMS, <any>data);
        },
        error: (error) => {
          //this.errorMessage = error.message;
          console.error('There was an error!', error);
        },
      });
    } else {
      this.loaded = false;
    }
  }

  resetFacesnap(): void {
    this.facesSnaps = [];
    this.loaded = true;
  }
}
