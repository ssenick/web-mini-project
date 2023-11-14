import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { Modal } from './Modal';
import cls from './Modal.module.scss';
var meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {},
    args: {
        className: cls.isOpen,
        children: 'Modal text content'
    }
};
export default meta;
export var ModalLight = {
    args: {}
};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];
export var ModalDark = {
    args: {}
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
export var ModalFunny = {
    args: {}
};
ModalFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
