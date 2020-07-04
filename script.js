function func() {
    var y = document.getElementById("s").value 
   
    var ones = ['','one','two','three','four', 'five','six','seven','eight','nine']
    var tens1= ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']
    var tens2 =['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
    var hun = ['','one hundred','two hundred','three hundred','four hundred', 'five hundred','six hundred','seven hundred','eight hundred','nine hundred']
    var lak = ['','one lakh ','two lakh ','three lakh ','four lakh ', 'five lakh ','six lakh ','seven lakh ','eight lakh ','nine lakh ']
    
   if(y<10)
  {var value = ones[y]  }
  else if(y<20)
  {var value = tens1[y%10] }
  
  else if(y<100)
  {
    var z1= Math.floor(y/10)
    var value = tens2[z1]+" "+ ones[(y%10)]
  }
  else if(y<1000)
  { 
    
    var h= Math.floor(y/100)
    var r= y%100
  
    if(r>=20)
    {
      var z1= Math.floor(r/10)
      var z3=tens2[z1]+" "+ ones[(r%10)] }
     else if(r>=10)
     {var z3 = tens1[r%10]}
     else
     { var z3 = ones[r%10]}
    var value = hun[h]+" "+z3
  }
  else if(y<10000)
  {
   var t = y%1000
  var t1 =Math.floor(y/1000)
    var h= Math.floor(t/100)
    var r= t%100
  
    if(r>=20)
    {
      var z1= Math.floor(r/10)
      var z3=tens2[z1]+" "+ ones[(r%10)] }
     else if(r>=10)
     {var z3 = tens1[r%10]}
     else
     { var z3 = ones[r%10]}
    var value = ones[t1]+" thousand "+hun[h]+" "+z3
  
  }
  else if(y<20000)
  {
    var t = y%1000
  var t1 =Math.floor(y/1000)
    var h= Math.floor(t/100)
    var r= t%100
  
    if(r>=20)
    {
      var z1= Math.floor(r/10)
      var z3=tens2[z1]+" "+ ones[(r%10)] }
     else if(r>=10)
     {var z3 = tens1[r%10]}
     else
     { var z3 = ones[r%10]}
    var value = tens1[t1]+" thousand "+hun[h]+" "+z3
  
  }
  else if(y<100000)
  {
    var t = y%1000
  var t1 =Math.floor(y/1000)
  var th1 = Math.floor(t1/10)
  var th2 = t1%10
  
    var h= Math.floor(t/100)
    var r= t%100
  
    if(r>=20)
    {
      var z1= Math.floor(r/10)
      var z3=tens2[z1]+" "+ ones[(r%10)] }
     else if(r>=10)
     {var z3 = tens1[r%10]}
     else
     { var z3 = ones[r%10]}
    var value = tens2[th1]+" "+ones[th2]+" thousand "+hun[h]+" "+z3
  
  }
  else if(y<1000000)
  {
    var l= Math.floor(y/100000)
  
    var t = y%1000
  var t1 =Math.floor(y/10000)
  var th1 = Math.floor(t1/10)
  var th2 = t1%10
  
    var h= Math.floor(t/100)
    var r= t%100
  
    if(r>=20)
    {
      var z1= Math.floor(r/10)
      var z3=tens2[z1]+" "+ ones[(r%10)] }
     else if(r>=10)
     {var z3 = tens1[r%10]}
     else
     { var z3 = ones[r%10]}
    var value = lak[l]+ tens2[th1]+" "+ones[th2]+" thousand "+hun[h]+" "+z3
  }
  else if(y==1000000)
  {var value = "Ten lakh"}
  
  document.getElementById("s").value = value+" rupees"
  }