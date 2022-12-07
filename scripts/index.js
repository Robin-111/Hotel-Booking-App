const base_url = `https://masai-api.herokuapp.com/hotels/search?city=`;
let data = [];
let getData = async (query) => {
  let res = await fetch(`${base_url}${query}`);
  data = await res.json();
  return data.hotels;
};

let search = async () => {
  let query = document.getElementById("query").value;
  data = await getData(query);
  render(data);
};

let enter = (e) => {
  if (e.key === "Enter") {
    search();
  }
};

let render = (data) => {
  //   console.log(data);

  let cont = document.getElementById("hotels_list");
  cont.innerHTML = null;
  data.forEach((el) => {
    let = { Ac, Images, Price, Rating, Rooms, Title } = el;
    let div = document.createElement("div");
    div.setAttribute("id", "hotel");
    let h3 = document.createElement("h3");
    h3.innerText = Title;
    let img = document.createElement("img");
    img.src = Images.one;
    let p1 = document.createElement("p");
    p1.innerText = `Ac :${Ac}`;
    let p2 = document.createElement("p");
    p2.innerText = `Price :${Price}`;
    let p3 = document.createElement("p");
    p3.innerText = `Rating :${Rating}`;
    let p4 = document.createElement("p");
    p4.innerText = `Rooms :${Rooms}`;
    let book_btn = document.createElement("button");
    book_btn.setAttribute("class", "book");
    book_btn.innerText = "Book Now";
    book_btn.onclick = () => {
      book(el);
    };

    div.append(img, h3, p1, p2, p3, p4, book_btn);
    cont.append(div);
  });
};

let filter_ac = () => {
  let newData = data.filter((el) => {
    return el.Ac === true;
  });
  render(newData);
};

let filter_nac = () => {
  let newData = data.filter((el) => {
    return el.Ac === false;
  });
  render(newData);
};

let sorting_lh = () => {
  data = data.sort((a, b) => {
    return a.Price - b.Price;
  });
  render(data);
};

let sorting_hl = () => {
  data = data.sort((a, b) => {
    return b.Price - a.Price;
  });
  render(data);
};

let book = (el) => {
  console.log(el);
  let login = JSON.parse(localStorage.getItem("login"));
  if (!login) {
    alert("Log in to continue!");
  } else {
    localStorage.setItem("hotel", JSON.stringify(el));
    window.location.href = "./checkout.html";
  }
};
