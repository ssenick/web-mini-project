## Start of the project

```
"npm install" - install dependencies
"npm run start:all" - starting a server + frontend project (Vite) in dev mode + storybook
"npm run start:webpack:all" - starting a server + frontend project (Webpack) in dev mode + storybook
```

----

## Scripts

- `npm run start` - Running a frontend project on webpack dev server
- `npm run start:vite` - Starting a frontend project on vite
- `npm run start:all` - Starting a server + frontend project (Vite) in dev mode + storybook
- `npm run start:webpack:all` - Starting a server + frontend project (Webpack) in dev mode + storybook
- `npm run start:dev` - Starting a frontend project on webpack dev server + backend
- `npm run build` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files with es linter
- `npm run lint:ts:fix` - Fix ts files with es linter
- `npm run lint:scss` - Checking style scss files with  ES linter
- `npm run lint:scss:fix` - Fix scss style files with ES linter
- `npm run test:unit` - Running unit tests in Jest
- `npm run test:ui` - Running screenshot tests with Loki
- `npm run test:ui:ok` - Confirmation of new screenshots
- `npm run test:all` - Running all tests (ES lint: typescript, ES lint: scss, Jest: unit tests)
- `npm run test:ui:ci` - Running screenshot tests in CI
- `npm run test:ui:report` - Generating a full report for screenshot tests
- `npm run test:ui:json` - Generating a json report for screenshot tests
- `npm run test:ui:html` -Generating HTML report for screenshot tests
- `npm run storybook` - Running Storybook
- `npm run storybook:build` - Assembling a storybook build
- `npm run prepare` - Precommit hooks
- `npm run prettier` - Format all files with Prettier
- `npm run generate:slice` - Script for generating FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with Translations

The project utilizes the i18next library for handling translations. Translation files are stored in the public/locales directory.

For seamless integration, it is recommended to install the i18next plugin for WebStorm/VSCode.

Check out the i18next documentation at [https://react.i18next.com/](https://react.i18next.com/) for more details.

----

## Tests

The project incorporates four types of tests:

1) Regular unit tests using Jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) Snapshot testing with Loki - `npm run test:ui`
4) End-to-end (e2e) testing with Cypress - `npm run test:e2e`

More about tests - [documentation testing](/docs/tests.md)

----

## Linting

The project utilizes ESLint for TypeScript code validation and Stylelint for checking style-related files.

Additionally, for strict control over key architectural principles, a custom ESLint plugin eslint-plugin-ulbi-tv-plugin is employed.
This plugin includes three rules:
1) `path-checker` - prohibits the use of absolute imports within the same module.
2) `layer-imports` - verifies the correct usage of layers from the perspective of FSD (e.g., widgets should not be used in features and entities).
3) `public-api-imports` - allows imports from other modules only through the public API. It supports auto-fix.

##### Running Linters
- `npm run lint:ts` - Validates TypeScript files using the linter.
- `npm run lint:ts:fix` -  Fixes TypeScript files using the linter.
- `npm run lint:scss` - Checks SCSS files using the style linter.
- `npm run lint:scss:fix` - Fixes SCSS files using the style linter.

--------

## Prettier

The project utilizes Prettier for .ts,.tsx,.json files. File configuration`.prettierrc`

##### Running Prettier
- `npm run prettier` -  Format all files with Prettier

----
## Storybook

In the project, each component is accompanied by a set of story cases.
Server requests are mocked using the storybook-addon-mock.

A file containing the story cases is created next to the component with the extension .stories.tsx

You can launch Storybook with the following command:
- `npm run storybook`

For more details about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import MoonIcon from '@/shared/assets/icons/moon.svg'
import SunIcon from '@/shared/assets/icons/sun.svg'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Button, ButtonSize, ButtonVariant } from './Button'

const meta: Meta<typeof Button> = {
   title: 'shared/Button',
   component: Button,
   parameters: {
      layout: 'fullscreen'
   },
   // tags: ['autodocs'],
   argTypes: {

   }
}
export default meta

type Story = StoryObj<typeof meta>

export const Clean: Story = {
   args: {
      variant: ButtonVariant.CLEAN,
      children: 'TEXT'
   }
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT)]

export const IconDark: Story = {
   args: {
      variant: ButtonVariant.THEME_ICON,
      children: <MoonIcon/>
   }
}
IconDark.decorators = [ThemeDecorator(Theme.DARK)]
```

----

## Project Configuration

For development, the project includes two configurations:
1. Webpack - `./config/build`
2. Vite - `vite.config.ts`

Both builders are tailored to the main features of the application.

The entire configuration is stored in /config:
- `/config/babel` - Babel configuration
- `/config/build` - Webpack configuration
- `/config/jest` - Jest testing environment configuration
- `/config/storybook` - Storybook configuration

In the `scripts` folder, you'll find various scripts for refactoring, code simplification, report generation, and more.

## CI Pipeline and Pre-commit Hooks

The GitHub Actions configuration is located in `/.github/workflows/main.yml` 
The CI pipeline runs all types of tests, builds the project and Storybook, and performs linting.

В прекоммит хуках проверяем проект линтерами, конфиг в `/.husky`

----

### Data Handling

Data interaction is facilitated through Redux Toolkit.
Whenever possible, reusable entities should be normalized using EntityAdapter.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

sharedFor asynchronously connecting reducers (to avoid pulling them into the main bundle),
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is employed.

----
