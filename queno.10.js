/* Q.10. Write a program to accept a mark obtained by a student in computer 
 science and print the grades accordingly */

//    marks>90=A Grade 
//    70 to 89=B Grade
//    50 to 69=C Grade
//    marks<50=D Grade


function Grades()
{
    let c=55;
  
   

    if(c>90)
    {
        console.log("Grade=A");
    }
    

    else if(c>=70 && c<90)
    {
        console.log('B Grade');
    }
    

    else if(c>=50 && c<70)
    {
        console.log('C Grade');

    }
    
    else 
    {
        console.log('D Grade');
    }
  



}

Grades();


 // output is :- C Grade