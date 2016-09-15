(function() {

	var imdb = angular.module("imdb")
	imdb.controller("searchmovies", searchmovies);

	function searchmovies($scope, $http) {
      
		$scope.appName = "The Movie DB";
		$scope.searchM = ''
		var url='http://api.themoviedb.org/3/';
		var key='d2835b6af82dc1f92d2f6235d66d3823'
		$scope.getMovies = function() {
			if ($scope.searchM != '') {
				var promise = $http.get(url+'search/movie?api_key='+key+'&query=' + $scope.searchM);
				promise.then(successCallback, errorCallback);
			}
			else
			{

					$scope.results=[{name:"no results!"}];


			}
			function successCallback(response) {
				$scope.results = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}
			

		};
		$scope.getdata= function(id)
		{
			var x = $http.get(url+'movie/' + id +'/credits?api_key='+key);
			x.then(successCallback, errorCallback);
	
		
			function successCallback(response) {
				$scope.result = response.data.cast;
				console.log("success", response.data.results);
			}

			function errorCallback(response) {
				console.log("error", response.data.results);
			}
			
		};

	}

})();