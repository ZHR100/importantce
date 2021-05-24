// 小明
import { num, s1, a, b } from './a.js'
import { num as bNum } from './b.js'
import * as moduleA from './a.js'
import n from './a.js'

console.log(num);
console.log(bNum);
console.log(s1);
a()
b()

console.log(moduleA);
console.log(moduleA.s1);
console.log(n);

if(num >= 100) {
    console.log('111111111');
}