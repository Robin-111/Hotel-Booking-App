let signup = () => {
  let data = JSON.parse(localStorage.getItem("users")) || [];
 console.log(data);
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  // console.log(user);
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
   
    if (data[i].email === user.email) {
      alert("User Already Exists!");
      return;
    }
  }
  data.push(user);
  localStorage.setItem("users", JSON.stringify(data));
  alert("SingnUp Up Successfull!");
};
