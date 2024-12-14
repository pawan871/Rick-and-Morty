import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(++this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(--this.currentPage);
    }
  }
}
