/*
 * @Author: Mukti
 * @Date: 2021-07-05 14:35:01
 * @LastEditTime: 2021-07-05 15:15:49
 * @LastEditors: Mukti
*/
import muktiTest01 from 'mukti-test-01';
import muktiTest02 from 'mukti-test-02';

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = 'Hello Mukti';
  muktiTest01();
  muktiTest02();

  return element;
}

document.body.appendChild(component());