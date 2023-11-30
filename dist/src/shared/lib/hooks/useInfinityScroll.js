import { useEffect } from 'react';
export function useInfinityScroll(_a) {
    var callback = _a.callback, triggerRef = _a.triggerRef, wrapperRef = _a.wrapperRef;
    useEffect(function () {
        var wrapperElement = wrapperRef.current;
        var triggerElement = triggerRef.current;
        if (callback && wrapperElement && triggerElement) {
            var options = {
                root: null,
                rootMargin: '0px',
                threshold: 1.0
            };
            var observer_1 = new IntersectionObserver(function (_a) {
                var entries = _a[0];
                if (entries.isIntersecting) {
                    callback();
                }
            }, options);
            observer_1.observe(triggerElement);
            return function () {
                if (observer_1) {
                    observer_1.unobserve(triggerElement);
                }
            };
        }
    }, [triggerRef, wrapperRef, callback]);
}
