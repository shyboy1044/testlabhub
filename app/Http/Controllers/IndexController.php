<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Models\Media;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
class IndexController extends Controller
{
    public function index()
    {
        return view('home');
    }

	public function homeSearch(Request $request)
    {
        try {
            $data=$request->all();
            $search = $data['query'];
            if ($search != '' && $search != null) {
                $query = DB::table('home_search')
                    ->where('company_name', 'LIKE', '%' . $search . '%')
                    ->orWhere('title', 'LIKE', '%' . $search . '%')
                    ->orWhere('standard', 'LIKE', '%' . $search . '%');
                $executeQuery = $query->get();
                $searchCount = count($executeQuery);

                return response()->json($executeQuery);
            } else {
                return response()->json("1");
            }
        } catch (\Throwable $e) {
            echo "Error : " . $e->getMessage();
        }
    }
    public function uploadFile(Request $request){

        $file = $request->file('file');

        if($file){
            $mime = $file->getMimeType();
            if(strstr($mime, "video/")){
                $filename = $file->getClientOriginalName();
                $location = 'uploads/videos';
                $file->move($location, $filename);

                $id = DB::table('uploads')->insertGetId(
                    ['filename' => $filename, 'type' => 'video']
                );
                while(true){
                    $status = DB::table('uploads')->where('id',$id)->first()->status;
                    if($status==1) break;

                }
                $name = DB::table('uploads')->where('id',$id)->first()->filename;
                $url = ["folder"=>$id."_videos","filename"=>pathinfo($name)['filename'].".json"];
                return response()->json($url);

            }else if(strstr($mime, "image/")){
                $filename = $file->getClientOriginalName();
                $location = 'uploads/images';
                $file->move($location, $filename);

                $id = DB::table('uploads')->insertGetId(
                    ['filename' => $filename, 'type' => 'image']
                );
                while(true){
                    $status = DB::table('uploads')->where('id',$id)->first()->status;
                    if($status==1) break;
                }
                $url = ["folder"=>$id."_images","filename"=>'sample.json'];
                return response()->json($url);

            }
            else{
                return response()->json("0");
            }
        }
    }
    public function fetchBestBuy(Request $request)
    {
        // Replace with your actual BestBuy API key and endpoint
        $apiKey = 'YOUR_BESTBUY_API_KEY';
        $endpoint = 'https://api.bestbuy.com/v1/products?apiKey=' . $apiKey . '&format=json';

        $response = Http::get($endpoint);
        $items = [];
        $email = $request->input('email');
        if ($response->successful()) {
            foreach ($response->json()['products'] as $product) {
                $media = Media::create([
                    'type' => 'image',  // Assuming the BestBuy API provides images
                    'url' => $product['image']  // Adjust based on the actual API response
                ]);
                $items[] = [
                    'id' => $media->id,
                    'category'=>"BestBuy",
                    'created_at'=>"",
                    'updated_at'=>"",
                    'title'=>"BestBuy",
                    'user_id'=>$email,
                    'type' => $media->type,
                    'path' => asset($media->url)
                ];
            }
        }

        return response()->json($items);
    }    
    public function moveFile(Request $request){
        $type=$request->input('type');
        $path=$request->input('path');
        // Construct the full path of the file in the public directory
        $publicPath = public_path($path);
		
   
        if($type=="video"){

            // Check if the file exists
    
                // Get the file's original name
                $filename = basename($publicPath);

                // Define the target directory (e.g., public/custom)
                $destinationPath = public_path('uploads/videos');

                // Ensure the target directory exists
          

                // Move the file to the new directory with its original name
                $newPath = $destinationPath . '/' . $filename;
                File::copy($publicPath, $newPath);

                $id = DB::table('uploads')->insertGetId(
                    ['filename' => $filename, 'type' => 'video']
                );
                while(true){
                    $status = DB::table('uploads')->where('id',$id)->first()->status;
                    if($status==1) break;
                }
                $name = DB::table('uploads')->where('id',$id)->first()->filename;

                $url = ["folder"=>$id."_videos","filename"=>pathinfo($name)['filename'].".json"];

                return response()->json($url);

           
        }else if($type=="image"){
			
            // Check if the file exists
     
                // Get the file's original name
                $filename = basename($publicPath);

                // Define the target directory (e.g., public/custom)
                $destinationPath = public_path('uploads/images');

                // Ensure the target directory exists
         

                // Move the file to the new directory with its original name
                $newPath = $destinationPath . '/' . $filename;
                File::copy($publicPath, $newPath);

                $id = DB::table('uploads')->insertGetId(
                    ['filename' => $filename, 'type' => 'image']
                );
                while(true){
                    $status = DB::table('uploads')->where('id',$id)->first()->status;
                    if($status==1) break;
                }
                $url = ["folder"=>$id."_images","filename"=>'sample.json'];
                return response()->json($url);

        }
        else{
            return response()->json("0");
        }
    }
    public function uploadZipper(Request $request){

        $file = $request->file('file');
        $email = $request->post('email');
        $title = $request->post('title');
        $category = $request->post('category');
        $earnings = DB::table('users')->where('email',$email)->first()->earnings+0.02;
        DB::table('users')->where('email',$email)->update(array('earnings'=>$earnings));
        if($file){
            $mime = $file->getMimeType();
            if(strstr($mime, "video/")){
                $filename = $file->getClientOriginalName();
                $location = 'gallery/videos';
                $file->move($location, $filename);

                $id = DB::table('videos')->insertGetId(
                    ['title'=>$title,'category'=>$category,'path'=>'gallery/videos/'.$filename,'user_id'=>$email]

                );
         
                return response()->json("video");

            }else if(strstr($mime, "image/")){
                $filename = $file->getClientOriginalName();
                $location = 'gallery/images';
                $file->move($location, $filename);

                $id = DB::table('images')->insertGetId(
                    ['title'=>$title,'category'=>$category,'path'=>'gallery/images/'.$filename,'user_id'=>$email]
                );
             
                return response()->json("image");

            }
            else{
                return response()->json("0");
            }
        }
    }
    public function get_earnings(Request $request){
        $email = $request->post('email');
        $earnings = DB::table('users')->where('email',$email)->first()->earnings;

        return response()->json($earnings);
    }
    public function get_image_categories(Request $request){
        $email = $request->post('email');
        $categories = DB::table('images')->select('category')->where('user_id',$email)->distinct()->get();
        return response()->json($categories);
    }
    public function get_video_categories(Request $request){
        $email = $request->post('email');
        $categories = DB::table('videos')->select('category')->where('user_id',$email)->distinct()->get();
        return response()->json($categories);
    }
    public function get_gallery(Request $request){
        $email = $request->post('email');
        $term = $request->post('term');
        $selected_category = $request->post('selected_category');
        $gallery_type = $request->post('gallery_type');
        if($gallery_type=="image"){
            $query = DB::table('images');
            $query->where('user_id',$email);
            if (!empty($term)) {
                $query->where('title', 'like', '%' . $term . '%');
            }

            if (!empty($selected_category)) {
                $query->where('category', 'like', '%' . $selected_category . '%');
            }
            $results = $query->get();
        }else if($gallery_type=="video"){
            $query = DB::table('videos');
            $query->where('user_id',$email);

            if (!empty($term)) {
                $query->where('title', 'like', '%' . $term . '%');
            }

            if (!empty($selected_category)) {
                $query->where('category', 'like', '%' . $selected_category . '%');
            }
            $results = $query->get();
        }
        return response()->json($results);

    }
}
