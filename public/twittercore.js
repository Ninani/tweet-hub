
var twitterModule = angular.module('twitterModule', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all categories and show them
    $http.get('/api/categories')
        .success(function(data) {
            $scope.categories = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createCategory = function() {
        $http.post('/api/categories', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.categories = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.showCategory = function(id, category) {
        $scope.thisCategory = category;
        $http.get('/api/thiscategory/' + id)
            .success(function (data) {
                $scope.tweets = data;
                console.log(data);
            })
            .error();
    };
    
    $scope.deleteCategory = function(id) {
        $http.delete('/api/categories/' + id)
            .success(function(data) {
                $scope.categories = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}