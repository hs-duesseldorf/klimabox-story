import { ArticleService as MockArticleService } from "../story/services/article.mock.service";
import { ArticleService } from "../story/services/article.service";

export const environment = {
  production: true,
  providers: [
    // {provide: MockArticleService, useClass: ArticleService}
  ]
};
