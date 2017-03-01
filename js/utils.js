/**
 * Created by opq.chen on 2017/1/18.
 */
export function getYesterday() {
    var dateObj = new Date();
    var yesterdayObj = new Date();
    yesterdayObj.setTime( dateObj.getTime() - 24 * 60 * 60 * 1000 );
    var yesterdayString = yesterdayObj.getFullYear() + '-'
        + (yesterdayObj.getMonth()+1) + '-' + yesterdayObj.getDate();
    return yesterdayString;
}

getNow = function () {
    return "";
}