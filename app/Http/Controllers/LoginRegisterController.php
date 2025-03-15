<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
class LoginRegisterController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function indexBusiness()
    {
        return view('loginBusiness');
    }
    public function login(Request $request)
    {

        if ($request['type'] == User::TYPES['user']) {
            if (Auth::attempt([
                'type'      => User::TYPES['user'],
                'email'     => $request['email'],
                'password'  => $request['password'],
            ]))
            {
                $existingUser = User::where('email', $request['email'])->first();

                $ret = array('message'=>$existingUser,"status"=>"success");
                print_r(json_encode($ret));
            }else{
                $ret = array('message'=>"Email or password do not match.","status"=>"wrong");
                print_r(json_encode($ret));
            }

        }
        else if ($request['type'] == User::TYPES['business'])  {
            if (Auth::attempt([
                'type'      => User::TYPES['business'],
                'email'     => $request['email'],
                'password'  => $request['password'],
            ]))
            {
                $existingUser = User::where('email', $request['email'])->first();

                $ret = array('message'=>$existingUser,"status"=>"success");
                print_r(json_encode($ret));
            }
            else {
                $ret = array('message'=>"Email or password do not match.","status"=>"wrong");
                print_r(json_encode($ret));
            }

        }


    }

    public function register(Request $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make($data['password']);
        $existingUser = User::where('email', $data['email'])->first();

        if ($existingUser) {
            print_r(json_encode(array('status'=>'wrong')));
        }
        else{
            if($data['type'] == User::TYPES['business']) {
                $user = User::create([
                    'name'      => $data['company_name'],
                    'email'     => $data['email'],
                    'password'  => $data['password'],
                    'type'      => User::TYPES['business'],
                ]);


                Business::create([
                    'user_id'       => $user->id,
                    'company_name'  => $data['company_name'],
                    'role'          => $data['role'],
                ]);

                print_r(json_encode(array('status'=>'success','email'=>$user->email)));
            }
            else {
                $user = User::create($data);
                print_r(json_encode(array('status'=>'success','email'=>$user->email)));

            }
        }


    }
    public function reset(Request $request)
    {

        $data= $request->all();

        $data['password'] = Hash::make($data['password']);

        if($data['type'] == User::TYPES['business']) {

            $user = User::where('email', $data['email'])
                ->where('type', $data['type'])
                ->update(['password' => $data['password']]);
            return view('loginBusiness')->with('email', $data['email']);
        }
        else {

            $user = User::where('email', $data['email'])
                ->where('type', $data['type'])
                ->update(['password' => $data['password']]);

            return view('login')->with('email', $data['email']);
        }

    }
    public function logout(Request $request) {
        auth()->logout();
        print_r(json_encode(array('status'=>'success')));
    }

    public function store(Request $request)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}