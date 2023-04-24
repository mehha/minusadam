=== DPD Baltic Shipping ===
Contributors: DPD
Donate link: https://dpd.com
Tags: woocommerce, shipping, dpd, parcels
Requires at least: 4.4
Tested up to: 6.1.1
Stable tag: 1.2.58
Requires PHP: 7.4
WC requires at least: 3.0
WC tested up to: 7.4.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Shipping extension for WooCommerce on WordPress of DPD Baltics. Manage your national and international shipments easily.

== Description ==

Shipping extension for WooCommerce on WordPress of DPD Baltics. Manage your national and international shipments easily.

Features of DPD plugin

1. Fast multiple label creation for national and international orders.
2. Supporting MPS (Multiparcel Shipping).
3. Create a pick-up order for courier.

**Available services:**

1. Delivery to **DPD Pickup** lockers and parcelshops in Baltics and in all Europe. Pickup map is displayed in checkout for user convenience.
2. Delivery to home in all Europe with **B2C** service.
3. Collection of money in Baltics by cash or card with **COD** service.
4. Saturday delivery in **Baltics** (restrictions to cities applied).
5. Sameday delivery **Baltics** (restrictions to cities applied).
6. **Delivery timeframes** in checkout, so that your customer can select a preffered delivery timeslot (restriction to cities applied).
7. **Document return** service to get back signed contracts, invoices or other documents.
8. **Collection request** service to send a parcel from somebody else to you. Excellent to manage returns from customers.
9. **Return** label with your address, so that your customer can send you back the shipment.

**Prerequisites:**

* This extension is available only for DPD Baltics (Lithuania, Latvia, Estonia).
* In order to use the extension you must have an active contract with one of the business units: DPD Lietuva, DPD Latvija or DPD Eesti.
* Additionally, you must have user credentials for API of DPD Baltics. Please contact DPD sales in your county.

== Installation ==

There are two methods to install the plugin: using WordPress Plugin installer and manually:

Using the WordPress Plugin Installer:

1. Unzip the downloaded DPD plugin .ZIP file into a new directory.
2. In your WordPress admin panel go to **Plugins > Add New > Upload Plugin**.
3. Upload the file **dpd-shipping-baltic.zip** which is in the directory you created in step 1.
4. Click the **Install Now** button.
5. After the installation is completed, click the button **Activate Now**.

Manual Installation:

1. Unzip the downloaded DPD plugin .ZIP file into a new directory.
2. Navigate to this directory and find the file **dpd-shipping-baltic.zip**.
3. Extract **dpd-shipping-baltic.zip** into a new directory.
4. Navigate to the newly extracted directory. You will notice it contains a directory called **dpd-shipping-baltic**.
5. Upload the contents of the **dpd-shipping-baltic** directory to **wp-content > plugins**, making sure to preserve the directory structure.
6. Go to your WordPress admin panel **Plugins > Installed Plugins > DPD Baltic Shipping ** and click **Activate**.

Congratulations! DPD Interconnector is now installed.

== Frequently Asked Questions ==

= Pickup points import =

DPD plugin updates Pickup points every time you save your credentials in module DPD settings, every day with cron job at the time of plugin activation.

Pickup point update takes about 100-150 seconds.

Cron job name "dpd_parcels_updater";
Data is saved in table "wp_dpd_terminals";

= COD settings and information =

COD fee settings can be found in the main plugin settings: **WooCommerce > Settings > DPD > General**

*COD limits:*

LT - 1000 EUR, LV - 1200 EUR, EE - 1278 EUR. If order’s total sum is above this limit, COD option is not displayed in the checkout.

== Screenshots ==

1. DPD Pickup lockers and parcelshops selection.
2. Printing label pdf.
3. DPD Pickup lockers and parcelshop map.
4. Shipping zones.
5. Shipping method settings.

== Changelog ==

= 1.2.58 =
* Bug Fix - Orders without selected pickup point when account is created.

= 1.2.57 =
* Bug Fix - Options table are updating plugin DB version every time plugin loads.

= 1.2.56 =
* Bug Fix - Orders without selected pickup point.
* Bug Fix - Courier pick-up request issue.

= 1.2.55 =
* Bug Fix - Fix authorization user for delete warehouse.

= 1.2.54 =
* Bug Fix - Fix variable sanitized incorrectly.

= 1.2.53 =
* Bug Fix - Fix variable escaped incorrectly.

= 1.2.52 =
* Bug Fix - Changes in plugin back-end. 

= 1.2.51 =
* Bug Fix - Pick-up points in checkout issue fix. 

= 1.2.50 =
* Feature - Improved plugin security ( Validate, Sanitize, Escape, Nonce ).

= 1.2.11 =
* Bug Fix - Label single and bulk printing improvements/bug fixes. 

= 1.2.9 =
* Feature - Improved plugin security ( CSRF, XSS, MySQL injection). 

= 1.2.8 = 
* Bug Fix - Weight system and parcel printing improvements. 
* Bug Fix - More PHP 8.0 compatibility improvements. 


= 1.2.7 = 
* Feature - More weight system improvements.
* Feature - LV COD availability.
* Feature - More countries available for "DPD Pickup points" delivery method. 
* Feature - Sustainability logo when API country is LV. 
* Bug Fix - Coupon system improvements and bug fixes. 
* Bug Fix - Parcelshops list disappearing when daily cronjob is running. And other improvement to parcelshop system. 


= 1.2.5 = 
* Feature - Part 2 of weight system improvements. Now works with grams. 

= 1.2.4 = 
* Feature – Weight system improvements.
* Bug Fix – Tracking codes links fix. 
* Other small bug fixes and impovements.

= 1.2.2 =
* Hotfix – Compatibility with OPAY Payments plugin.

= 1.2.1 =
* Feature - Customers can see their tracking codes in emails.
* Feature - Added more accurate translations for LT, EE, LV. 
* Bug Fix - Some API ports were not usable so they were deleted.
* Bug Fix - Pick-up points loss in database after plugin update. 
* Bug Fix - VAT is not being added to COD price. 
* Other small bug fixes and impovements.

= 1.1.1 =
* Feature - Pick-up points list is now ordered in alphabetical order.
* Notice - Lithuanian service changes.
* Other bug fixes and impovements.

= 1.1.0 =
* Feature - Ability to select for which countries fetch pickup points list.
* Notice - France and Germany pickup points will be fetched without working hours if server max_execution_time is lower than 60 seconds.

= 1.0.9 =
* Fix - Display message, then order DPD label cannot be generated for order.
* Tweak - WP 5.4 compatibility.
* Tweak - WC 4.1 compatibility.

= 1.0.8 =
* Fixed endless flickering bug in checkout.

= 1.0.7 =
* Fixed LT, LV, EE plugin localization.

= 1.0.6 =
* Added mass DPD labels printing.

= 1.0.5 =
* Fixes for shipping methods availability by cart weight.
* Other bugfixes and improvements.

== Upgrade Notice ==

= 1.0 =
