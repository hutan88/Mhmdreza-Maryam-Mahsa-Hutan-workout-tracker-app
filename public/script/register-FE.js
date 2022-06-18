function registerForm() {
    return{
        formData:{
            username:'',
            password:'',
            password2:''
        },
        submitForm(){
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
