//templates
import layoutPage from '../templates/layout.html';

//dependencias
import handlebars from 'handlebars/dist/handlebars.js';

const initLayout = () =>{
    const fnRenderizarTemplate = handlebars.compile(layoutPage);
    document.querySelector('body').innerHTML = fnRenderizarTemplate();
}

export default initLayout;