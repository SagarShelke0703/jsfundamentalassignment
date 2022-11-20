/* Q.18. Write a program to input an integer and find its factorial. Factorial of a 
number is the product of all natural numbers till that number. For 
example factorial of 5 is 120 since 1×2×3×4×5=120.*/


function factorial();
{
    let n = prompt("Enter an integer Number : ");
    let f = 1;


    for(let i=1; i<=5; i++)
    {
        f=f*i;
    }

    console.log("Factorial of x is : "+f);
}

factorial();