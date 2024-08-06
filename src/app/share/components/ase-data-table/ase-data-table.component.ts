import {Component, input, output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CurrencyPipe, KeyValuePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {RatingModule} from "primeng/rating";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {AseIconComponent} from "../ase-icon/ase-icon.component";

@Component({
  selector: 'app-ase-data-table',
  standalone: true,
  imports: [
    ButtonModule,
    CurrencyPipe,
    InputTextModule,
    RatingModule,
    RippleModule,
    SharedModule,
    TableModule,
    FormsModule,
    NgOptimizedImage,
    KeyValuePipe,
    NgForOf,
    AseIconComponent
  ],
  templateUrl: './ase-data-table.component.html',
  styleUrl: './ase-data-table.component.scss'
})
export class AseDataTableComponent<T> {
  showCheckedRow = input<boolean>(false);
  showSearch = input<boolean>(false);
  data = input.required<T[]>();
  cols = input.required<{ filed: string; header: string }[]>();
  rows = input<number>(10);
  paginator = input<boolean>(true);
  globalFilterFields = input<Array<string>>();
  rowsPerPageOptions = input<Array<number>>([10, 20.30]);
  selectedItem = input<Array<T>>();
  editRow = output<T>();
  deleteRow = output<T>();
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  editProduct(rowData: T) {
    this.editRow.emit(rowData);
  }

  deleteProduct(rowData: T) {
    this.deleteRow.emit(rowData);
  }
}
