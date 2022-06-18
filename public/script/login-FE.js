function loginForm() {
    return{
        formData:{
            username:'',
            password:'',
        },
        submitForm(){
            fetch('/login',{
                method:"post",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(this.formData)
            

            }).then((response)=>{
                // window.location.href ='/login'
                // console.log(response);
            })
        }
    }
}
