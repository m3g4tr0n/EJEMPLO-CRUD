
var app = angular.module("Myapp",[]);

    app.controller("ContactCtrl", function($scope){
        
        var uId = 3;
        
        $scope.newContact = null;
        $scope.contacts = [{ id: 1, name: "arturo mata", email:"arturo@gmail.com", phone: 193847620 },
                           { id: 2, name: "pepe el mago", email:"pepe@gmail.com", phone: 309487274 },
                           { id: 3, name: "jorge el sesech", email:"jorge@gmail.com", phone: 443998764 },                          
                          ];

        $scope.saveContact = function(){
            if ($scope.newContact.id == null){
               uId = uId + 1;
               $scope.newContact.id = uId;
               $scope.contacts.push($scope.newContact);
            }
            else{
                for(i in $scope.contacts){
                    if($scope.contacts[i].id == $scope.newContact.id){
                        $scope.contacts[i] = $scope.newContact;
                    }
                }
            }
        $scope.newContact = null;
        }
        

        $scope.edit = function(id){
            for (var i in $scope.contacts){
                if($scope.contacts[i].id == id){
                    $scope.newContact = angular.copy($scope.contacts[i]);
                }
            }

        }

        $scope.delete = function(id){
            for(var i in $scope.contacts){
                if ($scope.contacts[i].id == id){
                    $scope.contacts.splice(i, 1);
                    $scope.newContact = {};
                }
            }
        }


    });