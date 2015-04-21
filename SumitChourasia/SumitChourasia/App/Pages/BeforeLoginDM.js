/*
* Created by Sumit Chourasia
* on 21/04/15
*/

appRequire = require.
    config({
        waitSeconds: 200,
        shim: {
            underscore: {
                exports: "_"
            },
            angular: {
                exports: "angular",
                deps: ["jquery"]
            },
            jquery: {
                exports: "$"
            },
            bootstrap_min: {
                deps: ["jquery"]
            },
            restangular: {
                deps: ["angular", "underscore"]
            },
            angular_route: {
                deps: ["angular", "jquery"]
            },
            angular_animate: {
                deps: ["angular", "jquery", "angular_route"]
            },
            jquery_prettyPhoto: {
                deps: ["jquery"]
            },
            jquery_isotope: {
                deps: ["jquery"]
            },
            beforeLoginMain_js: {
                deps: ["jquery", "jquery_prettyPhoto", "jquery_isotope", "wow_min"]
            },
            sanitize: {
                deps: ["angular", "jquery"]
            },
            wow_min: {
                deps: ["jquery"]
            },
            beforeLoginApp: {
                deps: ["jquery", "angular"] //, "restangular", "configureBlockUI", "toastMessage", "jquery_sidr_min"]
            },
            beforeLoginIndex: {
                deps: ["jquery", "angular", "sanitize", "wow_min"]
            },
        },

        //3rd party javascript libraries
        paths: {
            underscore: "../../App/js/underscore-min",
            jquery: "../../App/js/jquery.min",
            angular: "../../App/js/angular.1.2.13",
            restangular: "../../App/js/restangular.min",
            angular_route: "../../App/js/angular-route",
            angular_animate: "../../App/js/angular-animate",
            sanitize: "../../App/js/sanitize",
            bootstrap_min: "../../App/js/bootstrap.min",
            jquery_prettyPhoto: "../../Resource/js/jquery.prettyPhoto",
            jquery_isotope: "../../Resource/js/jquery.isotope.min",
            beforeLoginMain_js: "../../Resource/js/main",
            wow_min:"../../Resource/js/wow.min",
            //Application related js
            beforeLoginApp: ".././../App/Pages/BeforeLogin/Controller/beforeLoginApp",
            beforeLoginIndex: "../../App/Pages/BeforeLogin/Index/index",
        }
    });

appRequire(["jquery", "angular", "underscore", "beforeLoginApp", "restangular", "angular_route", "angular_animate", "sanitize",
    "bootstrap_min", "jquery_prettyPhoto", "jquery_isotope", "beforeLoginMain_js", "wow_min", "beforeLoginIndex"
], function() {
    angular.bootstrap(document.getElementById("main"), ["beforeLoginApp"]);
});