
import { ApiCategories } from "src/app/core/models/categories/api/api-categories.model";
import { Category } from "src/app/core/models/categories/transformed/category.model";

export function transformDataCategories(apiCategory: ApiCategories): Category {
    delete apiCategory.createdAt;
    delete apiCategory.__v;
    delete apiCategory.updatedAt;
    return apiCategory;
}