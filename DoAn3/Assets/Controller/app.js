var app = angular.module('myapp', []);

app.controller('ListProductCtrl', ListProductCtrl);
ListProductCtrl.$inject = ["$scope", "$http"];
function ListProductCtrl($scope, $http) {
    $scope.ListCategory;
    function getProductcategory() {
        $http({
            method: 'GET',
            url: '/Home/Loaisanpham',
        }).then(function successCallback(response) {
            $scope.ListCategory = response.data;
        }, function (error) {
            console.log(error);
        });

        
    }
    getProductcategory();
}


app.controller("ListProductNews", ListProductNews);
ListProductNews.$inject = ["$scope", "$http"];
function ListProductNews($scope,$http) {
    function getProductNews() {
        $scope.listSp;
        debugger
        $http({
            method: 'GET',
            url: '/Home/getProductNews',
        }).then(function successCallback(response) {
            $scope.listSp = response.data;
        }, function (error) {
            console.log(error);
        });
    }
    getProductNews();
}
app.controller("ListProductShale", ListProductShale);
ListProductShale.$inject = ["$scope", "$http"];
function ListProductShale($scope, $http) {
    function getProductShale() {
        $scope.listSp;
        $http({
            method: 'GET',
            url: '/Home/getProductShale',
        }).then(function successCallback(response) {
            $scope.listSp = response.data;
        }, function (error) {
            console.log(error);
        });
    }
    getProductShale();
}


app.controller("ProductCategoryDetailCtrl", ProductCategoryDetailCtrl);
ProductCategoryDetailCtrl.$inject = ["$scope", "$http"];
function ProductCategoryDetailCtrl($scope, $http) {
    $scope.listproduct;

    function getProductCategoryDetail() {
        $http({
            method: 'GET',
            url: '/Product/GetListOfProductByType',
        }).then(function succcessCallback(response) {
            $scope.listproduct = response.data;
            console.log(response.data);
        }, function (error) {
            console.log(error);
        });
    }
    getProductCategoryDetail();
}
app.controller("ProductDetailCtrl", ProductDetailCtrl);
ProductDetailCtrl.$inject = ["$scope", "$http"];
function ProductDetailCtrl($scope, $http) {
    $scope.ProductItem;
    function getProductDetailContrl() {
        $http({
            method: 'GET',
            url: '/Product/GetProductDetail',
        }).then(function succcesscallback(response) {
            $scope.ProductItem = response.data;
            console.log(response.data);
        }, function (error) {
            Console.log(error);
        });
    } getProductDetailContrl();
}