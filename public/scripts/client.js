console.log("working");

var MovieApp = angular.module("MovieApp", []);


MovieApp.controller('MovieAppController', function($http) {

    var vm = this;
    vm.movies = [];

    vm.getMovies = function() {
        console.log('getting movies');
        return $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?s=' + vm.title
        }).then(function(response) {
            console.log('response', response.data);
            vm.movies = response.data.Search;
        });

    };

vm.favorites = [];

vm.postFav = function (title, year, poster) {
console.log('In post faves');
var objectToSend = {
Title: title,
Year: year,
Poster: poster
// ImdbID: ms.imdbID
};
        console.log('objectToSend ->', objectToSend);
        return $http({
            method: 'POST',
            url: '/postFav',
            data: objectToSend
        }).then(function success(response) {
            console.log('response');
        });

    };

});
