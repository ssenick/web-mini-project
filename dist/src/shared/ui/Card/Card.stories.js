import { Card } from './Card';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {
        children: 'Lorem asda sasd asd'
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
