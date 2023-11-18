import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';
describe('comments.test', function () {
    test('isLoading should return true', function () {
        var state = {
            articleDetailsComments: {
                ids: ['1'],
                entities: {
                    1: {
                        id: '1',
                        text: 'Lorem',
                        createdComment: '20.20.2000',
                        user: { id: '1', username: 'Admin' }
                    }
                },
                isLoading: true
            }
        };
        expect(getArticleCommentsIsLoading(state)).toEqual(true);
    });
    test('error should return error', function () {
        var state = {
            articleDetailsComments: {
                ids: ['1'],
                entities: {
                    1: {
                        id: '1',
                        text: 'Lorem',
                        createdComment: '20.20.2000',
                        user: { id: '1', username: 'Admin' }
                    }
                },
                error: 'error'
            }
        };
        expect(getArticleCommentsError(state)).toEqual('error');
    });
});
