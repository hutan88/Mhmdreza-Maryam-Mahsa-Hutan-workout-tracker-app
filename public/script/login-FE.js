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
                        console.log('enter invaild part')
                    }
                    else{
                        window.location.href ='/main'
                    }
                    
                    //let id =  r.id;
                    //console.log(id)
                    //localStorage.setItem('id',id)
                    //console.log('check id')
                    //console.log(response);
                    //window.location.href ='/main'
                    //console.log(response);
                 })
            })
        }
    }
}

