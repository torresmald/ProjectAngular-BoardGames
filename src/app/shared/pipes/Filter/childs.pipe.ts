import { Pipe, PipeTransform } from '@angular/core';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';

@Pipe({
  name: 'childs',
  pure: false

})
export class ChildsPipe implements PipeTransform {

  transform(value: BoardGames[] | null, age?: 'true' | 'false'): BoardGames[] {
    if (!value) { return []; }
    if (!age) { return value; }
    return value.filter((boardGame) => {
      if(age === 'true'){
        return boardGame.isForChilds === true
      }
      return boardGame.isForChilds === false
    })
  }

}
