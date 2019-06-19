// This Page is used to connect Instagram Post the the instagram section.
import $ from 'jquery';

export function toggleIcon() {
    var token = '14560975361.1677ed0.b076235506f949f593e3c4f04ccc73c6',
    num_photos = 4,
    scrElement = document.createElement( 'script' );
 
window.mishaProcessResult = function( data ) {
	for( var x in data.data ){

        $('#instafeed').append('<li><img src="' + data.data[x].images.low_resolution.url + '"></li>');

	}
}
 
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );
}
