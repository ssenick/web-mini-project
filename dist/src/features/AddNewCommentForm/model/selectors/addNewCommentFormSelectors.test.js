import { getAddNewCommentFormError, getAddNewCommentFormIsLoading, getAddNewCommentFormText } from './addNewCommentFormSelectors';
describe('addNewCommentFormSelectors.test', function () {
    test('isLoading should return true', function () {
        var state = {
            addCommentForm: {
                isLoading: true
            }
        };
        expect(getAddNewCommentFormIsLoading(state)).toEqual(true);
    });
    test('error should return "error" ', function () {
        var state = {
            addCommentForm: {
                error: 'error'
            }
        };
        expect(getAddNewCommentFormError(state)).toEqual('error');
    });
    test('error should return "text" ', function () {
        var state = {
            addCommentForm: {
                text: 'text'
            }
        };
        expect(getAddNewCommentFormText(state)).toEqual('text');
    });
});
