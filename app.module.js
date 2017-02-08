var app = angular.module('MyApp', []);
app.controller('MyController', function($scope, $http){
  
// Initialization of the scope variables. 
 $scope.cityName = "Houston";
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+ $scope.cityName ;
    
//APPID =10b41df051ddd79c0d34ca9b8c763d43
$http.get(url +"&APPID=10b41df051ddd79c0d34ca9b8c763d43")
        .success(function(response) {
        console.log(response);
        $scope.Data = response.coord;
        $scope.city = response.name;
    
     //converting temp from kelvin to celcius
    $scope.tmp = response.main.temp - 272.15;
    $scope.minTemp = response.main.temp_min - 272.15;
    $scope.maxTemp = response.main.temp_max - 272.15;
    $scope.imgCode = response.weather[0].icon;
    $scope.cloudiness = response.weather[0].description;
    //console.log(response.weather[0].description);
    $scope.windspeed = response.wind.speed;
    //console.log($scope.windspeed);
    $scope.humidity = response.main.humidity;
    $scope.pressure = response.main.pressure/100;
    $scope.sunrise = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
    $scope.sunset = new Date(response.sys.sunset * 1000).toLocaleTimeString();
});

    $scope.celciusGet = function(){
var url = "http://api.openweathermap.org/data/2.5/weather?q="+ $scope.cityName ;
    
//APPID =10b41df051ddd79c0d34ca9b8c763d43
$http.get(url +"&APPID=10b41df051ddd79c0d34ca9b8c763d43")
        .success(function(response) {
        console.log(response);
        $scope.Data = response.coord;
        $scope.city = response.name;
    
     //converting temp from kelvin to celcius
    $scope.tmp = response.main.temp - 272.15;
    $scope.minTemp = response.main.temp_min - 272.15;
    $scope.maxTemp = response.main.temp_max - 272.15 ;
    $scope.imgCode = response.weather[0].icon;
    $scope.cloudiness = response.weather[0].description;
    //console.log(response.weather[0].description);
    $scope.windspeed = response.wind.speed;
    //console.log($scope.windspeed);
    $scope.humidity = response.main.humidity;
    $scope.pressure = response.main.pressure/100;
    $scope.sunrise = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
    $scope.sunset = new Date(response.sys.sunset * 1000).toLocaleTimeString();

    //logic for kelvin to fahren
   $scope.farGet = function(){
    var kelvin = response. main.temp;
    $scope.tmp = 9/5 *(kelvin-273) + 32;
     $scope.minTemp = 9/5 * (response.main.temp_min -273) + 32;
     $scope.maxTemp = 9/5 * (response.main.temp_max-273) + 32;
   }
   
});
}
    
});
