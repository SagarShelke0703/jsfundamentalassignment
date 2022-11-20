// Q.13.Given below is a hypothetical table showing rates of Income Tax for 
// male citizens below the age of 65 years:



Gender='male';

let age = prompt("Enter Your Age");

if(age >= 65 || Gender == "Female")
{
   document.write("Wrong Category* ");
}

else 
{
    let Tax_Amount = prompt(`Enter the your salary amount : `);

    if(Tax_Amount <= 160000)
    {
        document.write(" You have no need to pay the Income Tax : ");

    }

    else if (Tax_Amount < 500000 && Tax_Amount >=160000)
    {
      let Income_Tax = (Tax_Amount *(10/100));
      document.write("Pay the Income Tax to Government in INR : "+Income_Tax);
    }

    else if (Tax_Amount < 800000 && Tax_Amount >=500000)
    {
      let Income_Tax = (Tax_Amount *(20/100))+34000;
      document.write("Pay the Income Tax to Government in INR : "+Income_Tax);
    }

    else
    {
        let Income_Tax = (Tax_Amount *(30/100))+94000;
        document.write("Pay the Income Tax to Government in INR : "+Income_Tax);
    }
}
