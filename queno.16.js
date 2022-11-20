//Q. 16.Write a program to find the sum of all 3-digit even natural numbers.



function even_natural_number()
{
    let sum = 0;

    for (let i=100; i<=998; i+=2)
    {
        sum += i;

    }

    console.log("sum of all 3-digit even natural number :  "+sum);
}

even_natural_number();



// output :-  sum of all 3-digit even natural number :  247050




