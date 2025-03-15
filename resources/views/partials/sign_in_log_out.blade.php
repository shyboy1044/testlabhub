<ul></ul>
<div class="business_signup">
    @if(\Illuminate\Support\Facades\Auth::user())
        <div class="sign_up_bg">
            <p>{{\Illuminate\Support\Facades\Auth::user()->name}}</p>
            <a class="sign_out_a" id="logout_btn" href="{{route('logout')}}">
                <i class="fas fa-sign-out-alt"></i>
            </a>
        </div>
    @else
        <div class="sign_up_bg">
            <a class="sign_up_a" href="{{route('userLogin')}}">SIGN UP</a>
        </div>
    @endif
</div>
<script src="libs/js/jquery-3.3.1.min.js"></script>
<script>
var fb_connected="disconnected";
$(document).on('click','#logout_btn',function(e){
    e.preventDefault();
    if(fb_connected=="connected"){
        FB.logout(function(response) {
            // user is now logged out
            window.location.href="/logout";

        });
    }
    else{
        window.location.href="/logout";

    }

})
window.fbAsyncInit = function() {
  FB.init({
    appId : '432736705920119',
    cookie : true, // enable cookies to allow the server to access the session
    xfbml : true, // parse social plugins on this page
    version : 'v2.1' // use version 2.1
  });
  FB.getLoginStatus(function(response) {
    fb_connected = response.status;
    console.log(fb_connected);
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>