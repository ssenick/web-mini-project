var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../model/types/profile';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { ProfileCard } from './ProfileCard';
import avatarImage from 'shared/assets/test/image.jpg';
var meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Primary = {
    args: {
        data: {
            first: 'First',
            lastname: 'Last',
            age: 22,
            currency: Currency.UAH,
            country: Country.Canada,
            username: 'Admin',
            avatar: avatarImage
        },
        error: []
    }
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var Loading = {
    args: {
        isLoading: true
    },
    render: function () { return (_jsx("div", __assign({ className: 'app__content' }, { children: _jsx(ProfileCard, { isLoading: true }) }))); }
};
Loading.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var Errors = {
    args: {
        data: {
            first: '',
            lastname: '',
            age: '',
            currency: Currency.UAH,
            country: Country.Canada,
            username: '',
            avatar: avatarImage
        },
        error: [
            ValidateProfileErrors.INCORRECT_USER_USER_NAME,
            ValidateProfileErrors.INCORRECT_USER_LAST_NAME,
            ValidateProfileErrors.INCORRECT_USER_FIRST_NAME,
            ValidateProfileErrors.INCORRECT_AGE
        ]
    }
};
Errors.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
