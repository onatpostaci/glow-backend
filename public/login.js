//the input part of email
const email = document.getElementById('mail');

//the input part of password
const password = document.getElementById('password');

//the button that will fetch the data
const loginButton = document.getElementById('login-button');

var userObject = null;

loginButton.addEventListener('click', async ()=>{
    console.log("Email: " + email.value + " -- Password: " + password.value);
    try{
        const res = await axios.post('/users/login', {
            email: email.value,
            password: password.value
        });
        console.log(res);
        if(res.data.length > 0){
            console.log("Inside of if")
            sessionStorage.setItem('status','loggedIn');
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            window.location.replace("index.html");
        }
        else{
            alert("Email or Password is wrong!");
        }
    }catch(error){
        console.error(error)
    }
});