let notaPorcentagem = -49.99999;

if(notaPorcentagem >=90 && notaPorcentagem <= 100)
{
    console.log("Sua nota é A");
}
else if(notaPorcentagem >= 80 && notaPorcentagem < 90)
{
    console.log("Sua nota é B");
}
else if(notaPorcentagem >= 70 && notaPorcentagem < 80)
{
    console.log("Sua nota é C");
}
else if(notaPorcentagem >= 60 && notaPorcentagem < 70)
{
    console.log("Sua nota é D");
}
else if(notaPorcentagem >= 50 && notaPorcentagem < 60)
{
    console.log("Sua nota é E");
}
else if(notaPorcentagem < 50 && notaPorcentagem > 0)
{
    console.log("Sua nota é F");
}
else if (notaPorcentagem < 0 || notaPorcentagem > 100) {
    console.log("Nota inválida");
}
