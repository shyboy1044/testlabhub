<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingInformation extends Model
{
    public function labReservation()
    {
        return $this->belongsTo(LabReservation::class);
    }

    protected $guarded = [
        //
    ];
}
