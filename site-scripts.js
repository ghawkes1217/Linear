
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







  function inout(){

    user=make_cookject()['user']
    if (user==undefined){
    logged="Log In"}
    if (user!=undefined){
    var logged="Log Out"}
    
      var icons=[]
      icons.push(["Home","index.html"])
      icons.push(["Lab Courses", "Linear Algebra", "linear-lab.html", "Calculus", "", "Probability", "", "Statistics", "", "Discrete Math", ""])
      icons.push(["The Team", "Dr. Graham Hawkes", "graham.html", "Dr. Wencin Poh", "wencin.html", "Jeff NIchols", "jeff.html"])
      icons.push(["Contact","contact.html"])
      icons.push(["Research","research.html"])
      icons.push(["News","news.html"])
      icons.push(["Sign Up","new-account.html"])
      icons.push([logged,"log-in.html"])
      icons.push(["Your Progress","student-prog.html"])
    
    var bar=document.createElement("div")
    bar.className="navbar"
    document.body.prepend(bar)
    for (i=0;i<icons.length;i++){
    
    if (icons[i].length==2){
    var Icon = document.createElement("div")
    bar.appendChild(Icon)
    var icon = document.createElement("a")
    icon.innerHTML=icons[i][0]
    icon.href=icons[i][1]
    Icon.appendChild(icon)}
    
    if (icons[i].length>2){
    var Icon = document.createElement("div")
    Icon.className="dropdown"
    bar.append(Icon)
    var dropbut = document.createElement("button")
    dropbut.className="dropbtn"
    dropbut.innerHTML=icons[i][0]
    Icon.appendChild(dropbut)
    var caret = document.createElement("i")
    caret.className="fa fa-caret-down"
    dropbut.appendChild(caret)
    var content = document.createElement("div")
    content.className="dropdown-content"
    Icon.appendChild(content)
    for (j=1; j<icons[i].length; j+=2){
      var line = document.createElement("a")
      line.innerHTML=icons[i][j]
      if (icons[i][j+1]==""){
        line.style="color:grey"
      }
      if (icons[i][j+1]!=""){
        line.style="color:blue"
        line.href=icons[i][j+1]
      }
      content.appendChild(line)
    }
    }
    }
    }