(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('hackathonList', {
            template: `<ul class="timeline">
            <li ng-click="$ctrl.goToPage(item.url)" style="cursor:pointer" ng-repeat="item in $ctrl.hackathons" ng-class="{'timeline-inverted': $index % 2 == 0}">
                <div class="timeline-badge">
                    <i class="fa fa-calender"></i>
                </div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">{{item.name}}</h4>
                        <img class="img-responsive" alt="Hackathon City İstanbul" ng-src="{{item.imageUrl}}" />
                        <p>
                            <small class="text-muted">
                                <i class="fa fa-time"></i> {{item.date|date}}</small>
                        </p>
                    </div>
                    <div class="timeline-body">
                        <p>{{item.description}}</p>
                    </div>
                </div>
            </li>
        </ul>`,
            controller: HackathonListController,
            controllerAs: '$ctrl',
            bindings: {

            },
        });

    HackathonListController.$inject = ['hackathonService', '$window'];
    function HackathonListController(hackathonService, $window) {
        var $ctrl = this;


        ////////////////

        $ctrl.$onInit = function () {
            $ctrl.hackathons = hackathonService.getAll();
        };
        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestroy = function () { };
        $ctrl.goToPage = function (url) {
            $window.open(url, '_blank');
        }
    }
})();