"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centerLength = 5;
var DEFAULT_PAGE_SIZE = 10;
exports.getPagesCount = function (data, paging) {
    if (!paging || !paging.enabled) {
        return 1;
    }
    if (paging.pagesCount) {
        return paging.pagesCount;
    }
    return Math.ceil(data.length / ((paging && paging.pageSize) || DEFAULT_PAGE_SIZE));
};
exports.getPageData = function (data, paging) {
    if (!paging || !paging.enabled || paging.pagesCount) {
        return data;
    }
    var pageSize = paging.pageSize || DEFAULT_PAGE_SIZE;
    var pageIndex = paging.pageIndex || 0;
    var startIndex = pageSize * pageIndex;
    return data.slice(startIndex, startIndex + pageSize);
};
exports.getPagesForCenter = function (pages, isStartShown, isEndShown, pageIndex) {
    if (isStartShown && !isEndShown) {
        return pages.filter(function (page) { return (page >= pages.length - exports.centerLength - 1); });
    }
    else if (!isStartShown && isEndShown) {
        return pages.filter(function (page) { return (page <= exports.centerLength); });
    }
    else if (isStartShown && isEndShown) {
        return pages.filter(function (page) { return (page >= pageIndex - Math.floor(exports.centerLength / 2)) && (page <= pageIndex + Math.floor(exports.centerLength / 2)); });
    }
    return pages;
};
