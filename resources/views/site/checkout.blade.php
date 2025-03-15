<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

@extends('layouts.app')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  .number-btn{
    padding: 0;
    border: none;
    background: none;
    width: 15px;
  }
  .number-btn::focus-visible{
     outline: -webkit-focus-ring-color auto 0px;;
  }
</style>
@php
$amount_payment=0;
@endphp
@section('content')
<section class="h-100 h-custom" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">

            <div class="row">

              <div class="col-lg-7">
                <h5 class="mb-3"><a href="{{ route('store') }}" class="text-body"><i
                      class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                <hr>
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <div style="width: 257px;" class="ms-3">
                      <h5 class="pl-4">Name</h5>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <div style="width: 94px;" class="d-flex">
                        <h5>Amount</h5>
                    </div>
                    <div style="width: 118px;">
                      <h5>Unit Price</h5>
                    </div>
                    <div style="width: 200px;">
                      <h5>Total Price</h5>
                    </div>
                  </div>
                </div>
                @foreach($items as $item)
                  <div class="card mb-3" id="card_{{$item->id}}">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                          <div>
                            <!-- <img
                              src="{{ $item->photourl }}"
                              class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;"> -->
                          </div>
                          <div style="width: 257px;" class="ms-3">
                            <h5>{{ $item->name }}</h5>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                          <div style="width: 100px;" class="d-flex">
                            <h5 id="count_{{$item->id}}" class="fw-normal mb-0">
                              {{ $item->count }}
                            </h5>
                            <div class="position-relative">
                              <button type="button" class="number-btn position-absolute increase" onclick="onIncrease({{ $item->id }})">
                                <i class="fa fa-sort-asc"></i>
                              </button>
                              <button type="button" class="number-btn position-absolute mt-2 decrease" onclick="onDecrease({{ $item->id }})">
                                <i class="fa fa-sort-desc"></i>  
                              </button>
                            </div>
                          </div>
                          <div style="width: 115px;">
                            <h5 class="mb-0" id="unitprice_{{$item->id}}" >${{ $item->price }}</h5>
                          </div>
                          <div style="width: 79px;">
                            <h5 class="mb-0 totalprice" id="totalprice_{{$item->id}}" >${{ ($item->price)*($item->count) }}</h5>
                            @php
                                $amount_payment+=$item->price*$item->count;
                            @endphp
                          </div>
                          <a type="button" onclick="onDelete({{ $item->id }})" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" value="{{$item->price}}" class="hidden" id="price_{{$item->id}}"/>
                @endforeach

              </div>
              <div class="col-lg-5">
                <div class="panel panel-default credit-card-box">
                    <div class="panel-heading display-table" >
                            <h3 class="panel-title" >Payment Details</h3>
                    </div>
                    <div class="panel-body">
        
                        @if (Session::has('success'))
                            <div class="alert alert-success text-center">
                                <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                                <p>{{ Session::get('success') }}</p>
                            </div>
                        @endif
                        <div style="color: red">
                            Payment gateway should be integrated after vue FE revamp.Below is fake
                        </div>
                        <form 
                                role="form" 
                                action="{{ route('stripe.post') }}" 
                                method="post" 
                                class="require-validation"
                                data-cc-on-file="false"
                                data-stripe-publishable-key="{{ env('STRIPE_KEY') }}"
                                id="payment-form">
                            @csrf
        
                            <div class='form-row row'>
                                <div class='col-sm-12 form-group required'>
                                    <label class='control-label'>Name on Card</label> <input
                                        class='form-control' size='4' type='text'>
                                </div>
                            </div>
        
                            <div class='form-row row'>
                                <div class='col-sm-12 form-group card required'>
                                    <label class='control-label'>Card Number</label> <input
                                        autocomplete='off' class='form-control card-number' size='20'
                                        type='text'>
                                </div>
                            </div>
                            <input type="hidden" value="{{$amount_payment}}" id="amount_payment" name="amount_payment" >
                            <div class='form-row row'>
                                <div class='col-xs-12 col-md-4 form-group cvc required'>
                                    <label class='control-label'>CVC</label> <input autocomplete='off'
                                        class='form-control card-cvc' placeholder='ex. 311' size='4'
                                        type='text'>
                                </div>
                                <div class='col-xs-12 col-md-4 form-group expiration required'>
                                    <label class='control-label'>Expiration Month</label> <input
                                        class='form-control card-expiry-month' placeholder='MM' size='2'
                                        type='text'>
                                </div>
                                <div class='col-xs-12 col-md-4 form-group expiration required'>
                                    <label class='control-label'>Expiration Year</label> <input
                                        class='form-control card-expiry-year' placeholder='YYYY' size='4'
                                        type='text'>
                                </div>
                            </div>
        
                            <div class='form-row row'>
                                <div class='col-md-12 error form-group hidden'>
                                    <div class='alert-danger alert'>Please correct the errors and try
                                        again.</div>
                                </div>
                            </div>
        
                            <div class="row">
                                <div class="col-xs-12">
                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Pay Now (<span id="amount_string">${{$amount_payment}}</span>)</button>
                                </div>
                            </div>
                                
                        </form>
                    </div>
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
@endsection
@section('js')
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<script>
    var $form = $(".require-validation");
     
    $('form.require-validation').bind('submit', function(e) {
        var $form = $(".require-validation"),
        inputSelector = ['input[type=email]', 'input[type=password]',
                         'input[type=text]', 'input[type=file]',
                         'textarea'].join(', '),
        $inputs = $form.find('.required').find(inputSelector),
        $errorMessage = $form.find('div.error'),
        valid = true;
        $errorMessage.addClass('hide');
    
        $('.has-error').removeClass('has-error');
        $inputs.each(function(i, el) {
          var $input = $(el);
          if ($input.val() === '') {
            $input.parent().addClass('has-error');
            $errorMessage.removeClass('hide');
            e.preventDefault();
          }
        });
     
        if (!$form.data('cc-on-file')) {
          e.preventDefault();
          Stripe.setPublishableKey($form.data('stripe-publishable-key'));
          Stripe.createToken({
            number: $('.card-number').val(),
            cvc: $('.card-cvc').val(),
            exp_month: $('.card-expiry-month').val(),
            exp_year: $('.card-expiry-year').val()
          }, stripeResponseHandler);
        }
    
    });
    function stripeResponseHandler(status, response) {
    if (response.error) {
        $('.error')
            .removeClass('hide')
            .find('.alert')
            .text(response.error.message);
    } else {
        /* token contains id, last4, and card type */
        var token = response['id'];
              
        $form.find('input[type=text]').empty();
        $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
        $form.get(0).submit();
    }
}
function updateSubtotal() { 
    var subtotal = 0;
    $('.totalprice').each(function() {
        subtotal += parseFloat($(this).text().replace('$', ''));
    });
    $('#subtotal').text('$' + subtotal);
    $('#subtotalBtn').text('$' + subtotal);
    var total = 0;

    for(c in $('.totalprice')){
      // console.log($('.totalprice')[c].innerHTML.toString().replace('$',''));return;
      if(!$('.totalprice')[c].innerHTML) break;
      total=total+Number($('.totalprice')[c].innerHTML.toString().replace('$',''));
    }
    // var total=total+ $('.totalprice').map((each)=>Number(each.innerHTML.replace('$','')));
    console.log(total)
    $('#amount_payment')[0].value= total;
    $('#amount_string')[0].innerHTML = '$'+total;

}

function onIncrease(item_id){

  var count = $('#count_'+item_id)[0].innerText;
  $.ajax({
    url:'/add',
    method:'POST',
    data:{
      count: count,
      item_id: item_id
    },
    success: function(response){
      count++;
      $('#count_'+item_id)[0].innerHTML=count;
      var price = parseFloat($('#price_'+item_id)[0].value);
      var totalprice = price*count;
      $('#totalprice_'+item_id)[0].innerText='$'+ totalprice;
      updateSubtotal();
    },
    error: function(xhr, status, error) {
      console.error('Error item count:', error);
    }
  });
}

function onDecrease(item_id){
  var count = $('#count_'+item_id)[0].innerText;
  $.ajax({
    url:'/minus',
    method:'POST',
    data:{
      count: count,
      item_id: item_id
    },
    success: function(response){
      count--;
      if(count < 0)
      {
        onDelete(item_id);
      }else{
        $('#count_'+item_id)[0].innerHTML=count;
        var price = parseFloat($('#price_'+item_id)[0].value);
        var totalprice = price*count;
        $('#totalprice_'+item_id)[0].innerText='$'+ totalprice;
        updateSubtotal();
      }
    },
    error: function(xhr, status, error) {
      console.error('Error item count:', error);
    }
  });
}

function onDelete(item_id){
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this item!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      // If user confirms deletion
      $.ajax({
        url:'/delete',
        method:'POST',
        data:{
          item_id: item_id
        },
        success: function(response){
          console.log(response);
          $('#card_'+item_id).addClass('d-none');
          updateSubtotal();
          swal("Poof! Your item has been deleted!", {
            icon: "success",
          });
        },
        error: function(xhr, status, error) {
          console.error('Error item count:', error);
          swal("Oops! Something went wrong!", {
            icon: "error",
          });
        }
      });
    } else {
      // If user cancels deletion
      swal("Your item is safe!");
    }
  });
}

$(document).ready(function() {
    // updateSubtotal();
});
 
</script>
@endsection