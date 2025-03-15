<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendEmailController extends Controller
{
    public function send(Request $request)
    {
        $data = $this->validate($request, [
            'name'      =>  'required',
            'email'     =>  'required',
            'message'   =>  'required'
        ]);

        Mail::to('info@testlabhub.com')->send(new SendMail($data));

        print_r(json_encode("1"));
    }
}