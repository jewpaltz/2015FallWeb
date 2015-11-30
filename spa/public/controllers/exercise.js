        angular.module('app')
        .controller('exercise', function($http, alert, panel){
            var self = this;
            
            $http.get("/exercise")
            .success(function(data){
                self.rows = data;
            });
            $http.get("/keywords")
            .success(function(data){
                self.keywords = data;
            });
            $http.get("/person")
            .success(function(data){
                self.persons = data;
            });
            
            self.create = function(){
                self.rows.push({ isEditing: true });
            }
            self.edit = function(row, index){
                row.isEditing = true;
            }
            self.save = function(row, index){
                $http.post('/exercise/', row)
                .success(function(data){
                    data.isEditing = false;
                    self.rows[index] = data;
                }).error(function(data){
                    alert.show(data.code);
                });
            }
            self.delete = function(row, index){
                panel.show( {
                    title: "Delete a exercise",
                    body: "Are you sure you want to delete " + row.Name + "?",
                    confirm: function(){
                        $http.delete('/exercise/' + row.id)
                        .success(function(data){
                            self.rows.splice(index, 1);
                        }).error(function(data){
                            alert.show(data.code);
                        });
                    }
                });
            }
            
        });
