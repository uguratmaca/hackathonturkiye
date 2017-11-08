(function () {
    'use strict';
    angular
        .module('app', ['firebase', 'angular-timeline', 'angular-scroll-animate','ngDialog'])

        .directive('onScrollToBottom', function ($document) {
            //This function will fire an event when the container/document is scrolled to the bottom of the page
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
        
                    var doc = angular.element($document)[0].body;
        
                    $document.bind("scroll", function () {
        
                        var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
                        var body = document.body, html = document.documentElement;
                        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
                        var windowBottom = windowHeight + window.pageYOffset;

                        if (windowBottom >= docHeight) {
                            scope.$apply(attrs.onScrollToBottom);
                        }

                    });
                }
            };
        });

}());