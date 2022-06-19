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
                
                if(!r.status){
                    this.status = true;
                    console.log('enter invaild part')
                }
                else{
                    window.location.href ='/main'
                }
                 })
            }
        }
    }

