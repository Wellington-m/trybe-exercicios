function createElementByClass(elementName, className)
{
    let element = document.createElement(elementName);
    element.className = className;
    return element;
}
function createElementByText(elementName, text)
{
    let element = document.createElement(elementName);
    element.innerText = text;
    return element;
}

let body = document.body;

let h1 = createElementByText('h1', 'Exercício 5.2 - JavaScript DOM');
body.appendChild(h1);

let main = createElementByClass('main', 'main-content');
body.appendChild(main);

let section = createElementByClass('section', 'center-content');
main.appendChild(section);

let p = createElementByText('p', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
section.appendChild(p);

let section2 = createElementByClass("section", "left-content");
main.appendChild(section2);

let section3 = createElementByClass("section", "right-content");
main.appendChild(section3);

let imagem = createElementByClass('img', 'small-image');
imagem.src = 'https://picsum.photos/200';
section2.appendChild(imagem);

