document.getElementsByTagName("p")[0].innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores nisi id fugit doloribus, fuga nihil delectus dolor ratione aspernatur dolores maiores corporis recusandae dolorem laboriosam iusto soluta impedit mollitia?".toUpperCase();

document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";

document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";

for (let i = 0; i < document.getElementsByTagName("p").length; i+=1) {
    console.log(document.getElementsByTagName("p")[i].innerText);
}
