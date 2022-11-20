//Q.17. Write a program to find the sum of all 3 digit odd natural numbers, 
//      which are multiples of 5.




function odd_natural_number()
{
    let sum = 0;

    for (let i=100; i<=995; i+=5)
    {
        sum += i;

    }

    console.log("sum of all 3-digit odd natural number :  "+sum);
}

odd_natural_number();


// output :-  sum of all 3-digit odd natural number :  98550