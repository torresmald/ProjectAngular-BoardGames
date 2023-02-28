import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCategories } from 'src/app/core/models/categories/api/api-categories.model';
import { environment } from 'src/app/environments/environment.prod';

const categories = 'categories'
const BASE_URL = `${environment.host}${categories}`

@Injectable({
  providedIn: 'root'
})
export class ApiCategoriesService {

  constructor(private request: HttpClient) { }

  public getApiCategories(): Observable<ApiCategories[]> {
    return this.request.get<ApiCategories[]>(BASE_URL)
  }
}
