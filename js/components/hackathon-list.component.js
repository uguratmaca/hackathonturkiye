(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('hackathonList', {
            template: `
        <timeline>
            <timeline-event ng-repeat="event in $ctrl.hackathons" side="{{$index%2===1?'right':'left'}}">
                <timeline-badge ng-class="{'timeline-hidden':$index>2}" class="info" when-visible="$ctrl.animateElementIn"
                when-not-visible="$ctrl.animateElementOut" >
                    <i class="fa fa-calendar"></i>
                </timeline-badge>
                <timeline-panel ng-class="{'timeline-hidden':$index>2}" class="info" when-visible="$ctrl.animateElementIn"
                when-not-visible="$ctrl.animateElementOut" >
                    <timeline-heading>
                    <h4>{{event.name}}</h4>
                    <p>
                        <small class="text-muted"><i class="fa fa-clock-o"></i> {{event.date|date:'dd.MM.yyyy'}}</small>
                    </p>
                    </timeline-heading>
                    <img class="img-responsive" alt="{{event.name}}" ng-src="{{event.imageUrl}}" />
                    <p>{{event.description}}</p>
                    <timeline-footer>
                            <span class="btn btn-info" ng-click="$ctrl.goToPage(event.url)">Daha Fazla</span>
                  </timeline-footer>
                </timeline-panel>
            </timeline-event>
        </timeline>`,
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
        // optional: not mandatory (uses angular-scroll-animate)
        $ctrl.animateElementIn = function ($el) {
            $el.removeClass('timeline-hidden');
            $el.addClass('bounce-in');
        };

        // optional: not mandatory (uses angular-scroll-animate)
        $ctrl.animateElementOut = function ($el) {
            $el.addClass('timeline-hidden');
            $el.removeClass('bounce-in');
        };
    }
})();
