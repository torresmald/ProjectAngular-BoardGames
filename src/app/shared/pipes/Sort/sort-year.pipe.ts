import { Pipe, PipeTransform } from '@angular/core';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';

@Pipe({
  name: 'sortYear',
  pure: true

})
export class SortYearPipe implements PipeTransform {
  transform(value: BoardGames[] | null, condition?: "asc" | "desc"): BoardGames[] {
    if (!value) { return []; }
    if (!condition) { return value; }
    if (condition === "asc"){
      return value.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0))
    } else{
      return value.sort((a, b) => (a.year > b.year) ? -1 : ((b.year > a.year) ? 1 : 0))
    }
  }
}