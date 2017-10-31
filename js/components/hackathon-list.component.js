(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('hackathonList', {
            template: `<section id="cd-timeline" class="cd-container">
            <div class="cd-timeline-block" ng-repeat="item in $ctrl.hackathons">
                <div class="cd-timeline-img cd-location">
                    <img src="img/cd-icon-calendar.png" alt="Picture">
                </div> <!-- cd-timeline-img -->
        
                <div class="cd-timeline-content">
                    <h2>{{item.name}}</h2>
                    <img  alt="Hackathon City İstanbul" ng-src="{{item.imageUrl}}" />
                    <p>{{item.description}}</p>
                    <a style="cursor:pointer" onclick="window.open('http://hackathoncity.istanbul')" class="cd-read-more">Web Site</a>
                    <span class="cd-date">{{item.date|date}}</span>
                </div> <!-- cd-timeline-content -->
            </div> <!-- cd-timeline-block -->
        </section>`,
            controller: HackathonListController,
            controllerAs: '$ctrl',
            bindings: {

            },
        });

    HackathonListController.$inject = ['hackathonService'];
    function HackathonListController(hackathonService) {
        var $ctrl = this;


        ////////////////

        $ctrl.$onInit = function () {
            $ctrl.hackathons = hackathonService.getAll();
        };
        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestroy = function () { };
    }
})();