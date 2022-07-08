//Q1
var date=new Date();
document.write(date);
//Q2
var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month= new Date().getMonth();
document.write(mL[month])
//Q3
var days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day= new Date().getDay();
document.write("Today is" + " " + days[day]);
//Q4
var days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day= new Date().getDay();
day=0
if(day===0 || day==6 ){

document.write("Today is Funday");
}
else{
    
    document.write("No Funday");
}
//Q5
var date= new Date().getDate();
if(date<=15){
    document.write("First Fifteen Days");
}
else{
    document.write("Last Fifteen Days");
}
//Q6
var date= new Date();
document.write("Current Date:" + date );
document.write("<br>");
var milisec=new Date().getTime();
document.write("Miliseconds Since 1 Jan 1970 : "+ milisec);
document.write("<br>");
var min=milisec/(1000*60);
document.write("Minutes Since 1 Jan 1970 : "+ min);
//Q7
var date= new Date();
var time=date.getHours();
if(time<12){
    document.write("Its AM");
}
else{
    document.write("Its PM");
}
//Q8
var laterDate= new Date("12/31/2020");
document.write("laterDate:"+laterDate);
//Q9
var newdate=new Date("4/2/2022").getTime();
var laterdate=new Date("6/15/2015").getTime();
var diff=newdate-laterdate;
diff=Math.ceil(diff/(1000*60*60*24));
document.write(diff+":Days have passed since 1st Ramzan 2015");
//Q10
var date = new Date("Jan 01, 2015");
var current = new Date();
var diff = current - date;

var secPassed = Math.round(diff / (1000 * 60))
document.write("On Refernce date " + date + "," + secPassed + "  Passed since begning of 2015");
//Q11
var dt = new Date();
document.write("Current Date:"+dt)
document.write("<br>")
dt.setHours( dt.getHours() - 1);
document.write("1 Hour Ago It Was:" + dt );
//Q12
var dt = new Date();
document.write("Current Date:"+dt)
document.write("<br>")
dt.setFullYear( dt.getFullYear() - 100);
document.write("100 Years Ago It Was:" + dt );
//Q13
var age = +prompt("Enter your age")
var bd = new Date().getFullYear()-age;
document.write(bd);
//Q14
var customerName="Saraib";
var month1=new Date().getMonth()
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var unit=234;
var charges=16;
var netBill=unit*charges;
var lateFee=350;
document.write("Name:"+ customerName);
document.write("<br>")
document.write("Month:"+month[month1]);
document.write("<br>")
document.write("units:"+unit);
document.write("<br>")
document.write("Per unit charge:"+charges);
document.write("<br>")
document.write("Latefee:"+lateFee);
document.write("<br>")
document.write("Bill in due date:"+netBill);
var m=new Date().getDate()
document.write("<br>")
if(m>3){
    netBill=unit*charges+lateFee;
    document.write("After due Date" + netBill)

}
