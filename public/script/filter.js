  

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
     const getMonth = new Date().getMonth()+1;
     const getFullYear = new Date().getFullYear();
     let getMonthStr;
    if (getMonth>9) {
        getMonthStr=getMonth.toString()
    }   
    else
    {
        getMonthStr="0"+getMonth.toString()
    }
     allExerciseJs.forEach(index => {
         let dateinDb = index.date
         let dayStr = dateinDb.slice(8, 10)
         let monthStr = dateinDb.slice(5, 7)
         let yearStr = dateinDb.slice(0, 4)
         if (dayStr === getToday.toString() && monthStr === getMonthStr  && yearStr === getFullYear.toString()) {
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
     const getFullYear = d.getFullYear();
     let endday = day + 7;
     let endmonth = month + 1
     if (endday > 31) {
         endmonth = month + 1
     }

     allExerciseJs.forEach(index => {
         let editdate = index.date //2022-06-07
         let editmonth = editdate.slice(6, 7)
         let editmonthitem = parseInt(editmonth) // month int
 
         let dayitem = editdate.slice(8, 10)
         let editdayitem = parseInt(dayitem) // day int

         let yearStr = editdate.slice(0, 4)//2022 str

         if (editdayitem >= 1 && editdayitem <= 8) {
             editdayitem = editdayitem + 31
         }
         if ((editmonthitem === month + 1 || editmonthitem === endmonth + 1) && yearStr ===getFullYear.toString()) {
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
 
 