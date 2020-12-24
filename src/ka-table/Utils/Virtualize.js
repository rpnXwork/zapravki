"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVirtualScrollingEnabled = function (virtualScrolling) {
    return virtualScrolling && virtualScrolling.enabled !== false;
};
exports.getVirtualized = function (virtualScrolling, data) {
    var virtualizedData = [];
    var _a = virtualScrolling.scrollTop, scrollTop = _a === void 0 ? 0 : _a;
    var _b = virtualScrolling.tbodyHeight, tbodyHeight = _b === void 0 ? 600 : _b;
    var beginHeight = 0;
    var endHeight = 0;
    data.reduce(function (acc, value) {
        var itemHeight = virtualScrolling.itemHeight ?
            (typeof virtualScrolling.itemHeight === 'number'
                ? virtualScrolling.itemHeight
                : virtualScrolling.itemHeight(value))
            : 40;
        if (acc >= scrollTop - itemHeight) {
            if (tbodyHeight >= -(itemHeight * 5)) {
                tbodyHeight = tbodyHeight - itemHeight;
                virtualizedData.push(value);
            }
            else {
                endHeight += itemHeight;
            }
        }
        else {
            beginHeight = acc + itemHeight;
        }
        return acc + itemHeight;
    }, 0);
    return {
        beginHeight: beginHeight,
        endHeight: endHeight,
        virtualizedData: virtualizedData,
    };
};
