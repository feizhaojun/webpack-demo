/*
 * @Author: Mukti
 * @Date: 2021-10-22 14:41:07
 * @LastEditTime: 2021-10-22 15:48:45
 * @LastEditors: Mukti
 */
import _ from 'lodash';
import './style.css';
import print from './print.js';
// import icon from './avatar-default.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = icon;
  // element.appendChild(myIcon);

  print();

  return element;
}
document.body.appendChild(component());