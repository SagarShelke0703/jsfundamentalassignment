/*  Q.12 An electronics shop has announced the following seasonal discounts on 
       the purchase of certain items.*/




 function seasonal_discount()
 {
    // let purchase_amount = 400000;
    laptop = "laptop";
    desktop = "desktop";
    purchase_amount = prompt("Enter the price for laptop or desktop : ");

    switch(desktop){
     
        case laptop:
            if (purchase_amount <=2500)
            {
                let discount_on_laptop = purchase_amount * (0.0/100);
                document.write("Discount cost on laptop is : "+ discount_on_laptop);
                let amount_paid_for_laptop = (purchase_amount - discount_on_laptop);
                document.write('Net amount to be paid by customer : '+amount_paid_for_laptop);

            }

            else if(purchase_amount < 57000 && purchase_amount >=25001)
            {
                let discount_on_laptop = purchase_amount * (5.0/100);
                document.write("Discount cost on laptop is : "+ discount_on_laptop);
                let amount_paid_for_laptop = (purchase_amount - discount_on_laptop);
                document.write('Net amount to be paid by customer : '+amount_paid_for_laptop);

            }

            else if(purchase_amount <= 100000 && purchase_amount >=57001)
            {
                let discount_on_laptop = purchase_amount * (7.5/100);
                document.write("Discount cost on laptop is : "+ discount_on_laptop);
                let amount_paid_for_laptop = (purchase_amount - discount_on_laptop);
                document.write('Net amount to be paid by customer : '+amount_paid_for_laptop);


            }

            else
            {
                let discount_on_laptop = purchase_amount * (10.0/100);
                document.write("Discount cost on laptop is : "+ discount_on_laptop);
                let amount_paid_for_laptop = (purchase_amount - discount_on_laptop);
                document.write('Net amount to be paid by customer : '+amount_paid_for_laptop);

            }

            break;


            case desktop:

            if (purchase_amount <=2500)
            {
                let discount_on_Desktop_PC = purchase_amount * (5.0/100);
                document.write("Discount cost on laptop is : "+ discount_on_Desktop_PC );
                let amount_paid_for_Desktop_PC = (purchase_amount - discount_on_Desktop_PC );
                document.write('Net amount to be paid by customer : '+amount_paid_for_Desktop_PC);
            }

            else if(purchase_amount < 57000 && purchase_amount >=25001)
            {
                let discount_on_Desktop_PC = purchase_amount * (7.5/100);
                document.write("Discount cost on laptop is : "+ discount_on_Desktop_PC );
                let amount_paid_for_Desktop_PC = (purchase_amount - discount_on_Desktop_PC );
                document.write('Net amount to be paid by customer : '+amount_paid_for_Desktop_PC);

            }


            else if(purchase_amount <= 100000 && purchase_amount >=57001)
            {
                let discount_on_Desktop_PC = purchase_amount * (10.0/100);
                document.write("Discount cost on laptop is : "+ discount_on_Desktop_PC );
                let amount_paid_for_Desktop_PC = (purchase_amount - discount_on_Desktop_PC );
                document.write('Net amount to be paid by customer : '+amount_paid_for_Desktop_PC);

            }

            else
            {
                let discount_on_Desktop_PC = purchase_amount * (15.0/100);
                document.write("Discount cost on laptop is : "+ discount_on_Desktop_PC );
                let amount_paid_for_Desktop_PC = (purchase_amount - discount_on_Desktop_PC );
                document.write('Net amount to be paid by customer : '+amount_paid_for_Desktop_PC);

            }
            default:

        }


 }


 seasonal_discount();

 console.log("Visit Again");
 

