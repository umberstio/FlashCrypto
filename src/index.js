
/*import jquery from '../node_modules/jquery/jquery.min.js';
window.jQuery = jquery;
window.$ = jquery;

//require('jquery');
//require('handlebars');
//import propper from '../node_modules/popper.js/dist/popper.min.js';
*/
import jquery from 'jquery';
window.$ = jquery;
window.jquery = jquery;
import bootstrap from 'bootstrap';
import handlebars from 'handlebars';

const template = handlebars.compile('<p>{{firstname}} {{lastname}}</p>');

const persona = {
    firstname : "umberto",
    lastname:   "stio"
}

document.querySelector('body').innerHTML = template(persona);



$().alert('close');







 
//componentes
import initLayout from './layout/layout'



window.initLayout = initLayout;