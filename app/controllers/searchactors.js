(function() {

	var imdb = angular.module("imdb")
	imdb.controller("searchactors", searchactors);

	function searchactors($scope, $http) {
      
		$scope.appName = "The Movie DB";
		$scope.searchName = ''
		var url='http://api.themoviedb.org/3/';
		var key='d2835b6af82dc1f92d2f6235d66d3823'
		$scope.getActors = function() {
			if ($scope.searchName != '') {
				var promise = $http.get(url+'search/person?api_key='+key+'&query=' + $scope.searchName);
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
			var x = $http.get(url+'person/' + id +'/movie_credits?api_key='+key);
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