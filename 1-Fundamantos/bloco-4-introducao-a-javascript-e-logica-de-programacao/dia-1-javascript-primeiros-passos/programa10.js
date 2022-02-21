const custo = -30;
const valorCustoTotal = custo * 1.2;
const valorVenda = 50;



if (custo >= 0 && valorVenda >= 0) {
    const lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log("R$ " + lucro);
}
else
{
    console.log("Valores inválidos");
}

