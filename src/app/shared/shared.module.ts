import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/Filter/filter.pipe';
import { SortYearPipe } from './pipes/Sort/sort-year.pipe';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    FilterPipe,
    SortYearPipe,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    SortYearPipe,
    ButtonComponent
  ]
})
export class SharedModule { }
