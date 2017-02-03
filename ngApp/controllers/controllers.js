var photoapp;
(function (photoapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(filepickerService, $scope) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            HomeController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            HomeController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('photoapp').controller('HomeController', HomeController);
    })(Controllers = photoapp.Controllers || (photoapp.Controllers = {}));
})(photoapp || (photoapp = {}));
