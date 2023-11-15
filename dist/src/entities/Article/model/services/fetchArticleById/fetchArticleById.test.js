var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { fetchArticleById } from './fetchArticleById';
import { ArticleBlockType, ArticleType } from './../../types/article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
describe('fetchArticleById.test', function () {
    var initialData = {
        id: '1',
        title: 'Title',
        subtitle: 'Subtitle',
        img: 'https://thumbs.dreamstime.com/b/cartoon-avatar-designer-ai-generated-programmer-avatar-designer-ai-generated-programmer-cartoon-character-programming-286004113.jpg',
        views: 101,
        createdAt: '26.02.2023',
        type: [ArticleType.IT],
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Title of this block',
                paragraphs: [
                    'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
                    "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
                    "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted in the form of separate files with the .js extension, which connect to web pages, but program code can also be included directly in the page code. This is all done using the. When the browser encounters such code, it executes it. For more information about the script tag, see w3school.com. In particular , let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create it in some text editor (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:"
                ]
            }
        ]
    };
    test('success', function () { return __awaiter(void 0, void 0, void 0, function () {
        var thunk, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thunk = new TestAsyncThunk(fetchArticleById);
                    thunk.api.get.mockReturnValue(Promise.resolve({ data: initialData }));
                    return [4 /*yield*/, thunk.callThunk('1')
                        // проверяем что запрос был отправлен
                    ];
                case 1:
                    result = _a.sent();
                    // проверяем что запрос был отправлен
                    expect(thunk.api.get).toHaveBeenCalled();
                    // проверяем что статус запросса === fulfilled
                    expect(result.meta.requestStatus).toBe('fulfilled');
                    // проверяем что возвразает этот запрос
                    expect(result.payload).toEqual(initialData);
                    return [2 /*return*/];
            }
        });
    }); });
    // тест с ошибкой
    test('error ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var thunk, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thunk = new TestAsyncThunk(fetchArticleById);
                    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
                    return [4 /*yield*/, thunk.callThunk('1')
                        // проверяем что запрос был отправлен
                    ];
                case 1:
                    result = _a.sent();
                    // проверяем что запрос был отправлен
                    expect(thunk.api.get).toHaveBeenCalled();
                    // проверяем что статус запросса === rejected
                    expect(result.meta.requestStatus).toBe('rejected');
                    // проверяем что возвразает этот запрос
                    expect(result.payload).toBe('error');
                    return [2 /*return*/];
            }
        });
    }); });
});
