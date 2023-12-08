import { useCallback, useEffect, useRef } from 'react';
export function useThrottle(callback, delay) {
    var throttleRef = useRef(null);
    var throttleTimeout = useRef(null);
    var throttledCallback = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!throttleRef.current) {
            // eslint-disable-next-line n/no-callback-literal
            callback.apply(void 0, args);
            throttleRef.current = true;
            throttleTimeout.current = setTimeout(function () {
                throttleRef.current = false;
            }, delay);
        }
    }, [delay, callback]);
    useEffect(function () {
        return function () {
            if (throttleTimeout.current) {
                clearTimeout(throttleTimeout.current);
            }
        };
    }, []);
    return throttledCallback;
}
