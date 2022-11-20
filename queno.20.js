/*Q. 20.Write a program to print the first 15 numbers of the Pell series. Pell 
series is such a series which starts from 1 and 2 , and subsequent 
numbers is the sum of twice the previous number and the number 
previous to the previous number. Pell series: 1, 2, 5, 12, 29, 70, 169, 408, 
985, 2378, 5741, 1386.*/


function pell_series()
{

let x = prompt('Enter number for pell series :');
let a = 1;
let b = 2;
let c;


for(j=1; j<=x; j++)
{
    c=a + (2*b);
     document.write("pell Series Output : "+c);

     a = b;

     b = c;
}


}

pell_series();