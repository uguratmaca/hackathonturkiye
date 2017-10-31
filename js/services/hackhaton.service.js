(function () {
    'use strict';

    angular
        .module('app')
        .service('hackathonService', hackathonService);
    hackathonService.$inject = ['$firebaseArray'];
    function hackathonService($firebaseArray) {
        var URL = "https://boiga-cyanea.firebaseio.com/";
        this.getAll = getAll;
        this.add = add;
        ////////////////
        //"auth != null"
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
    }
})();