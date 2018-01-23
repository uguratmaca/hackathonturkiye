(function () {
    'use strict';

    angular
        .module('app')
        .component('hackathonList', {
            template: `
        <timeline>
            <timeline-event id="{{event.id}}" ng-if="$ctrl.route == 'old' ? event.date < $ctrl.today : event.date > $ctrl.today" ng-repeat="event in $ctrl.hackathons" side="{{$index%2===1?'right':'left'}}">
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

    HackathonListController.$inject = ['hackathonService', '$window', '$rootScope', 'ngDialog'];
    function HackathonListController(hackathonService, $window, $rootScope, ngDialog) {
        var $ctrl = this;

        $rootScope.user = {};

        $ctrl.route = 'new';

        $rootScope.changePage = function(data) {
            $ctrl.route = data;
        };

        $ctrl.today = new Date().getTime();

        $ctrl.$onInit = function () {
            $ctrl.hackathons = hackathonService.getAll();
        };

        $ctrl.$onChanges = function (changesObj) { };
        $ctrl.$onDestroy = function () { };
        $ctrl.goToPage = function (url) {
            $window.open(url, '_blank');
        }

        $ctrl.animateElementIn = function ($el) {
            $el.removeClass('timeline-hidden');
            $el.addClass('bounce-in');
        };

        $ctrl.animateElementOut = function ($el) {
            $el.addClass('timeline-hidden');
            $el.removeClass('bounce-in');
        };

        $rootScope.subscribeMail = function () {
            var acceptedOrCancelled = window.localStorage.getItem('maillistsubs');
            if(!acceptedOrCancelled){
                ngDialog.open({
                    template: 'subscribeDialog',
                    className: 'ngdialog-theme-plain'
                });
            }
        }

        $rootScope.saveMail = function () {
          
            window.localStorage.setItem('maillistsubs',1);
            hackathonService.saveMail($rootScope.user.mail);
   
            ngDialog.close();
        }
    }
})();
