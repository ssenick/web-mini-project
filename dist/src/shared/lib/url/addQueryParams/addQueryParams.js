export function getQueryParams(params) {
    var searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return "?".concat(searchParams.toString());
}
/**
 * Ф-я добавления параметров строки в URL
 * @param params
 */
export function addQueryParams(params) {
    window.history.pushState(null, '', getQueryParams(params));
    console.log();
}
