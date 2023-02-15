import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/Filter/filter.pipe';
import { SortYearPipe } from './pipes/Sort/sort-year.pipe';
import { ButtonComponent } from './components/button/button.component';
import { CategoryPipe } from './pipes/Filter/category.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    SortYearPipe,
    ButtonComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    SortYearPipe,
    ButtonComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
