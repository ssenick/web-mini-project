import { useCallback, useEffect, useRef } from 'react';
export function useDebounce(callback, delay) {
    var timer = useRef(null);
    var debounceCallback = useCallback(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line n/no-callback-literal
            callback.apply(void 0, args);
        }, delay);
    }, [callback, delay]);
    useEffect(function () {
        return function () {
            if (timer.current) {
                clearTimeout(timer.current);
                console.log('cansel');
            }
        };
    }, []);
    return debounceCallback;
}
