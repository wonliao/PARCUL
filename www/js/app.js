ons.bootstrap();

ons.disableAutoStatusBarFill();

if(ons.platform.isIOS()) {
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ios.css') );
}
