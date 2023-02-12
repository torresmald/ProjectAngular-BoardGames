import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCategories } from '../../models/categories/api/api-categories.model';
import { Category } from '../../models/categories/transformed/category.model';
import { ApiCategoriesService } from './api/api-categories.service';
import {map} from 'rxjs'
import { transformDataCategories } from './helpers/categories.helper';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( 
    private apiCategoriesService: ApiCategoriesService
    ) { }

    public getCategories(): Observable<Category[]> {
      return this.apiCategoriesService.getApiCategories().pipe(
        map((apiCategories: ApiCategories[]) => {
          return apiCategories.map((apiCategory) => (transformDataCategories(apiCategory)));
        })
      );
    }
  }
