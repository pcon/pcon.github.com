/*jslint browser: true, regexp: true */
/*global angular */

var ccmApp = angular.module('agendaApp', []);

ccmApp.controller('AgendaCtrl', ['$scope', '$http', function ($scope, $http) {
	'use strict';
	$scope.loading = true;

	$http.get('schedule.json').success(function (data) {
		$scope.data = data;
		$scope.loading = false;
	});
}]);