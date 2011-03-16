/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/url/getQueryValue.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/16
 */

///import baidu.url;
///import baidu.string.escapeReg;

/**
 * 根据参数名从目标URL中获取参数值
 * @name baidu.url.getQueryValue
 * @function
 * @grammar baidu.url.getQueryValue(url, key)
 * @param {string} url 目标URL
 * @param {string} key 要获取的参数名
 * @meta standard
 * @see baidu.url.jsonToQuery
 *             
 * @returns {string|null} 获取的参数值，获取不到时返回null
 */
baidu.url.getQueryValue = function (url, key) {
    //#锚点分隔符,&参数分隔符
    var reg = new RegExp(
                        "(^|&|\\?|#)" 
                        + baidu.string.escapeReg(key) 
                        + "=([^&#]*)(&|#|\x24)", 
                    "");
    var match = url.match(reg);
    if (match) {
        return match[2];
    }
    
    return null;
};
