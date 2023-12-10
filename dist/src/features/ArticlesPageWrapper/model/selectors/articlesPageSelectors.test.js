import { ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNum, getArticlesPageType, getArticlesPageView } from './articlesPageSelectors';
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
    test('page number should return 1', function () {
        var state = {
            articlePage: {
                page: 1
            }
        };
        expect(getArticlesPageNum(state)).toEqual(1);
    });
    test('limit should return 10', function () {
        var state = {
            articlePage: {
                limit: 10
            }
        };
        expect(getArticlesPageLimit(state)).toEqual(10);
    });
    test('hasMore should return false', function () {
        var state = {
            articlePage: {
                hasMore: false
            }
        };
        expect(getArticlesPageHasMore(state)).toEqual(false);
    });
    test('hasMore should return "ALL"', function () {
        var state = {
            articlePage: {
                type: ArticleType.ALL
            }
        };
        expect(getArticlesPageType(state)).toEqual(ArticleType.ALL);
    });
    test('inited should return false', function () {
        var state = {
            articlePage: {
                _inited: false
            }
        };
        expect(getArticlesPageInited(state)).toEqual(false);
    });
});
