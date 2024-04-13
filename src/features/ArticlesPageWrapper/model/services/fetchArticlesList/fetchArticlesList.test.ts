import { type Article } from '@/entities/Article';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList test', () => {
   test('success', async () => {
      const articles = [
         {
            id: '1',
            title: 'Javascript news',
            subtitle: "What's new in JS for 2023?",
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: 1022,
            createdAt: '26.02.2023',
            user: {
               id: '1',
               username: '1',
            },
            type: ['IT'],
            blocks: [
               {
                  id: '1',
                  type: 'TEXT',
                  title: 'Title of this block',
                  paragraphs: [
                     'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
                     "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
                  ],
               },
               {
                  id: '4',
                  type: 'CODE',
                  code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
               },
               {
                  id: '5',
                  type: 'TEXT',
                  title: 'Title of this block',
                  paragraphs: [
                     'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
                  ],
               },
               {
                  id: '2',
                  type: 'IMAGE',
                  src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                  title: 'Figure 1 - site screenshot',
               },
               {
                  id: '3',
                  type: 'CODE',
                  code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
               },
            ],
         },
      ] as Article[];

      const thunk = new TestAsyncThunk(fetchArticlesList, {
         articlePage: {
            limit: 10,
         },
      });
      thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }));
      const result = await thunk.callThunk({});

      expect(thunk.api.get).toHaveBeenCalled();
      // проверяем что статус запросса === fulfilled
      expect(result.meta.requestStatus).toBe('fulfilled');
      // проверяем что возвразает этот запрос
      expect(result.payload).toEqual(articles);
   });
   /// тест с ошибкой
   test('error ', async () => {
      const thunk = new TestAsyncThunk(fetchArticlesList, {
         articlePage: {
            limit: 10,
         },
      });
      thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
      const result = await thunk.callThunk({});

      // проверяем что запрос был отправлен
      expect(thunk.api.get).toHaveBeenCalled();
      // проверяем что статус запросса === rejected
      expect(result.meta.requestStatus).toBe('rejected');
      // проверяем что возвразает этот запрос
      expect(result.payload).toBe('error');
   });
});
