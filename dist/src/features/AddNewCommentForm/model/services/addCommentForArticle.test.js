import { userActions } from 'entities/User';
import { addCommentForArticle } from 'features/AddNewCommentForm/model/services/addCommentForArticle';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
describe('addCommentForArticle.test', function () {
    var text = 'Lorem asdasd asd asd asd asd';
    var comments = [
        {
            id: '1',
            user: {
                username: 'User',
                id: '1'
            },
            createdComment: '20.20.2001',
            text: 'Lorem asdasd asd asd asd asd'
        },
        {
            id: '2',
            user: {
                username: 'User',
                id: '1'
            },
            createdComment: '20.20.2010',
            text: 'Lorem asdasd asd asd asd asd Lorem asdasd asd asd asd asd'
        },
        {
            id: '3',
            user: {
                username: 'User',
                id: '1'
            },
            createdComment: '22.20.2001',
            text: text
        }
    ];
    var comment = {
        id: '3',
        user: {
            username: 'User',
            id: '1'
        },
        createdComment: '22.20.2001',
        text: text
    };
    test('success addCommentForArticle', function () {
        var thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));
        var result = yield thunk.callThunk(text);
        expect(thunk.dispatch(userActions.setAuthData(text)));
    });
});
