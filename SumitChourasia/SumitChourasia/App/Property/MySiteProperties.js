﻿var logoImage = "../../Template/AdminLTE-master/img/m2eV3.png";
var googleAnalyticsAppID = "UA-51967607-1";

var ServerContextPah = "";

var appLocation = {
    'common': '../../App/CommonInit',
    'preLogin': '../../App/Pages/PreLoginInit',
    'postLogin': '../../App/Pages/PostLoginInit',
    'userPostLogin': '../../App/Pages/UserPostLoginInit'
};




var mobileDevice = detectmob();
var ipadDevice = detectipad();
var isAndroidDevice = detectAndroid();
function detectmob() {
    return (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i));
}
function detectipad() {
    return (navigator.userAgent.match(/iPad/i) != null);
}
function detectAndroid() {
    return (navigator.userAgent.match(/Android/i) != null);
}

function replaceImageWithFancyBoxImage(text, smallImage, largeImage) {
    //console.log(text);
    //console.log("<img src=\"" + smallImage + "\" title=\"Image: " + smallImage + "\">");

    text = text.replace("<img title=\"Image: " + smallImage + "\" src=\"" + smallImage + "\">", "<a class='fancybox' href='" + largeImage + "' data-fancybox-group='gallery' title='Personalized Title'><img class='MaxUploadedSmallSized' src='" + smallImage + "' alt=''></a>");
    text = text.replace("<img src=\"" + smallImage + "\" title=\"Image: " + smallImage + "\">", "<a class='fancybox' href='" + largeImage + "' data-fancybox-group='gallery' title='Personalized Title'><img class='MaxUploadedSmallSized' src='" + smallImage + "' alt=''></a>");
    text = text.replace("<img src=\"" + smallImage + "\">", "<a class='fancybox' href='" + largeImage + "' data-fancybox-group='gallery' title='Personalized Title'><img class='MaxUploadedSmallSized' src='" + smallImage + "' alt=''></a>");
    return text;
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}



function detectIfUserLoggedIn(){
        var headers = {
                        'Content-Type': 'application/json',
						'UTMZT': $.cookie('utmzt'),
						'UTMZK': $.cookie('utmzk'),
						'UTMZV': $.cookie('utmzv')                       
                    };
         if($.cookie('utmzt') != null && $.cookie('utmzt') != "" && $.cookie('loginType') != null && $.cookie('loginType') != "")
         {
            var  url = ServerContextPah + '/Auth/IsValidSession';
                 $.ajax({
						url: url,
						type: "POST",
                        headers: headers
						}).done(function(data,status) {
							console.log(data);
                            if(data == true)
                                location.href="/"+$.cookie('loginType');
                            else
                            {
                                $.removeCookie('utmzt', { path: '/' });
                                $.removeCookie('utmzk', { path: '/' });
                                $.removeCookie('utmzv', { path: '/' });
                                $.removeCookie('utime', { path: '/' });
                                $.removeCookie('kmsi', { path: '/' });
                                // will first fade out the loading animation
                                jQuery("#status").fadeOut();
                                // will fade out the whole DIV that covers the website.
                                jQuery("#preloader").delay(1000).fadeOut("medium");                                                           
                            }					
						});
         }
         else
         {
                 $.removeCookie('utmzt', { path: '/' });
                 $.removeCookie('utmzk', { path: '/' });
                 $.removeCookie('utmzv', { path: '/' });
                 $.removeCookie('utime', { path: '/' });
                 $.removeCookie('kmsi', { path: '/' });
                // will first fade out the loading animation
                jQuery("#status").fadeOut();
                // will fade out the whole DIV that covers the website.
                jQuery("#preloader").delay(1000).fadeOut("medium");
         }
					
}


function logout(){
    var headers = {
                        'Content-Type': 'application/json',
						'UTMZT': $.cookie('utmzt'),
						'UTMZK': $.cookie('utmzk'),
						'UTMZV': $.cookie('utmzv')                       
                    };
         if($.cookie('utmzt') != null && $.cookie('utmzt') != "")
         {
            var  url = ServerContextPah + '/Auth/Logout';
//                 $.ajax({
//						url: url,
//						type: "POST",
//                        headers: headers
//						}).done(function(data,status) {							                                                                              
//                           					
//						});
//                

                    $.ajax({
                       type: "POST",
                       url: url,
                       headers: headers,                       
                       success: function(result){
                            $.removeCookie('utmzt', { path: '/' });
                            $.removeCookie('utmzk', { path: '/' });
                            $.removeCookie('utmzv', { path: '/' });
                            $.removeCookie('utime', { path: '/' });
                            $.removeCookie('kmsi', { path: '/' });
                            location.href = "/";
                       },
                       error: function(request,status,errorThrown) {
                            $.removeCookie('utmzt', { path: '/' });
                            $.removeCookie('utmzk', { path: '/' });
                            $.removeCookie('utmzv', { path: '/' });
                            $.removeCookie('utime', { path: '/' });
                            $.removeCookie('kmsi', { path: '/' });
                            location.href = "/";
                       }
                     });


         }
         else
         {
            location.href = "/";
         }
                     
}