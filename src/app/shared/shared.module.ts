import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/Filter/filter.pipe';
import { SortYearPipe } from './pipes/Sort/sort-year.pipe';
import { ButtonComponent } from './components/button/button.component';
import { CategoryPipe } from './pipes/Filter/category.pipe';
import { ChildsPipe } from './pipes/Filter/childs.pipe';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    FilterPipe,
    SortYearPipe,
    ButtonComponent,
    CategoryPipe,
    ChildsPipe
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    FilterPipe,
    SortYearPipe,
    ButtonComponent,
    CategoryPipe,
    ChildsPipe,
    
  ]
})
export class SharedModule { }
