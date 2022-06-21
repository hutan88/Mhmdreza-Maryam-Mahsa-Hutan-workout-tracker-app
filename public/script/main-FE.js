   function SendID()
   {
    const checkUserId = localStorage.getItem('user-id');
    
    const getID=new Headers()
    getID.append("myid",checkUserId)
  
try {
    fetch('/main/api/all',{
        method: 'post',
       headers: getID,

   }).then((res)=>
   {
        res.json().then((r)=>
        {
            console.log(r);
        })
   })
    
} catch (error) {
    console.log(error)
}
   }
 