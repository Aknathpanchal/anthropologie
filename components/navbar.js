
const navbar = () => {

   return `
   <!-- signin and signup -->
   <div class="signIn-signUp">
     <span>
       <i class="fas fa-globe"></i>&nbsp;&nbsp;English ($)&nbsp;<i class="fas fa-chevron-down"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span>
     <a href="signin.html" id="show-login"><span class="login">
       <i class="far fa-user"></i>
        Sign In / Sign Up
       </span></a>
      
   </div>

   <!-- NAVIGATION-BAR -->
   <nav>
   <div>
     <div class="wrapper">
       <div class="logo">
       <a href="index.html">
       <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" alt=""></a>

       <div class="logo">
       <a href="home.html">
       <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" alt=""></a>





       <div id="S">
       <input type="text" id="search" placeholder="Search">
       <button id="search-icon-legacy" onclick="searchVideos()" class="style-scope ytd-searchbox" aria-label="Search">
           <yt-icon class="style-scope ytd-searchbox"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                   focusable="false" class="style-scope yt-icon"
                   style="pointer-events: none; display: block; width: 100%; height: 100%;">
                   <g class="style-scope yt-icon">
                       <path
                           d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                           class="style-scope yt-icon"></path>
                   </g>
               </svg>
               <!--css-build:shady-->
           </yt-icon>
           <tp-yt-paper-tooltip prefix="" class="style-scope ytd-searchbox" role="tooltip" tabindex="-1"
               style="left: 932.672px; top: 62px;">
               <!--css-build:shady-->
               <div id="tooltip" class="style-scope tp-yt-paper-tooltip hidden">
               </div>
           </tp-yt-paper-tooltip>
       </button>

   </div>

</div>



       


       </div>
       <ul class="nav-links">
         <li><a href="#">Gifts and Candles</a></li>
         <li><a href="#">New!</a></li>
         <li><a href="#">Dresses</a></li>
         <li><a href="#">Clothing</a></li>
         <li><a href="#">Shoes</a></li>
         <li><a href="#">Accessories</a></li>
         <li><a href="#">Home & Furniture</a></li>
         <li><a href="#">Beauty & Wellness</a></li>
         <li><a href="#">Garden & Outdoor</a></li>
         <li><a href="#">Wedding</a></li>
         <li><a href="#">Sale</a></li>
       </ul>
     </div>
   </nav>
`
};

export default navbar;