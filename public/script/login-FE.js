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

