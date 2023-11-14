import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
var meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {},
    args: {
        isOpen: true
    }
};
export default meta;
export var Light = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: { username: 'Admin', password: '1234' }
    }), RouterDecorator];
export var Dark = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: 'Admin', password: '1234' }
    }), RouterDecorator];
export var Funny = {
    args: {}
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
        loginForm: { username: 'Admin', password: '1234' }
    }), RouterDecorator];
export var WithError = {
    args: {}
};
WithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: 'Admin', password: '1234', error: 'ERROR' }
    }), RouterDecorator];
