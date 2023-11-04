import { jsx as _jsx } from "react/jsx-runtime";
import { Country } from '../../model/type/country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectVariant } from 'shared/ui/Select/Select';
var options = [
    { value: Country.Canada, content: Country.Canada },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Slovakia, content: Country.Slovakia }
];
export var CountrySelect = memo(function (props) {
    var className = props.className, readonly = props.readonly, value = props.value, onChange = props.onChange;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { "data-testid": 'country-select', className: classNames('', {}, [className]), options: options, label: t('Страна'), variant: SelectVariant.INVERSE_BG, readonly: readonly, onChange: onChangeHandler, value: value }));
});
