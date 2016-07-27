angular
	.module('bracketApp')
	.controller('bracketCtrl', function($scope, groupSrv) {

		$scope.eRanking = groupSrv.eRanking;
		$scope.fRanking = groupSrv.fRanking;
		$scope.gRanking = groupSrv.gRanking;
		
		$scope.loadBracket = function() {
			groupSrv.createBracket()
		}

		// $scope.semifinals1 = "1E / 3F / 3G";
		// $scope.semifinals2 = "1G / 3E / 3F";

	});