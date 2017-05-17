console.log("working");

var MovieApp = angular.module("MovieApp", []);


MovieApp.controller('MovieAppController', function($http) {

    var vm = this;
    vm.movies = [];
    vm.favorites = [];


    vm.getMovies = function() {
        console.log('getting movies');
         $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?s=' + vm.title
        }).then(function(response) {
            console.log('response', response.data);
            vm.movies = response.data.Search;
        });
        vm.title = " ";
        vm.favorites = [];

    };



    vm.postFav = function(title, year, poster) {
        console.log('In post faves');
        var objectToSend = {
            title: title,
            year: year,
            poster: poster
            // ImdbID: ms.imdbID
        };
        console.log('objectToSend ->', objectToSend);
         $http({
            method: 'POST',
            url: '/postFav',
            data: objectToSend
        }).then(function success(response) {
            console.log('response');
        });

    };

    vm.getFaves = function() {
      $http ({
        method:'GET',
        url:'/appendFav'
      }).then(function success(response) {
        vm.favorites = response.data;
      });
    };

});
