function registerForm() {
    return{
        formData:{
            username:'',
            password:'',
            password2:''
        },
        message:"",
        status:"",
        checkEmail(){
            
    
                 fetch('/register/checkDuplicateUsername',{
                     method:"post",
                     headers:{'Content-Type': 'application/json'},
        
                     body: JSON.stringify({username:this.formData.username})
                 
 
                 }).then((response)=>{
                    response.json().then(r=>{
                        if(r.answer === false){
                            console.log('yes')
                            this.status = true;

                        }
                        })
                    
                 })
                },



        submitForm(){

            if ( this.formData.password.length < 6 ) {
                this.message= "Password must be at least 6 characters"
                return
    
                }

            const  reg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
            if (!reg.test(String(this.formData.password).toLowerCase())){
                this.message = "Password  must contain at least 1 capital letter"
                return 
    
            }

            if ( this.formData.password.length < 6 ) {
                this.message= "Password must be at least 6 characters"
                return
    
                }

            

            if (this.formData.password !== this.formData.password2) {
                this.message = "Password does not match";
                
                return 
                
            }
            fetch('/register',{
                method:"post",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(this.formData)
            

            }).then((response)=>{
                    
                window.location.href ='/login'
            })
        }
    }
}
