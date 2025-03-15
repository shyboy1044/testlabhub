<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/







Route::post('/register','LoginRegisterController@register')->name('register');
Route::post('/login','LoginRegisterController@login')->name('login');
Route::post('/signout','LoginRegisterController@logout')->name('signout');
Route::post('/login/google', 'GoogleLoginController@login')->name('googleauth');
Route::get('/store','NavItemController@store')->name('store');
Route::post('payByStripe','PaymentController@payByStripe')->name('payByStripe');
Route::post('/paydone','PaymentController@payment_done')->name('paydone');
Route::post('/sendmail/send',   'SendEmailController@send')->name('contactSendMail');
Route::post('submit-rfq/contact-us', 'contactUsController@index')->name('submitrfq.contactus');
Route::get('/lab-rating-directory', 'labRatingController@index')->name('lab.lab_rating_directory');
Route::post('/get_city_labs', 'labRatingController@get_city_labs')->name('get_city_labs');
Route::post('/search_labs', 'labRatingController@search_labs')->name('search_labs');
Route::get('lab-rating-directory/view-listing', 'labRatingController@view_listing')->name('lab.view_listing');
Route::get('lab-rating-directory/get-cities', 'labRatingController@get_cities')->name('get_cities');
Route::post('lab-rating-directory/add-submit-listing', 'labRatingController@submit_listing_add')->name('lab.add_submit_listing');
Route::post('contract_detail', 'labRatingController@contract_detail')->name('contract_detail');
Route::post('/contract_send','labRatingController@contract_send')->name('contract_send');
Route::get('/home-search', 'IndexController@homeSearch')->name('home-search');
Route::post('/get_home_search', 'IndexController@homeSearch')->name('get_home_search');
Route::get('/get_countries', 'labRatingController@get_countries')->name('get_countries');
Route::post('/get_labs_country', 'labRatingController@get_labs_country')->name('get_labs_country');
Route::get('/get_service_preference', 'labRatingController@get_service_preference')->name('get_service_preference');
Route::get('/get_product_description', 'labRatingController@get_product_description')->name('get_product_description');
Route::post('/reserve_lab', 'LabReservationController@reserve_lab')->name('reserve_lab');
Route::post('/uploadFile', 'IndexController@uploadFile')->name('uploadFile');
Route::post('/moveFile', 'IndexController@moveFile')->name('moveFile');
Route::post('/fetchBestBuy', 'IndexController@fetchBestBuy')->name('fetchBestBuy');
Route::post('/get_earnings', 'IndexController@get_earnings')->name('get_earnings');
Route::post('/uploadZipper', 'IndexController@uploadZipper')->name('uploadZipper');
Route::post('/get_image_categories', 'IndexController@get_image_categories')->name('get_image_categories');
Route::post('/get_video_categories', 'IndexController@get_video_categories')->name('get_video_categories');
Route::post('/get_gallery', 'IndexController@get_gallery')->name('get_gallery');
