<?php

namespace App\Http\Controllers;

use App\Models\submitListing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
class labRatingController extends Controller
{
    public function __construct(){
    }
    public function index()
    {
        $countries = DB::table('Results')->distinct()->get(['country']);

		foreach ($countries as $key=>$country) {
            $cities = DB::table('Results')->where('country',$country->country)->distinct()->get(['city']);
            $countries[$key]->cities=$cities;
        }
        return response()->json($countries);
    }
    public function get_countries(Request $request){
        $countries = DB::table('Results')->distinct()->get(['country']);

        return response()->json($countries);
    }
    public function get_labs_country(Request $request){
        $data=$request->all();
        $country=$data['country'];
        $labs=DB::table('Results')->select('id','city','country','firm_name','price')->where(array('country'=>$country))->get();
        return response()->json($labs);
    }
    public function get_service_preference(Request $request){
        $services=DB::table('service_preferences')->select('id','name')->get();
        return response()->json($services);

    }
    public function get_product_description(Request $request){
        $descriptions=DB::table('product_descriptions')->select('id','name')->get();
        return response()->json($descriptions);
    }
    public function get_city_labs(Request $request){
        $data=$request->all();
        $country=$data['country'];
        $city=$data['city'];
        $labs=DB::table('Results')->select('id','firm_name','country','city')->where(array('country'=>$country,'city'=>$city))->get();
        return response()->json($labs);
    }
    public function search_labs(Request $request)
    {
        $data=$request->all();
        $term = $data['term'];
        $labs = DB::table('Results')->select('id','firm_name','country')
            ->where('firm_name', 'LIKE', '%' . $term . '%')
            ->orWhere('city', 'LIKE', '%' . $term . '%')
            ->orWhere('country', 'LIKE', '%' . $term . '%')
            ->get();
        return response()->json($labs);
    }
    public function contract_send(Request $request){
        $user_email=$request->user_email;
        $user_name=$request->user_name;
        $lab_id=$request->lab_id;
        $date=$request->date;
        $lab_name = DB::table('Results')->where('id',$lab_id)->first()->firm_name;
        $mail = Mail::to("frostwebservice@gmail.com")->send(new ContractEmail(['subject' => 'Telcron', 'user_email' => $user_email,'user_name'=>$user_name,'lab_name'=>$lab_name,'date'=>$date]));
        print_r($mail);
    }
    public function contract_detail(Request $request){
        $data=$request->all();
        $id=$data['id'];
        $lab = DB::table('Results')->where('id',$id)->first();
        return response()->json($lab);

    }
    public function submit_listing()
    {
        $title = "Submit Listing";
        $cityListing = DB::table('Results')->select('city')->distinct()->get()->toArray();
        return view('labRating.submitListing', compact('cityListing', 'title'));
    }
    public function get_cities(Request $request){
        $cityListing = DB::table('Results')->select('city')->distinct()->get()->toArray();
        return response()->json($cityListing);
    }
    public function view_listing()
    {
        $viewListing = DB::table('Results')->paginate(10);
        return response()->json($viewListing);
    }
    public function submit_listing_add(Request $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'businessName' => 'required',
        //     'city' => 'required',
        //     'shortBusinessDesc' => 'required',
        //     'longBusinessDesc' => 'required',
        //     'businessStreetAddress' => 'required',
        //     'businessCity' => 'required',
        //     'businessState' => 'required',
        //     'businessZIP' => 'required|Numeric',
        //     'businessCountry' => 'required',
        //     'businessURL' => 'required',
        //     'businessPhoneNumber' => 'required|Numeric',
        //     'businessFax' => 'required|Numeric',
        //     'businessContactEmail' => 'required',
        //     'accreditingBody' => 'required',
        //     'testFacility' => 'required',
        //     'testCategory' => 'required',
        //     'testStandard' => 'required',
        //     'certification' => 'required',
        //     'file' => 'required|file|mimes:jpg,jpeg,bmp,png,doc,docx,csv,rtf,xlsx,xls,txt,pdf,zip',
        // // ]);
        // if ($validator->fails()) {
        //     return redirect('lab-rating-directory/submit-listing')
        //         ->withErrors($validator)
        //         ->withInput();
        // }
        $cityListing = DB::table('Results')->select('city')->distinct()->get()->toArray();
        if ($request->file()) {
            $fileName = time() . '.' . $request->file->extension();
            $type = $request->file->getClientMimeType();
            $size = $request->file->getSize();
            $request->file->move(public_path('file'), $fileName);
        }
        $submitListing = new submitListing();
        $submitListing->businessName = $request->businessName;
        $submitListing->shortBusinessDesc = $request->shortBusinessDesc;
        $submitListing->city = $request->city;
        $submitListing->longBusinessDesc = $request->longBusinessDesc;
        $submitListing->businessStreetAddress = $request->businessStreetAddress;
        $submitListing->businessCity = $request->businessCity;
        $submitListing->businessState = $request->businessState;
        $submitListing->businessZIP = $request->businessZIP;
        $submitListing->businessCountry = $request->businessCountry;
        $submitListing->businessURL = $request->businessURL;
        $submitListing->linkTextOpt = $request->linkTextOpt;
        $submitListing->businessPhoneNumber = $request->businessPhoneNumber;
        $submitListing->businessFax = $request->businessFax;
        $submitListing->businessContactEmail = $request->businessContactEmail;
        $submitListing->accreditingBody = $request->accreditingBody;
        $submitListing->testFacility = $request->testFacility;
        $submitListing->testCategory = $request->testCategory;
        $submitListing->testStandard = $request->testStandard;
        $submitListing->certification = $request->certification;
        $submitListing->file = $request->file;
        $submitListing->save();
        print_r(json_encode("1"));
    }
    // public function fetchCountry(Request $request)
    // {
    //     $stateQuery = DB::table('Results')->where('country', $request->country)->get();
    //     return view('labRating.index', compact('stateQuery'));
    // }

	/*
     * @return search value
     */
    public function search(Request $request)
    {
        $viewListing = DB::table('Results')->paginate(10);
        $search = $request->search;
		$itemCount = '';
        if ($search != '' && $search != null) {
            $query = DB::table('Results')
                ->where('firm_name', 'LIKE', '%' . $search . '%')
                ->orWhere('city', 'LIKE', '%' . $search . '%')
                ->orWhere('country', 'LIKE', '%' . $search . '%');
			$count = count($query->get());
            $data = $query->paginate(5);
            if (count($data) > 0) {
                return view('labRating.viewListing', compact('data','count','itemCount'))->withDetails($data)->withQuery('search');
            } else {
                return view('labRating.viewListing', compact('data','itemCount'))->withMessage('No Details found. Try to search again !');
            }
        } else {
            return view('labRating.viewListing', compact('viewListing','itemCount'));
        }
    }

	public function fetchCountry($country)
    {
        $cities = DB::table('Results')->where('country', $country)->distinct()->pluck('city');
        return response()->json(['country' => $country /*, 'cityCount' => $cityCount*/, 'cities' => $cities]);
    }

    public function fetchCity($city)
    {
       	$labData = DB::table('Results')->where('city', $city)->get();
        return response()->json(['city' => $city, 'data' => $labData]);
    }

	public function certificationTesting(Request $request)
    {
        dd("Work In Progress");
    }

	public function preCertificationTesting(Request $request)
    {
        try {
            $viewListing = DB::table('Results')->paginate(10);
            $inputData = $request->except('_token');
            $itemCount = 0;
            foreach ($inputData as $fieldName => $fieldValue) {
                if (!empty($fieldValue)) {
                    $itemCount++;
                }
            }
            return view('labRating.viewListing', [
                'viewListing' => $viewListing,
                'itemCount' => $itemCount,
            ]);
        } catch (\Throwable $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}