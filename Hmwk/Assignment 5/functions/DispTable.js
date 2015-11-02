// JavaScript Document
// Mauricio S. Perez
// Oct 1st, 2015
// Purpose:  Assignment 5: Display Function

		
		function topOfSpread(){				 //This Function Simply Displays the top of the spreadsheet
			//Top of Box					//that displays the meaning of each column. To be called in
			var c1 = "Hours";			   //DispTable function.
			var c2 = "Gross Pay";		  //I also put the spreadsheet strings into vars to then be able
			var c3 = "Pay Rate: $'s/hr"; //to modify their Boldness.
			var c4 = "Taxes: 10%";
			var c5 = "Net-Pay";
			document.write("<tr>");
			document.write("<td><p>"+c1.bold()+"</p></td>");		//.bold() displays "c1" as bold
			document.write("<td><p>"+c2.bold()+"</p></td>");
			document.write("<td><p>"+c3.bold()+"</p></td>");
			document.write("<td><p>"+c4.bold()+"</p></td>");
			document.write("<td><p>"+c5.bold()+"</p></td>");
			document.write("</tr>"); 
		}//End of Function topOfSpread
		
		
		function DispTable(payRate){								  //This Function calculates and prints the 
			topOfSpread();											 //savings spreadsheet. Only the payrate needs
			var nHours=72;  //Total number of hours in table		//to be passed through. topOfSpread is initialy
			var dblTim=20; //Double time starts					   //called to start off the spreadsheet.
			var trpTim=40;//Triple time starts

			//Declare 1-Dim arrays
			var hrsWrkd=[];		// Hours Worked
			var gPay=[];	   // Gross Pay
			var pRate=[];	  // Pay Rate
			var taxes=[];	 // Taxes
			var netPay=[];	// Net Pay After Taxes
			
			//Fill the 1-Dim parallel array with data
			for(var hours=0;hours<=nHours;hours++){
			  hrsWrkd[hours]=hours;
			  if(hours<=dblTim){
				   gPay[hours]=hours*payRate;
				   pRate[hours]=gPay[hours]/hours;			  //fill Payrate Array ($'s/hour)
				   taxes[hours]=gPay[hours]*.1;				 //fill Tax Array
				   netPay[hours]=gPay[hours]-taxes[hours];	//fill Net Pay Array
				   
			  }else if(hours<trpTim){
				   gPay[hours]=dblTim*payRate+(hours-dblTim)*2*payRate;
				   pRate[hours]=gPay[hours]/hours;			  //fill Payrate Array
				   taxes[hours]=gPay[hours]*.1;				 //fill Tax Array
				   netPay[hours]=gPay[hours]-taxes[hours];	//fill Net Pay Array
			  }else{
				   gPay[hours]=dblTim*payRate+(trpTim-dblTim)*2*payRate+(hours-trpTim)*3*payRate;
				   pRate[hours]=gPay[hours]/hours;			  //fill Payrate Array
				   taxes[hours]=gPay[hours]*.1;				 //fill Tax Array
				   netPay[hours]=gPay[hours]-taxes[hours];	//fill Net Pay Array
			  }
			}//End Fill the 1-Dim parallel array with data
			
			//Display the arrays
			for(var hours=0;hours<=nHours;hours++){
				document.write("<tr>");
				  document.write("<td>"+hrsWrkd[hours]+"</td>");
				  document.write("<td>$"+gPay[hours].toFixed(2)+"</td>");
				  document.write("<td>$"+pRate[hours].toFixed(2)+"</td>");	  //Fill Payrate Array
				  document.write("<td>$"+taxes[hours].toFixed(2)+"</td>");	 //Tax  Payrate Array
				  document.write("<td>$"+netPay[hours].toFixed(2)+"</td>");	//Tax  Payrate Array
				document.write("</tr>");
			}//End Display the arrays
		}//End of Function DispTable
