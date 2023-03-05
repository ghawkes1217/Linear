linearAlgebraModules = [
  "Linear Combinations", 
  "Dot Product", 
  "Matrix Multiplication (Column Picture)", 
  "Matrix Multiplication (Row Picture)", 
  "Row Operations", 
  "Elementary Matrices (Linear Equations)", 
  "Elementary Matrices (Multiplication)", 
  "Inverse Matrices", 
  "Reduced Row Echelon Form"]

linearAlgebraModuleAddresses = {
  "Linear Combinations": "linear-combinations.html", 
  "Dot Product": "dot-product.html", 
  "Matrix Multiplication (Column Picture)": "column-matrix-multiplication.html", 
  "Matrix Multiplication (Row Picture)": "row-matrix-multiplication.html", 
  "Row Operations": "row-operations", 
  "Elementary Matrices (Linear Equations)": "elementary-matrices-equations.html", 
  "Elementary Matrices (Multiplication)": "elementary-matrices-multiplication.html", 
  "Inverse Matrices": "inverses.html", 
  "Reduced Row Echelon Form": ""}

calculusModules = [
  "Functions (Domain and Range)", 
  "Functions (Composition)", 
  "Limit of Functions", 
  "Evaluating Limits", 
  "Limit Laws", 
  "Limit of Functions (Precise Definition)", 
  "Continuity of Functions", 
  "Intermediate Value Theorem"]

calculusModuleAddresses = {
  "Functions (Domain and Range)": "", 
  "Functions (Composition)": "", 
  "Limit of Functions": "", 
  "Evaluating Limits": "", 
  "Limit Laws": "", 
  "Limit of Functions (Precise Definition)": "", 
  "Continuity of Functions": "", 
  "Intermediate Value Theorem": ""}

probabilityModules = [
  "Outcomes and Sample Space", 
  "Events and Probability", 
  "Probability of Mutually Exclusive Events", 
  "Probability of Independent Events", 
  "Probability of Complementary Events", 
  "Conditional Probability", 
  "Bayes' Theorem", 
  "Discrete Random Variables", 
  "Expected Value and Variance (Discrete)", 
  "Binomial Distribution", 
  "Poisson Distribution", 
  "Continuous Random Variables", 
  "Normal Distribution"]

probabilityModuleAddresses = {
  "Outcomes and Sample Space": "", 
  "Events and Probability": "", 
  "Probability of Mutually Exclusive Events": "", 
  "Probability of Independent Events": "", 
  "Probability of Complementary Events": "", 
  "Conditional Probability": "", 
  "Bayes' Theorem": "", 
  "Discrete Random Variables": "", 
  "Expected Value and Variance (Discrete)": "", 
  "Binomial Distribution": "", 
  "Poisson Distribution": "", 
  "Continuous Random Variables": "", 
  "Normal Distribution": ""}

// This lists all the courses so far
labCourses = [
  "Linear Algebra", 
  "Calculus", 
  "Probability", 
  "Statistics", 
  "Discrete Math"]

// This associates the course to modules and addresses
associations = {
  "Linear Algebra": ["LinAlg", linearAlgebraModules, linearAlgebraModuleAddresses, "linear-modules"],
  "Calculus": ["Calc", calculusModules, calculusModuleAddresses, "calculus-modules"],
  "Probability": ["Prob", probabilityModules, probabilityModuleAddresses, "probability-modules"]}

function greetUser(){
  document.getElementById("greeting").textContent = "Welcome, " + userfirstName
  document.getElementById("login").textContent = "logged in as " + loginName
}

function showEnrolledCourses(){
  for (let k=0; k<enrolledLabCourses.length; k++)
  {
    courseName = labCourses[enrolledLabCourses[k]]
    courseCode = associations[courseName][0]
    moduleList = associations[courseName][1]
    moduleAdresses = associations[courseName][2]
    courseDirectory = associations[courseName][3]
    Elements = document.getElementsByClassName(courseCode)
    courseArea = Elements[0]
    courseArea.classList.remove("hidden")

    for (let i=0; i<moduleList.length; i++){
      moduleText = moduleList[i]
      listElementOne = document.createElement("li")
      listElementOne.className = "notStartedModule"
      listElementOne.id = courseCode + (i+1)
      
      anchorElement = document.createElement("a")
      anchorElement.className = "notStartedModule"
      anchorElement.textContent = moduleText
      if (moduleAdresses[moduleText] === ""){
        anchorElement.href = "index.html"
      }
      else {
        anchorElement.href = courseDirectory + "/" + moduleAdresses[moduleText]
      }
      listElementOne.appendChild(anchorElement)

      listAreaOne = document.getElementsByClassName(courseCode)[1]
      listAreaOne.appendChild(listElementOne)

      listElementTwo = document.createElement("li")
      button = document.createElement("button")
      button.className = "statsButton"
      button.textContent = "Show stats"
      listElementTwo.appendChild(button)

      listAreaTwo = document.getElementsByClassName(courseCode)[2]
      listAreaTwo.appendChild(listElementTwo)
    }
  }
}

linearAlgebraModuleData = {
  "1": [[2,1, 3,0, 0,4, 0,0, 1,3, 
         0,0, 1,0, 0,2, 1,0, 0,0,
         1,2, 2,0, 0,5, 0,6], 
        [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1], 1],
  "2": [[1,0, 3,0, 1,2, 1,0, 5,0,
         1,1, 2,0, 1,4, 2,0, 4,3, 
         2,2, 3,0, 1,5, 1,6], 
        [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1], 1],
  "3": [[0,2, 1,0, 0,0, 0,1, 0,0,
         0,0, 2,0, 0,4, 1,1, 0,3, 
         2,1, 0,3, 0,5], 
        [1,1,1,1,1, 1,1,1,1,1, 1,1,1], 1],
  "4": [[0,1, 0,3, 0,0, 0,0, 0,0,
         0,0, 0,4, 1,0, 0,0, 0,0, 
         0,1, 0,0, 0,5], 
        [1,1,1,1,1, 1,1,1,1,1, 1,1,1], 1],
  "5": [[0,0, 0,0, 0,0, 0,0, 0,0,
         0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1, 1,1,1,1], 1],
  "6": [[1,0, 0,3, 0,1, 0,3, 0,0,
         0,0, 2,0, 0,1, 0,0], 
        [1,1,1,1,1, 1,1,1,1], 1],
  "7": [[1,0, 0,3, 0,4, 0,0, 0,0,
         0,0, 0,0, 4,2, 0,0, 0,0,
         0,0, 1,5], 
        [1,1,1,1,1, 1,1,1,1,1, 1,1], 1],
  "8": [[1,0, 2,3, 4,4, 1,0, 3,0,
         1,0, 3,0, 4,2, 2,1, 1,5,
         1,0, 1,5, 1,1], 
        [1,1,1,1,1, 1,1,1,1,1, 1,1,1], 1],
  "9": [[0,0, 0,0, 0,0, 0,0, 0,0,
         0,0, 0,0, 0,0, 0,0, 0,0,
         0,0, 0,0], 
        [1,1,1,1,1, 1,1,1,1,1, 1,1], 1]}

calculusModuleData = {
  "1": [[1,0, 1,0, 1,0, 1,0, 1,0], 
        [1,1,1,1,1], 1],
  "2": [[1,0, 3,1, 1,0, 2,1, 1,1], 
        [1,1,1,1,1], 1],
  "3": [[0,0, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1],
  "4": [[2,1, 0,3, 0,4, 0,0, 0,1], 
        [1,1,1,1,1], 1],
  "5": [[0,1, 0,0, 4,0, 0,0, 0,3], 
        [1,1,1,1,1], 1],
  "6": [[0,0, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1],
  "7": [[0,0, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1],
  "8": [[0,0, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1]}

probabilityModuleData = {
  "1": [[2,1, 3,0, 0,4, 0,0, 1,3], 
        [1,1,1,1,1], 1],
  "2": [[2,1, 3,0, 0,4, 0,0, 1,3], 
        [1,1,1,1,1], 1],
  "3": [[2,1, 3,0, 0,4, 0,0, 1,3], 
        [1,1,1,1,1], 1],
  "4": [[0,4, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1],
  "5": [[0,0, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1],
  "6": [[0,0, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1],
  "7": [[2,1, 0,3, 0,4, 0,0, 0,1], 
        [1,1,1,1,1], 1],
  "8": [[0,1, 0,0, 4,0, 0,0, 0,3], 
        [1,1,1,1,1], 1],
  "9": [[0,0, 0,0, 0,0, 0,0, 0,0], 
        [1,1,1,1,1], 1],
  "10": [[0,0, 0,0, 0,0, 0,0, 0,0], 
         [1,1,1,1,1], 1],
  "11": [[0,0, 0,0, 0,0, 0,0, 0,0], 
         [1,1,1,1,1], 1],
  "12": [[2,1, 0,3, 0,4, 0,0, 0,1], 
         [1,1,1,1,1], 1],
  "13": [[0,1, 0,0, 4,0, 0,0, 0,3], 
         [1,1,1,1,1], 1]}

aggregateModuleData = {
  "Linear Algebra": linearAlgebraModuleData,
  "Calculus": calculusModuleData,
  "Probability": probabilityModuleData}

function computeModuleCompletionProgress(userData, questionWeights){
  n = questionWeights.length
  if (userData.length < 2*n){
    throw new Error("Given user data is insufficient.")}

  let weightedSum = 0
  let weightTotal = 0
  for (let i=0; i<n; i++){
    let completed = userData[2*i]>0 ? 1 : 0 
    weightedSum += completed*questionWeights[i]
    weightTotal += questionWeights[i]
  }
  return 100 * weightedSum / weightTotal
}

function computeCourseCompletionProgress(moduleProgress, moduleWeights){
  if (moduleProgress.length < moduleWeights.length){
    throw new Error("Given module data is insufficient.")}

  let weightedSum = 0
  let weightTotal = 0
  for (let i=0; i<moduleWeights.length; i++){
    score = moduleProgress[i]
    weightedSum += score*moduleWeights[i]
    weightTotal += moduleWeights[i]
  }
  return weightedSum / weightTotal
}

function updateCourseProgress(moduleData, courseName){
  courseCode = associations[courseName][0]
  moduleList = associations[courseName][1]

  const moduleProgress = []
  const moduleWeights = []
  for (let i=0; i<moduleList.length; i++){
    s = String(i+1)
    userData = moduleData[s][0]
    questionWeights = moduleData[s][1]
    moduleWeights.push(moduleData[s][2])
    
    score = computeModuleCompletionProgress(userData, questionWeights)
    moduleProgress.push(score)
    
    listArea = document.getElementsByClassName(courseCode)[1]
    listElement = listArea.children[i]
    anchorElement = listElement.children[0]
    if (score === 0){
      listElement.classList.remove("completedModule")
      listElement.classList.remove("inProgressModule")
      listElement.classList.add("notStartedModule")
      anchorElement.classList.remove("completedModule")
      anchorElement.classList.remove("inProgressModule")
      anchorElement.classList.add("notStartedModule")

      anchorElement.textContent = moduleList[i]
    }
    else if (score === 100){
      listElement.classList.remove("notStartedModule")
      listElement.classList.remove("inProgressModule")
      listElement.classList.add("completedModule")
      anchorElement.classList.remove("notStartedModule")
      anchorElement.classList.remove("inProgressModule")
      anchorElement.classList.add("completedModule")

      anchorElement.textContent = moduleList[i] + " [Completed]"
    }
    else {
      listElement.classList.remove("notStartedModule")
      listElement.classList.remove("completedModule")
      listElement.classList.add("inProgressModule")
      anchorElement.classList.remove("notStartedModule")
      anchorElement.classList.remove("completedModule")
      anchorElement.classList.add("inProgressModule")

      anchorElement.textContent = moduleList[i] + " [" + score.toFixed() + "%]"
    }
  }

  courseProgress = computeCourseCompletionProgress(moduleProgress, moduleWeights)
  parent = document.getElementsByClassName(courseCode)[0]
  progressArea = parent.children[1]
  progressArea.textContent = "Completion Progress: " + courseProgress.toFixed(2) + "%"}