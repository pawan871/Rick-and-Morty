import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-episode-modal',
  templateUrl: './episode-modal.component.html',
  styleUrls: ['./episode-modal.component.scss']
})
export class EpisodeModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EpisodeModalComponent>
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}


