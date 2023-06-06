import { NgModule } from "@angular/core";
import { VendorRateComponent } from "./vendor-rate.component";
import { RouterModule, Routes } from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AsyncPipe, CommonModule, NgFor } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: VendorRateComponent,
    data: {
      title: 'Vendor Rate',
    },
  },
];

@NgModule({
  declarations: [
    VendorRateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
  ],
})
export class VendorRateModule {}
