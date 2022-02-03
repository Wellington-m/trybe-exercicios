const alfa = 60;
const beta = 60;
const gama = 61;

if(alfa <= 0 || beta <= 0 || gama <= 0)
{
    if(alfa <= 0)
    {
        console.log("Erro no angulo alfa");
    }    
    else if(beta <= 0)
    {
        console.log("Erro no angulo beta");
    }
    else
    {
        console.log("Erro no angulo gama");
    }    
}
else if(alfa + beta + gama == 180)
{
    console.log("True");
}
else
{
    console.log("False");
}