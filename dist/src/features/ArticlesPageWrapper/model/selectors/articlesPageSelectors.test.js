import { ArticleView } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from './articlesPageSelectors';
describe('articlesPageSelectors.test', function () {
    test('isLoading should return true', function () {
        var state = {
            articlePage: {
                isLoading: true
            }
        };
        expect(getArticlesPageIsLoading(state)).toEqual(true);
    });
    test('error should return error', function () {
        var state = {
            articlePage: {
                error: 'error'
            }
        };
        expect(getArticlesPageError(state)).toEqual('error');
    });
    test('view should return big', function () {
        var state = {
            articlePage: {
                view: ArticleView.BIG
            }
        };
        expect(getArticlesPageView(state)).toEqual(ArticleView.BIG);
    });
});
