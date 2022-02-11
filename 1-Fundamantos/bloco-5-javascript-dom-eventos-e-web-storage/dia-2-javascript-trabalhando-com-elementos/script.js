function createElementByClass(elementName, className) {
    let element = document.createElement(elementName);
    element.className = className;
    return element;
}
function createElementByText(elementName, text) {
    let element = document.createElement(elementName);
    element.innerText = text;
    return element;
}

let body = document.body;

let h1 = createElementByText('h1', 'Exercício 5.2 - JavaScript DOM');
h1.className = 'title';
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

let ul = document.createElement('ul');
section3.appendChild(ul);

let list = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < list.length; i += 1) {
    let listItens = document.createElement('li');
    listItens.innerHTML = list[i];
    section3.firstElementChild.appendChild(listItens);
}

let h3Text = ['Primeiro', 'segundo', 'terceiro'];
for (const key in h3Text) {
    let h3Elemente = document.createElement('h3');
    h3Elemente.innerHTML= h3Text[key];
    h3Elemente.className = 'description';
    main.appendChild(h3Elemente);
}
// for (let i = 0; i < h3Text.length; i+=1) {
//     let h3Elemente = document.createElement('h3');
//     h3Elemente.innerHTML= h3Text[i];
//     main.appendChild(h3Elemente)
// }

main.removeChild(section2);

section3.style = 'margin-right: auto';

main.style = 'background-Color: green';

let removeList = document.querySelectorAll('section ul li');

for (const key in removeList) {
    if(removeList[key].innerText === 'nove' || removeList[key].innerText === 'dez')
    {
        removeList[key].remove();
    }
}
