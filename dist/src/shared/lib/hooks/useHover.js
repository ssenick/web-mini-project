import { useCallback, useMemo, useState } from 'react';
export var useHover = function () {
    var _a = useState(false), isHover = _a[0], setIsHover = _a[1];
    var onMouseEnter = useCallback(function () {
        setIsHover(true);
    }, []);
    var onMouseLeave = useCallback(function () {
        setIsHover(false);
    }, []);
    return useMemo(function () { return [isHover, { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }]; }, [isHover, onMouseEnter, onMouseLeave]);
};
