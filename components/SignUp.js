const SignUp = () => {

    return `    <div id="RegBox">
    <div id="SignUpBox">
        <p style="font-weight: bold">SIGN UP | Become a Member</p>
        <br>
        <br>
        <form action="" id="form">
            <!-- <label for="">UserName</label> -->
            <input id="usernm" type="username" placeholder="Please Enter your Name*" />
            <br>
            <!-- <label for="">Email</label> -->
            <input id="email" type="email" placeholder="Please Enter your E-Mail ID*" />
            <br>
            <!-- <label for="">Mobile No</label> -->
            <input id="mobile" type="text" maxlength="10" placeholder="Please Enter your 10 digit Mobile Number*" />
            <br>
            <!-- <label for="">Password</label>  -->
            <input id="password" type="password" placeholder="Please Set a Password*" />
            <br>
    
            <button id="SignUpBut" type="submit">SIGN UP</button>
          </form>
    </div>
    <div id="BoxContainLog">
        <div id="LogIn">
            <p style="font-weight: bold">SIGN IN | Already a Member</p>
            <button id="SignUpBut" type="submit" onclick="window.location.href='signIn.html'">SIGN IN</button>
        </div>
        <div id="ShoppingBox">
            <div id="ShowcaseImg">
                <img style="width:150px; height:200px" src="https://images.urbndata.com/is/image/Anthropologie/58377391_020_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="SCaseox01"/>
            </div>
            <div id="ShowcaseImg">
                <img style="width:150px; height:200px" src="https://images.urbndata.com/is/image/Anthropologie/65153462_021_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="SCaseox02"/>
            </div>
            <div id="ShowcaseImg">
                <img style="width:150px; height:200px" src="https://images.urbndata.com/is/image/Anthropologie/54775101_047_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="SCaseox03"/>
            </div>
            <div id="ShowcaseImg">
                <img style="width:150px; height:200px" src="https://images.urbndata.com/is/image/Anthropologie/58395385_083_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720" alt="SCaseox04"/>
            </div>
        </div>
        <div id="TxtLog" onclick="window.location.href='Home Page.html'">Enjoy your shopping experience at Anthropologies</div>
    </div>       
</div>
<br>
<br>  `
    };
    
    export default SignUp;