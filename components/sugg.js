data.map(function (element) {
    var div = document.createElement("div")
    var div1 = document.createElement("div");
    div1.setAttribute("class", "card");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div1.append(img);
    var p1 = document.createElement("p");
    p1.innerText = element.episode;
    p1.setAttribute("id","p1tag")
    var p2 = document.createElement("p")
    p2.innerText = element.title;
    p2.setAttribute("id", "p2tag")
    var p3 = document.createElement("p")
    p3.innerText = element.description;
    p3.setAttribute("id", "p3tag")
    var p4 = document.createElement("p")
    p4.innerText = element.time;
    p4.setAttribute("id", "p4tag")
    var tv = document.createElement("i");
    tv.innerHTML = element.tv;
    tv.setAttribute("class", "icon")
    var cc = document.createElement("i");
    cc.innerHTML = element.cc;
    cc.setAttribute("class", "icon")
    var ad = document.createElement("i");
    ad.innerHTML = element.Ad;
    ad.setAttribute("class", "icon")
    var sd = document.createElement("i");
    sd.innerHTML = element.Sd;
    sd.setAttribute("class", "icon")
  
    div.append(div1, p1, p2,p3,p4,tv,cc,ad,sd)
   
    document.querySelector("#container1 .glider").append(div);
  });
  
  new Glider(document.querySelector("#container1 .glider"), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    arrows: {
      prev: "#container1 .glider-prev",
      next: "#container1 .glider-next",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 380,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
  