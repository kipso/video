var app = angular.module("video",[]);
app.controller('MainCtrl',function MainCtrl($scope,$http){
	$http.get('vod_latest.json')
		.then(function(res){
			$scope.vod_latest = res.data;
			$scope.mainUrl=$scope.vod_latest[0].video_url;
		});
	$http.setVideo = function(v){
		$scope.mainUrl=v.video_url;
		$scope.$apply();
	}
});
