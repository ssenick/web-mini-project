import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints';
var meta = {
    title: 'shared/LoaderPoints',
    component: LoaderPoints,
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
export var Dark = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
