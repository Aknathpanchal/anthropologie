var suggdata=[
  {
      image:"https://images.urbndata.com/is/image/Anthropologie/67561290_014_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080",
      title: "Oversized Floppy Straw Hat",
      price: "$138.00"
    },

    {
      image:"https://images.urbndata.com/is/image/Anthropologie/67204867_901_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",   
      title:"Gleaming Monogram Necklace",
      price: "$70.00"
    },

    {
      image:"https://images.urbndata.com/is/image/Anthropologie/4130916210066_011_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
      title:"Deep-V Floral Mini Dress",
      price: "$230.00"
    },
    {
      image:"https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      title:"Maeve The Colette Cropped Wide-Leg Pants ",
      price: "$120.00"
    },


    {
      image:"https://images.urbndata.com/is/image/Anthropologie/50543008_007_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      title:"  Pearlescent Serpentine Knobs, Set of 2",
      price: "$32.00"
    },


    {
    
      image:"https://images.urbndata.com/is/image/Anthropologie/67561290_014_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      title: "Oversized Floppy Straw Hat",
      price: "$138.00"
    },

    {
     
      image:"https://images.urbndata.com/is/image/Anthropologie/67204867_901_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      title:"Gleaming Monogram Necklace",
      price: "$70.00"
    },

    {
      image:"https://images.urbndata.com/is/image/Anthropologie/4130916210066_011_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      title:"Deep-V Floral Mini Dress",
      price: "$230.00"
    },
    {
      image:"https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      title:"Maeve The Colette Cropped Wide-Leg Pants ",
      price: "$120.00"
    },


    {
      image:"https://images.urbndata.com/is/image/Anthropologie/50543008_007_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      title:"  Pearlescent Serpentine Knobs, Set of 2",
      price: "$32.00"
    },


  ]


 suggdata.map(function (elem) {

      
          var div1  = document.createElement('div');
          div1.setAttribute("class","wrapper")

          var figure =document.createElement("figure")
          var figcaption=document.createElement("figcaption")
          
          //Product Display
          var imagediv  = document.createElement('div');
          imagediv.setAttribute("class","hover-animation")
          var img = document.createElement('img');
          img.setAttribute('src',elem.image);
          img.setAttribute('class','img-back')

         
          imagediv.append(img);
      
          //Product Details
      
          var namehead = document.createElement('h2');
          namehead.textContent = elem.title;
          
          var rate  = document.createElement('p');
          rate.textContent = elem.price;

      
          
          var button = document.createElement('button');
          button.setAttribute('id','btn');
          button.textContent = "Quick Pick";
          button.addEventListener("click", function(){
              addCart(elem);
          });
          

          figcaption.append(namehead,rate,button)

          figure.append(imagediv,figcaption)
          
          div1.append(figure); 
          
      
  
     
      document.querySelector("#container1 .glider").append(div1);
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
    