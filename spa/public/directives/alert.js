///    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.2/angular.min.js"></script>

angular.module('mplotkin.directives', [])
.directive('mpAlert', function () {
    return {
        controller: function(alert, $scope){
            $scope.vm = alert;
        },
        template:   '<div class="alert alert-danger" ng-if="vm.msg">'
                +   '<button ng-click="vm.msg = null" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                +   '{{vm.msg}}'
                +   '</div>'
    };
}).service('alert', function(){
        var self = this;
        self.msg = null;
        self.show = function(msg){
            self.msg = msg;
        }
})
