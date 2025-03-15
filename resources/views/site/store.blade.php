@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="{{ asset('css/store.css') }}">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .justify {
        text-align: justify;
    } .category_boxes p {
        text-align: center;
    }
	 .category_boxes {
        cursor: pointer;
    }
    .sticky{
        position: fixed;
        bottom: 15px;
        right: 35px;
        width: 60px;
        text-decoration: none !important;
        text-align: -webkit-right;
    }
    .sticky-icon{
        cursor: pointer;
        font-size: 48px;
        color: grey;
        opacity: 0.7;
        --fa-border-color:black;
    }
    [data-tooltip]:hover:after{
        content: attr(data-tooltip);
        position: absolute;
        top: -50px;
        right: -20px;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
    }
    .small-cart{
        font-size: 20px;
        padding-right: 20px;
        font-weight: 600;
        color: black;
        opacity: 0.7;
    }
    .cart-count{
        color: #121212;
        font-weight: 600;
        background-color: red;
        text-align: center;
        border-radius: 50px;
        width: 22px;
        margin-bottom: 28px;
        margin-right: 7px;
    }
    .cart-icon{
        color: black;
        z-index: -1;
    }
    .visibility-hidden{
        visibility: hidden;
    }
    .btn-width{
        width: 48px;
    }
</style>
@endsection
@section('content')
    <a id="cart" href="{{route('checkout')}}" class="sticky">
        <div id="numberOfOrders" class="cart-count"></div>
        <i class="fa fa-shopping-cart fa-rotate-360 sticky sticky-icon cart-icon"></i>
    </a>
    <section class="store">
        <div class="second_menu">
            @include('partials.sign_in_log_out')
        </div>
        <div class="phone_area">
            <!-- <ul class="mobile_menu">
                <li class="active2">
                    <a href="#">Mobile Phones</a>
                </li>
                <li>
                    <a href="#">Laptops</a>
                </li>
                <li>
                    <a href="#">Security</a>
                </li>
                <li>
                    <a href="#">Computer Networking</a>
                </li>
                <li>
                    <a href="#">Devices</a>
                </li>
                <li>
                    <a href="#">Office Electronics</a>
                </li>
            </ul>

            <ul class="phones_menu">
                <li class="active2">
                    <a href="#">Phones</a>
                </li>
                <li>
                    <a href="#">Cables</a>
                </li>
                <li>
                    <a href="#">Holders</a>
                </li>
                <li>
                    <a href="#">Accessories</a>
                </li>
            </ul> -->
            <div class="phons_brands">
                <!-- <div class="brands_area">
                    <ul class="brands">
                        <h2>BRANDS</h2>
                        <li>
                            <label class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">Apple</span>
                            </label>
                        </li>
                        <li>
                            <label  class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">Samsung</span>
                            </label>
                        </li>
                        <li>
                            <label  class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">Xiaomi</span>
                            </label>
                        </li>
                    </ul>
                    <ul class="brands">
                        <h2>PRICE</h2>
                        <li>
                            <label class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">Value</span>
                            </label>
                        </li>
                        <li>
                            <label  class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">Premium</span>
                            </label>
                        </li>
                    </ul>
                    <ul class="brands">
                        <h2>STANDARTS</h2>
                        <li>
                            <label class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">ISO</span>
                            </label>
                        </li>
                        <li>
                            <label  class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">FCC</span>
                            </label>
                        </li>
                    </ul>
                    <ul class="brands">
                        <h2>OTHER TAGS</h2>
                        <li>
                            <label class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">New</span>
                            </label>
                        </li>
                        <li>
                            <label  class="container_brands">
                                <input type="checkbox" name="termsChkbx" />
                                <span class="checkmarks">Deals</span>
                            </label>
                        </li>
                    </ul>
                </div> -->
                <div class="phne_brands">
                    @foreach ($items as $item)
                        <div class="phone_box">
                            <div class="phone_box_area">
                                <div class="phone_left">
                                    <img src="{{$item->photourl}}">
                                </div>
                                <div class="phone_right">

                                </div>
                            </div>
                            <div class="phone_footer">
                                <div class="footer_left">
                                    <p>{{$item->name}}</p>
                                    <p>${{$item->price}}</p>
                                    <!-- <div class="stars">
                                        <img src="images/Starfree1.svg">
                                        <img src="images/Starfree1.svg">
                                        <img src="images/Starfree1.svg">
                                        <img src="images/Starfree.svg">
                                        <img src="images/Starfree.svg">
                                    </div> -->
                                </div>
                                <div class="footer_right">
                                    <button type="button" class="btn btn-outline-danger btn-width add-to-cart" data-item="{{ json_encode($item) }}">
                                        <i class="fa fa-cart-plus small-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                
            </div>
        </div>
        <div>
            {{ $items->links() }}
        </div>
        <input type="hidden" value="{{(auth()->user()!==null)?auth()->user()->id:''}}" class="hidden" id="hidden_id"/>
    </section>
@endsection
@section('js')
<script>
    $(document).ready(function(){

        var user = $('#hidden_id')[0].value;
        if(user=="") $('#cart').addClass('visibility-hidden');
        if(user!=""){
            $.ajax({
                url: '/get_cart',
                method: 'POST',
                data: {user_id:user},
                success: function(response){
                    $('#numberOfOrders')[0].innerHTML=response;
                },
                error: function(xhr, status, error){
                    console.error('Error adding item to cart:', error);
                }
            });
        }

        $('.add-to-cart').click(function(){
            var user = $('#hidden_id')[0].value;
            if(user=="") window.location.href = "/login-user";
            else{
                var itemData = $(this).data('item');
                itemData.user_id = user;
                $.post('/cart',itemData,function(response){
                    if(response.status==200)
                        $('#numberOfOrders')[0].innerHTML=response.data;
                    else {
                        
                    }
                },'json')
            }

        });
    });
</script>
@endsection