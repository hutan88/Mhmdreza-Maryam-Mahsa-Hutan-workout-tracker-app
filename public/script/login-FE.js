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
                window.location.href ='/main'
                console.log(response);
                response.json().then(r=>{
                    let id =  r.id;
                    console.log(id)
                    localStorage.setItem('id',id)
                    console.log('check id')
                 })
            })
        }
    }
}
