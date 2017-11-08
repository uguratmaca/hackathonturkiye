(function () {
    'use strict';

    angular
        .module('app')
        .service('hackathonService', hackathonService);
    hackathonService.$inject = ['$firebaseArray','$http'];
    function hackathonService($firebaseArray,$http) {
        var URL = "https://boiga-cyanea.firebaseio.com/";
        this.getAll = getAll;
        this.add = add;
        this.saveMail = saveMail;

        function getAll() {
            var messagesRef = new Firebase(URL).child("hackathons");
            var query = messagesRef.orderByChild("date");
            var list = $firebaseArray(query);
            return list;
        }
        
        function add(item) {
            var messagesRef = new Firebase(URL).child("hackathons");
            var query = messagesRef;
            var list = $firebaseArray(query);
            list.$add(item);
        }

        function saveMail(mailAddress) {

            var item = {"mail": mailAddress};

            $http.post(URL + 'mailList.json', item).then(function(){
                console.log('mail added');
            });
        }
    }
})();