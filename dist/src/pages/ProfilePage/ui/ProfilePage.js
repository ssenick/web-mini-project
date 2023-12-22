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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProfileForm } from 'features/EditableProfileCard';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';
import cls from './ProfilePage.module.scss';
var ProfilePage = function (_a) {
    var className = _a.className;
    var t = useTranslation('profile').t;
    return (_jsx(Page, __assign({ className: classNames(cls.ProfilePage, {}, [className]) }, { children: _jsxs(VStack, __assign({ gap: '30' }, { children: [_jsx(Text, { size: TextFontSize.L, title: t('Заголовок страницы') }), _jsx("div", __assign({ className: cls.content }, { children: _jsx(ProfileForm, {}) }))] })) })));
};
export default ProfilePage;
