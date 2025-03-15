<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContractEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $items;
    public function __construct(array $items)
    {
        //
        $this->items = $items;
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {

        $mail = $this->subject($this->items['subject'])->view('emails.contract');
        return $mail;
    }
}
