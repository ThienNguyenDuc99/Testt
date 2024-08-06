import {Component, input, model, output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-ase-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './ase-dialog.component.html',
  styleUrl: './ase-dialog.component.scss'
})
export class AseDialogComponent {
  dialogWidth = input<string>('50vw');
  headerTitle = input.required<string>();
  visible = model(false);
  submitForm = output<void>();
}
