import { Pipe, PipeTransform } from '@angular/core';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: BoardGames[] | null, title: string = ''): BoardGames[] {
    if (!value) { return []; }
    if (!title) { return value; }
    return value.filter((boardGame) => {
      return boardGame.title.toLowerCase().includes(title)
    })
  }

}
