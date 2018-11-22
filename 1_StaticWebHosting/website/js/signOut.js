/*global SupportChatBot _config*/

var SupportChatBot = window.SupportChatBot || {};
SupportChatBot.map = SupportChatBot.map || {};

(function rideScopeWrapper($) {
    var authToken;
    SupportChatBot.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });
    function requestUnicorn(pickupLocation) {
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/ride',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({
                PickupLocation: {
                    Latitude: pickupLocation.latitude,
                    Longitude: pickupLocation.longitude
                }
            }),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
    }

    // Register click handler for #request button
    $(function onDocReady() {
        $('#signOut').click(function() {
            SupportChatBot.signOut();
            alert("You have been signed out.");
            window.location = "signin.html";
        });

        SupportChatBot.authToken.then(function updateAuthMessage(token) {
            if (token) {
                displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
                $('.authToken').text(token);
            }
        });
    });
    function displayUpdate(text) {
      $('#updates').append($('<li>' + text + '</li>'));
    }


}(jQuery));
