// Q.11. A cloth showroom has announced the following festival discounts on 
// the purchase of items, based on the total cost of the items purchased:



function discount_forfestival()
   {

   
     total_cost=1000;
    if(total_cost < 2000)
    {
        let discount = total_cost * (5/100);
        console.log('discounts on the purchase of items is : '+discount);
       let payable_amount = (total_cost-discount);
        console.log("amount to be paid by the customer after availing the discount : "+ payable_amount);


    }

 else if (total_cost < 5000 && total_cost >=2001)
    {
        let discount = total_cost * (25/100);
        console.log('discounts on the purchase of items is : '+discount);
       let payable_amount = (total_cost-discount);
        console.log("amount to be paid by the customer after availing the discount : "+ payable_amount);


    }


    else if (total_cost < 10000 && total_cost >=5001)
    {
        let discount = total_cost * (35/100);
        console.log('discounts on the purchase of items is : '+discount);
       let payable_amount = (total_cost-discount);
        console.log("amount to be paid by the customer after availing the discount : "+ payable_amount);


    }

    
    else 
    {
        let discount = total_cost * (50/100);
        console.log('discounts on the purchase of items is : '+discount);
       let payable_amount = (total_cost - discount);
        console.log("amount to be paid by the customer after availing the discount : "+ payable_amount);


    }
   }



   discount_forfestival();



   // output is :-  discounts on the purchase of items is : 50
//                  amount to be paid by the customer after availing the discount : 950