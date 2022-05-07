
const navbar = () => {

   return `
   <div class="signIn-signUp">
   <span>
     <i class="fas fa-globe"></i>&nbsp;&nbsp;English ($)&nbsp;<i class="fas fa-chevron-down"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   </span>
   <a href="signin.html" id="show-login"><span class="login">
     <i class="far fa-user"></i>
      Sign In / Sign Up
     </span></a>
    
 </div>


<!-- <div id="OfferNav">Sale!  Get additional $50 OFF on minimum purchase of $800 "50ANTHRO"</div> -->
<div id="AnthroNav_Bar">
   <div id="NavDiv_a">
       <div id="SiteName" onclick="window.location.href='Home Page.html'">
           <a>
               <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" alt="">
               </a>
       </div>

       <div id="SiteName2" onclick="window.location.href='Home Page.html'">
           <a>
               <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" alt="">
               </a>
         
       </div>

     
     

       <div id="SearchBar">
       <div id="S">
       <input type="text" id="searchText" placeholder="Search">



   </div>   
       </div>
       
       <div id="Cart" onclick="window.location.href='CartPage.html'">
           <ion-icon id="iconNav" name="bag-outline"></ion-icon>
       </div>
   </div>
   <div id="NavDiv_b">
       <div id="TagsNav"  style="margin-left: 3%" onclick="window.location.href='Dresses.html'">Dresses</div>
       <div id="TagsNav" onclick="window.location.href='ClothingPage.html'">Clothing</div>
       <div id="TagsNav" onclick="window.location.href='ShoesPage.html'">Shoes</div>
       <div id="TagsNav" onclick="window.location.href='AccessoriesPage.html'">Accessories</div>
       <div id="TagsNav1" onclick="window.location.href='HomeFurn.html'">Home & Furniture</div>
       <div id="TagsNav1" onclick="window.location.href='Beauty_Well.html'">Beauty & Wellness</div>
       <div id="TagsNav" onclick="window.location.href='Weddings.html'">Weddings</div>
       <div id="TagsNav1" onclick="window.location.href='Gifts_Candle.html'">Gifts & Candles</div>
       
   </div>            
</div>
<br>
`
};

export default navbar;

