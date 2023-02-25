
function pop() {
  sql_retrieve(Module_Number)
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }


function score(){
  S=document.getElementById("score")
  while(S.firstChild){
  S.removeChild(S.firstChild)}


  var q = document.createElement('h1');
  q.style.fontSize="x-large"
  q.style.textAlign="left"
   q.innerHTML="Score Card"
    S.appendChild(q);

  for (i=0; i<quests.length-1; i++){
  qid='q'+i
  var q = document.createElement('div');
  q.style.fontSize="x-large"
  q.style.textAlign="left"
    q.id = qid;
    q.innerHTML = i+1;
    if (grades[i][0]==0){
      q.style.color='red'
      Check=q.innerHTML
      Check+=" &#x2610"
      q.innerHTML=Check
    }
    if (grades[i][0]>0){
      q.style.color='green'
      Check=q.innerHTML
      Check+=" &#9745"
      q.innerHTML=Check
    }
    S.appendChild(q);
}}



function make_cookject(){
  cookie=document.cookie 
  crumbs=cookie.split('; ')
  cookject={}
  for (i=0; i<crumbs.length; i++){
      tuple=crumbs[i].split('=')
      key=tuple[0]
      val=tuple[1]
      cookject[key]=val}
  return(cookject)}



function make_grades(module_number){
user=make_cookject()['user']
if (user==undefined){
  user=the_time
}
    fetch("../grades.php?module_number="+module_number+"&user="+user)
    .then(function(response){
      return response.json()})
      .then(function(data){
        alert(data)
     grd=[]
    for (i=0; i<14; i++){
      grd.push([parseFloat(data[2*i+2]),parseFloat(data[2*i+3])])
    }
    grades=grd
    score()
})  

  }






//Records User Responses to SQL database
function sql_record(module_number) {
gradestring=""
user=make_cookject()['user']
if (user==undefined){
user=the_time  }
  for (var i=0; i<grades.length; i++){
  gradestring+=grades[i][0].toString()+", "+grades[i][1].toString()
  if (i<grades.length-1){
  gradestring+=", "}}
alert(gradestring)
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



  function forward(){
    if (page<quests.length-1){
    page+=1
    document.getElementById("question").innerText=quests[page]
    document.getElementById("try").innerText=""
    MathJax.typesetPromise()
  }
  }
  function back(){
    if (page>0){
    page-=1
    document.getElementById("question").innerText=quests[page]
    document.getElementById("try").innerText=""
    MathJax.typesetPromise()
  }
  }