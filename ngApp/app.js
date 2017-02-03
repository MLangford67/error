var photoapp;
(function (photoapp) {
    angular.module('photoapp', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config(function ($stateProvider, $urlRouterProvider, $locationProvider, filepickerProvider) {
        filepickerProvider.setKey('AARGLmswLTmCJJxuSdd5Iz');
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: photoapp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(photoapp || (photoapp = {}));
