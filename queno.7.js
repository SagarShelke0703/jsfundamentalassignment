//Q.7 Write a program to input the Principal, Rate and Time and calculate the 
// Simple Interest.



function sagar()
{
    let p,r,t,si;

    p=prompt('Enter the principal');
    r=prompt('Enter the Rate');
    t=prompt('Enter the Duration');
    
    si=(p*r*t)/100;
    document.write("Simple Interest = "+si);
}

sagar();