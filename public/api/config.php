<?php
/**
 * Contact form settings.
 *
 * Edit these values on the server (or here before building) — no other
 * file needs to change. This file is copied to dist/api/ on build.
 */

return [
    // Where enquiries are delivered. Several addresses: separate with commas.
    'recipient' => 'CHANGE-ME@stoneandiron.jp', // TODO: the original site lists no email — set the real inbox,

    // The "From" address. Use an address on the SAME domain as the website,
    // otherwise many hosts / mail providers will reject or spam-folder it.
    'from_email' => 'no-reply@stoneandiron.jp',
    'from_name'  => 'STONE and IRON Website',

    // Subject line of the notification email.
    'subject' => '【石と鉄 STONE and IRON】ご予約・お問い合わせがありました',

    // Pages to send non-JavaScript visitors back to after submitting.
    'redirect_success' => '/contact/?status=success#contact-form',
    'redirect_error'   => '/contact/?status=error#contact-form',

    // Spam protection: reject forms submitted faster than this (seconds).
    'min_seconds_to_submit' => 3,

    // Minimum seconds between two submissions from the same visitor.
    'throttle_seconds' => 30,
];
