let counter=0;

function increase()
{
    counter++;
    document.getElementById("count").innerText=counter;
}

function decrease()
{
    if(counter !=0)
    {
        counter--;
    }
    document.getElementById("count").innerText=counter;
}

function reset()
{
    counter=0;
    document.getElementById("count").innerText=counter;
}

