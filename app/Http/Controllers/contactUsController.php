<?php

namespace App\Http\Controllers;

use App\Models\ConatctUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class contactUsController extends Controller
{
    public function index(Request $request)
    {

        $conatctUs = new ConatctUs();
        $conatctUs->first_name = $request->first_name;
        $conatctUs->last_name = $request->last_name;
        $conatctUs->email = $request->email;
        $conatctUs->phone = $request->phone;
        $conatctUs->company_name = $request->company_name;
        $conatctUs->comment = $request->comment;
        $conatctUs->save();
        print_r(json_encode("1"));
    }
}