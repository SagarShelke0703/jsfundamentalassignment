//Q.15. Write a program to input an integer and check whether it is a prime 
// number or not

let sagar=prompt("Enter Number  :");

for(i=2; i<=sagar; i++)
{
    let prime=true;

  

    for(let j=2;j<=i; j++){

        if(i%j===0 && i!==j){
            prime=false;
        }
    }
    if(prime===true){
        document.write('prime number :  '+i);

    }

    else{
        document.write("Not a prime Number :  "+i);
    }
}