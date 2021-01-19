import jquery from 'jquery';
window.$ = jquery;
window.jquery = jquery;

import Popper  from 'popper.js'
window.Popper = Popper;

import bootstrap from 'bootstrap';
 
//componentes
import initLayout from './layout/layout'

window.initLayout = initLayout;

document.addEventListener("DOMContentLoaded",() => {
    window.initLayout();
});
