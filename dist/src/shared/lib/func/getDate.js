export function getDate() {
    var today = new Date();
    var today_date = today.toLocaleDateString('en-GB');
    return today_date.replace(/\//g, '.');
}
