<!-- commit by jhonkings -->
@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="{{ asset('css/lab-reservation.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lightpick.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lightpick_style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/contract.css') }}">
@endsection
@section('content')
    <div class="second_menu">
        <!-- <ul class="pageLocation"></ul> -->
        <ul class="pageLocation"></ul>
        @include('partials.sign_in_log_out')
    </div>
    <div style="background-color: #700203; border: 0px solid white; width: 100%;">
        <div class="container">
            <div class="bg-image d-flex justify-content-center align-items-center">
                <img src="https://lh3.googleusercontent.com/UVuj6-8yG1CVJlRLNFLkXZDSkUX4oJr_XnueT-DQgFrkTyGbvIgl3gNA3WD4qWQcGy_cd0Dfrj07ig_ZnbED5UH5vk0rtkPRoM6eChvl5L6RYv5TEZZ3Z7vT3QWF57ABzQ=w302" style="width: 57.5%;" alt="">
            </div>
            <div class="row d-flex justify-content-center visible">
                <input type="hidden" id="hidden_email" value="{{Auth::user()->email}}">
                <input type="hidden" id="hidden_lab_id" value="{{$lab->id}}">
                <div class="main-container">
                    <!-- <div> -->
                        <div class="line-top mt-4"></div>
                        <div class="col text-center title bg-white pl-4 pb-2">GENERAL CONTRACT FOR SERVICES</div>
                        <div class="bg-white pl-4 pr-4">
                            This Contract for Services is made effective as of February 4, 2013, by and 
                            between <b>{{$lab->firm_name}}</b>, and Telcron LLC of P.O. Box 1398,Montclair, New Jersey 
                            07042 (NJ Registration id: 0600386534).
                        </div>
                        <div class="u-line"></div>
                        <div class="bg-white pl-4 pr-4 pt-2 pb-2">
                            <span><b>{{Auth::user()->email}}</b></span>
                        </div>
                        <div class="u-line"></div>
                        <div class="bg-white radius-bottom">
                            {{-- <div class="text-danger pt-2 pb-2 pl-4">* Indicates required question</div> --}}
                        </div>
                    <!-- </div> -->
                    <form class="needs-validation" novalidate>
                        <div class="service mt-4">
                            Service Recipient:
                        </div>
                        <div class="service-revert">
                            <b id="selected_lab">{{$lab->firm_name}}</b>
                        </div>
                        <div class="sign radius-top radius-bottom pt-4 mt-4 d-block">
                            <label for="validationsign" class="">Please sign name here.*</label>
                            <input type="text" class=" form-control input-sign" id="validationsign" required>
                            <div class="invalid-feedback">
                                Please provide a sign name.
                            </div>
                        </div>
                        <div class="sign radius-top radius-bottom pt-4 mt-4 d-block">
                            <label for="validationdate" class="">Please select date here.*</label>
                            <p class="date">Date</p>
                            <input type="date" class=" form-control input-date w-25" id="validationdate" placeholder="mm/dd/yyyy" required>
                            <div class="invalid-feedback">
                                Please provide a valid date.
                            </div>
                        </div>
                        <div class="btn-group mt-2">
                            <div class="group">
                                <div>
                                    <a href="{{route('contract')}}">
                                        <button type="button" class="next-btn">Back</button>
                                    </a>
                                    <input type="button" value="Submit" class="submit-btn" id="submit_btn">
                                </div>
                                <button type="button" class="btn-clear" onclick="clearForm()">Clear form</button>
                            </div>
                        </div>
                    </form>
                        <div class="btn-group">
                            <div class="sub-letter text-center text-center">
                                <a href="">Report Abuse</a>-
                                <a href="https://www.telcron.net/terms/">Terms of Service</a>-
                                <a href="https://www.telcron.net/terms/">Privacy Policy</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')
<script>

    $(document).on('click','#submit_btn',function(){
        var form = document.querySelectorAll('.needs-validation')[0];
        if (!form.checkValidity()) {
            alert("Input Data!!!");
            return;
        }
        $.post('/contract_send',
        {
            user_email:$('#hidden_email')[0].value,
            user_name:$('#validationsign')[0].value,
            date:$('#validationdate')[0].value,
            lab_id:$('#hidden_lab_id')[0].value
        },
        function(data){
            console.log(data);
            alert("Successfuly submitted!");
            // window.location.href="/lab-rating-directory";
        },'json');

    })
    function clearForm(){
        $('#validationsign').val("");
        $('#validationdate').val("");
    }
    
</script>
@endsection

