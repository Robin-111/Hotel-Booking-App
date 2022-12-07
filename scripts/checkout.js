let render = () => {
  let data = JSON.parse(localStorage.getItem("hotel"));

  let cont = document.getElementById("hotel_details");

  let img1 = document.createElement("img");
  img1.src = data.Images.one;

  let img2 = document.createElement("img");
  img2.src = data.Images.two;

  let h1 = document.createElement("h1");
  h1.innerText = data.Title;

  let p = document.createElement("p");
  p.innerText = `Amount :${data.Price}`;

  let div = document.createElement("div");
  div.setAttribute("class", "images");
  div.append(img1, img2);

  cont.append(div, h1, p);
};

render();

let book = () => {
  let name = document.getElementById("user_name").value;
  setTimeout(() => {
    alert(`${name} Your booking is successfull!`);
  }, 3000);
};
