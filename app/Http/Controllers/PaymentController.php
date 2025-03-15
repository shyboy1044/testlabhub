<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use ErrorException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    /** Pay order via stripe */
    public function payByStripe(){
        Stripe::setApiKey('sk_test_51PFvfK07WuOE0XTDmHJAJ8eQor1qJUdTktvDXBXRYgJKDOr1zVevhq7HchOZYzvRzovi21UhPI2M1P97Kt56FfRh00Ex30M4zp');
        try {
            // retrieve JSON from POST body
            $jsonStr = file_get_contents('php://input');

            $jsonObj = json_decode($jsonStr);

            // Create a PaymentIntent with amount and currency
            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $this->calculateOrderAmount($jsonObj),
                'currency' => 'usd',
                'description' => 'React Store',
                'setup_future_usage' => 'on_session'
            ]);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];
            return response()->json($output);

        } catch (ErrorException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    /** Calculate order total for stripe */
    public function calculateOrderAmount(array $items): int {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        foreach($items as $item){
            return $item->amount * 100;
        }
    }
    public function payment_done(Request $request){
        $email=$request['email'];
        $user_id= DB::table('users')->where('email',$email)->first()->id;
        $payId=$request['payId'];
        $orders=json_decode($request['orders'],true);
        foreach($orders as $key=>$value){
            $data=array('user_id'=>$user_id,'item_id'=>$value['id'],'count'=>$value['quantity'],'payId'=>$payId);
            DB::table('cart')->insert($data);
        }
        print_r(json_encode(1));

    }
}