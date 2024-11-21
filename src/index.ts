/*
 * @Author: 纯逸 liyuqiong@cai-inc.com
 * @Date: 2024-11-20 19:46:10
 * @LastEditors: 纯逸 liyuqiong@cai-inc.com
 * @LastEditTime: 2024-11-21 15:20:10
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}