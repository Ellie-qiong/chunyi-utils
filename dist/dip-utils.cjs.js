'use strict';

/*
 * @Author: 纯逸 liyuqiong@cai-inc.com
 * @Date: 2024-11-20 19:46:10
 * @LastEditors: 纯逸 liyuqiong@cai-inc.com
 * @LastEditTime: 2024-11-20 19:47:06
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.random = random;
