(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('homeComponent', {
            template:'home.component.html',
            //templateUrl: 'templateUrl',
            controller: HomeController,
            controllerAs: '$ctrl',
            bindings: {
            },
        });

    HomeController.$inject = ['hackhatonService'];
    function HomeController(hackhatonService) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();