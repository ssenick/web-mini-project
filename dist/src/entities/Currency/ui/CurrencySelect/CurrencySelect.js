import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectVariant } from 'shared/ui/Select/Select';
import { Currency } from '../../model/type/currency';
var options = [
    { value: Currency.CAD, content: Currency.CAD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.UAH, content: Currency.UAH }
];
export var CurrencySelect = memo(function (props) {
    var className = props.className, readonly = props.readonly, value = props.value, onChange = props.onChange;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { className: classNames('', {}, [className]), options: options, label: t('Валюта'), variant: SelectVariant.INVERSE_BG, readonly: readonly, onChange: onChangeHandler, value: value }));
});
