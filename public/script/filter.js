  

function changeUi(Timesfilter) {
    const cardsWrapper = document.querySelector(".cards-wrapper .row")
     cardsWrapper.innerHTML = "";
     Timesfilter.map(item => {
         cardsWrapper.innerHTML += `
             <div class="card col-4 col-lg-3 m-2 border-5 border-dark opacity-75 ">
                 <div class="card-body">
                     <div class="row">
                         <h5 class="card-title fw-bold">Category : ${item.category}</h5>
                     </div>
                     <h6 class="card-subtitle mt-2 fw-bold">Name :  ${item.title}</h6>
                     <label class="fw-bold" for="">Due Date : ${item.date}</label><br>
                     <label class="fw-bold" for="">Time : ${item.time}</label><br>
                     <label for="" class="fw-bold">Set : ${item.sets}</label><br>
                 </div>
             </div>
          
          `
     })
 
 }
 
 function daily() {
    
     const Timesfilter = []
     const getToday = new Date().getDate();
     allExerciseJs.forEach(index => {
         let daily = index.date
         let saa = daily.slice(8, 10)
         if (saa === getToday.toString()) {
             Timesfilter.push(index)
         }
     });
     changeUi(Timesfilter)
     return Timesfilter
 }
 
 
 
 
 function weekly() {
     // const filteri = []
     const Timesfilter = []
     const d = new Date();
     let day = d.getDate();
     let month = d.getMonth();
     let endday = day + 7;
     let endmonth = month + 1
     if (endday > 31) {
         endmonth = month + 1
     }
 
     allExerciseJs.forEach(index => {
         let editdate = index.date
         let editmonth = editdate.slice(6, 7)
         let editmonthitem = parseInt(editmonth)
 
         let dayitem = editdate.slice(8, 10)
         let editdayitem = parseInt(dayitem)
         if (editdayitem >= 1 && editdayitem <= 8) {
             editdayitem = editdayitem + 31
         }
         if (editmonthitem === month + 1 || editmonthitem === endmonth + 1) {
             if (editmonthitem === endmonth + 1) {
                 if (editdayitem > 31 && editdayitem < 38) {
                     if (editdayitem >= day && editdayitem <= endday) {
                         Timesfilter.push(index)
                     }
                 }
             }
             else {
                 if (editdayitem >= day && editdayitem <= endday) {
                     Timesfilter.push(index)
                 }
             }
 
         }
     });
     changeUi(Timesfilter)
     return Timesfilter
 }
 
 
 function all() {
     const Timesfilter = []
     console.log("3")
     allExerciseJs.forEach(index => {
         Timesfilter.push(index)
     });
     changeUi(Timesfilter)
     return Timesfilter
 }
 
 
 function selectedFunc(number) {
 
     switch (number) {
         case 1:
             daily()
             break;
 
         case 2:
             weekly()
             break;
 
         case 3:
             all()
             break;
 
         default:
             break;
     }
 }
 
 
 
 