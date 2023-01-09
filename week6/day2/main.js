const students = [
    { name: "jessika", uid: 1 },
    { name: "vinny", uid: 2 },
    { name: "meg", uid: 3 },
    { name: "jaye", uid: 4 },
    { name: "corey", uid: 5 },
    { name: "adam", uid: 6 },
    { name: "rokhaya", uid: 7 },
    { name: "peter", uid: 8 },
    { name: "mauro", uid: 9 },
  ];
  
  const jobAssignments = [
    { taskName: "fix github issue 1322", uid: 9 },
    { taskName: "fix github issue 5666", uid: 8 },
    { taskName: "fix frontend issue 123121", uid: 7 },
    { taskName: "fix vscode issue 992223", uid: 6 },
    { taskName: "fix html issue layout", uid: 5 },
    { taskName: "fix dc issue 1323122", uid: 4 },
    { taskName: "fix backend issue 2", uid: 3 },
    { taskName: "fix github issue 130022", uid: 2 },
    { taskName: "fix github issue 444", uid: 1 },
   
  ];
const studentjobs = (arr, arr2) =>{
  for (x of arr){
    for (y of arr2){
        if(x.uid === y.uid ){
    console.log (`Student ${x.name} with id ${x.uid} matched job id ${y.uid}. Your job assignement is ${y.taskName}`);
        }
    }
  }
}
studentjobs(students, jobAssignments);