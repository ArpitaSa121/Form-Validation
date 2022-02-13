<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
h1 {text-align: center;}
h3 {text-align: center;}


input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: blue;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  
 background-image: radial-gradient(#FAD7A0 , #F5CBA7 );
  padding: 60px;
}
</style>

<script type="text/javascript">
function valid() 
{
var na = document.getElementById("cname").value;
var ag = document.getElementById("room").value;
var em = document.getElementById("eid").value.indexOf("@");
var mno = document.getElementById("Pno").value;
if(na==""||na==null)
{
alert("Enter The Name");
return false;
}
else if(isNaN(ag)||ag<1||ag>10)
{
alert("Number of rooms cannot be more than 10");
return false;
}
else if(em==-1) 
{  
alert("E-mail ID is not valid");
return false;
}
else if(mno==""||mno==null)
{
alert("Enter The Phone No");
return false;
}
else if(isNaN(mno)||mno.length>10||mno.length<10)
{
alert("The mobile no. always has 10 digit numerical value");
return false;
}
else
alert("Reservation Done Successfully");
}
</script>

</head>
<body>

<h1>Hotel Reservation Form</h1>

<div class="container">
  <form action="" onsubmit="return valid()" method="post">
   <h3 class=" text-center">Customer Details</h3>
    <label for="fname">Name</label>
    <input type="text" id="cname" name="firstname" placeholder="name..">

    <label for="rooms">No. Of Rooms</label>
    <input type="text" id="room" name="number" placeholder="rooms...">

    <label for="lname">Email</label>
    <input type="text" id="eid" name="lastname" placeholder="email..">

    <label for="Phone No.">Phone no.</label>
    <input type="text" id="Pno" name="number" placeholder="phone no...">
     
     

      <label for="Phone No.">No. Of People</label>
    <input type="text" id="People" name="number" placeholder="no. of people..."><br><br>
      <label for="room">Room type</label><br><br>
       <input type="radio" id="age1" name="age" value="30">
  <label for="age1">Deluxe Room [2000/Day]</label><br>
  <input type="radio" id="age2" name="age" value="60">
  <label for="age2">Suit Room [4000/Day]</label><br><br>

   

    <input type="submit" value="Submit">
 
  </form>
</div>

</body>
</html>
