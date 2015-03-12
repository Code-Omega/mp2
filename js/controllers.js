movieApp.controller('movieController', ['$scope', '$http', function($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
        $scope.sortTypeName = 'title';
        $scope.movieData = data;
    });
}]);

movieApp.controller('sortController', ['$scope', function($scope) {
        $scope.options = ["rank","title","runtime","rated","director","actors","plot","language","country","genre"];
        $scope.sortOption = $scope.options[0];
        $scope.sortType = $scope.sortOption;
        $scope.$watch('sortOption', function() {
            $scope.sortTypeName = $scope.sortOption;
                //console.log($scope.sortTypeName);
                //console.log($scope.sortOption);
        });
    //console.log($scope.sortType);
    //console.log($scope.sortOption);
}]);

movieApp.filter("swapFilter", function() {
    return function (input, option, query) {
        if (input == undefined || option == undefined || query == undefined)
            return input;
        var filtered = [];
        for (var i = 0; i < input.length; i++) {
            var item = input[i];
            if ((item[option].toString()).indexOf(query)>-1){
                filtered.push(item);
            }
        }
        return filtered;
    };
});

movieApp.controller('partialController', ['$scope', function($scope) {
    $scope.partials =
        [ { name: 'LIST', url: './partials/list.html'},
          { name: 'GALLERY', url: './partials/gallery.html'},
          { name: 'DETAILS', url: './partials/details.html'}];
    $scope.partial = $scope.partials[0];
    $scope.showDetail = function (movieID) {
        $scope.partial = $scope.partials[2];
        if (movieID == undefined) movieID = 'tt0111161';
        $scope.movieID = movieID;
        console.log('click');
        console.log($scope.partial);
    }
}]);

movieApp.controller('detailController', ['$scope', function($scope) {
    $scope.rightInRank = function () {
        if ($scope.movie.rank == 250) $scope.movie = $scope.movieData[0];
        else $scope.movie = $scope.movieData[$scope.movie.rank];
        console.log('click');
        console.log($scope.partial);
    }
    $scope.leftInRank = function () {
        if ($scope.movie.rank-1 == 0) $scope.movie = $scope.movieData[249];
        else $scope.movie = $scope.movieData[$scope.movie.rank-2];
        console.log('click');
        console.log($scope.partial);
    }
}]);

movieApp.controller('galleryController', ['$scope', function($scope) {
    $scope.movieGenre = '';
    $scope.switchOnGenre = function(type){
    switch(type){
      case 1: $scope.movieGenre='';break;
      case 2: $scope.movieGenre='Action';break;
      case 3: $scope.movieGenre='Adventure';break;
      case 4: $scope.movieGenre='Crime';break;
      case 5: $scope.movieGenre='Comedy';break;
      case 6: $scope.movieGenre='Drama';break;
      case 7: $scope.movieGenre='Musical';break;
      case 8: $scope.movieGenre='Mystery';break;
      case 9: $scope.movieGenre='Romance';break;
      case 10: $scope.movieGenre='Sci-Fi';break;
      case 11: $scope.movieGenre='Thriller';break;
      case 12: $scope.movieGenre='Western';break;
    }
    console.log($scope.movieGenre);
    }
}]);

/*movieApp.filter("genreFilter", ['$scope', function() {
    return function (input) {
        if (input == undefined || $scope.movieGenre == undefined)
            return input;
        var filtered = [];
        for (var i = 0; i < input.length; i++) {
            var item = input[i];
            if ((item).indexOf($scope.movieGenre)>-1){
                filtered.push(item);
            }
        }
        return filtered;
    };
}]);*/