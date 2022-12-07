let login = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let data = JSON.parse(localStorage.getItem("users")) || [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email) {
      if (data[i].password === password) {
        localStorage.setItem("login", JSON.stringify(true));
        alert("Login Successfull!");
        return;
      } else {
        console.log(data[i].password);
        console.log(password);
        alert("Wrong Credentials!");
        return;
      }
    }
  }
  alert("User doesn't exist ,Sign Up");
};
