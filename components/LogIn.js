const login = () => {

    return `    <div id="RegBox">
    <div id="SignInBox">
        <p style="font-weight: bold">SIGN IN | Already have an account</p>
        <br>
        <br>
        <form action="" id="form">
            <!-- <label for="">Email</label> -->
            <input id="email" type="email" placeholder="Please Enter your E-Mail ID*" />
            <br>
            <!-- <label for="">Password</label>  -->
            <input id="password" type="password" placeholder="Enter Password*" />
            <br>
            <button id="SignUpBut" type="submit">SIGN IN</button>
          </form>
    </div>
    <div id="BoxContainLog">
        <div id="LogIn">
            <p style="font-weight: bold">Become a MEMBER</p>
            <button id="SignUpBut" type="submit" onclick="window.location.href='SignUp_Page.html'">SIGN UP</button>
        </div>
    </div>
    <div>
        <img style="width:100%; margin:auto" src="https://images.ctfassets.net/5de70he6op10/27h0MBamnyoAWmOCSoIKsU/3b200dbee3b60983dd3e611f840dde29/Rate-and-Review_100GC_footer.jpg" alt="addSigInPg01"/>
    </div>     
</div>
<br>
<br>`
    };
    
    export default login;