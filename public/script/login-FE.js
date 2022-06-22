let  statesession=false;
function loginForm() {
    return{
        formData:{
            username:'',
            password:'',
        },
        status:'',

        submitForm(){
            fetch('/login',{
                method:"post",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(this.formData)
            
            }).then((response)=>{
               
                response.json().then(r=>{

                 const res= Object.values(r);
                 const hashID= res.splice(0,1);
                 statesession= res.splice(1);
               
                 localStorage.setItem('user-id',hashID.toString());
                 
                    if(r.status){
                        this.status = true;
                    }
                    else{
                        window.location.href ='/main'
                    }
                 })
            })
        }
    }
}

