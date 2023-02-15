import { Pipe, PipeTransform } from '@angular/core';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';
import { Categories } from 'src/app/core/models/categories/transformed/category.data';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: BoardGames[] | null, category?: Categories): BoardGames[] {
    if (!value) { return []; }
    if (!category) { return value; }
    return value.filter((boardGame) => {
      return boardGame.category.name === category || !category
    })
  }

}
