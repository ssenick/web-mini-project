import { TextArea } from './TextArea';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'shared/TextArea',
    component: TextArea,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
