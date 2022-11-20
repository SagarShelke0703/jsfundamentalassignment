/* Q.19. Write a program to find the sum of 1st 10 numbers of Lucas series i.e. 
2,1,3,4,7,11,18,…. Lucas series is such a series which starting from 2 and 
1, and subsequent numbers are the sum of the previous two numbers.*/



function Lucas_series()
{
    let a = 3;
    let b = -1;
    let c;

    let x = prompt("Enter the length lucas series : ");
    for(i=1; i<=x; i++)
    {
        c=a+b;
         document.write("Lucas Series Output : "+c);

         a = b;

         b = c;
    }


}

Lucas_series();




