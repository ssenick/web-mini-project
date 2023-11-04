import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
var meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {},
    args: {}
};
export default meta;
export var Light = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: { username: '123', password: 'asd' }
    }), RouterDecorator];
export var Dark = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: '123', password: 'asd' }
    }), RouterDecorator];
export var WithError = {
    args: {}
};
WithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' }
    }), RouterDecorator];
