


//Records User Responses to SQL database
function sql_record(module_number) {

gradestring=""
user=the_time  
  for (var i=0; i<grades.length; i++){
  gradestring+=grades[i][0].toString()+", "+grades[i][1].toString()
  if (i<grades.length-1){
  gradestring+=", "}}

  fetch("../records.php?module_number="+module_number+"&user="+user+"&gradestring="+gradestring)

  }




//Retrieves User Responses from SQL database
  function sql_retrieve(module_number){
    quest=''+(page+1)
    fetch("../retrieve.php?module_number="+module_number+"&quest="+quest)

    .then(function(response){
      return response.json()})
      .then(function(data){

  var q=document.getElementById("selected")
  var a=document.getElementById("users")
  var e=document.getElementById("eventual")
  var c=document.getElementById("attempts")
  var o=document.getElementById("overall")
  
  q.innerHTML="Statistics for Question " + (page+1) 
  a.innerHTML=data[0]
  e.innerHTML=Math.round(100*parseFloat(data[3])/(parseFloat(data[0])+0.0001))
  c.innerHTML=Math.round((100*parseFloat(data[1])+100*parseFloat(data[2]))/(parseFloat(data[0])+0.0001))/100
  o.innerHTML=Math.round(100*parseFloat(data[1])/(parseFloat(data[1])+parseFloat(data[2])+0.0001))
      })
  

  }