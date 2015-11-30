        angular.module('app')
        .controller('food', function($http, alert, panel){
            var self = this;
            
            $http.get("/food")
            .success(function(data){
                self.rows = data;
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
                $http.post('/food/', row)
                .success(function(data){
                    data.isEditing = false;
                    self.rows[index] = data;
                }).error(function(data){
                    alert.show(data.code);
                });
            }
            self.delete = function(row, index){
                panel.show( {
                    title: "Delete a food",
                    body: "Are you sure you want to delete " + row.Name + "?",
                    confirm: function(){
                        $http.delete('/food/' + row.id)
                        .success(function(data){
                            self.rows.splice(index, 1);
                        }).error(function(data){
                            alert.show(data.code);
                        });
                    }
                });
            }
            
        });
