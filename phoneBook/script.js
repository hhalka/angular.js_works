$(function() {
    var app = angular.module("phoneBook", []);
    
    app.controller("mainCtrl", function() {
        this.showBlock = false;
        this.showAddWindow = false;
        this.showChangeWindow = false;
        this.data = [
            {
                firstName: "Mary",
                lastName: "Brown",
                number: "0987654321"
            },{
                firstName: "John",
                lastName: "Doe",
                number: "0951234678"
            },{
                firstName: "Bob",
                lastName: "Smith",
                number: "0551234678"
            }
        ];
        
        this.searchText = "";
        this.itemToChange;
        this.changedItemIndex;
        this.itemToAdd = {firstName: "", lastName: "", number: ""};
        
        this.openAddWindow = function() {
            this.showBlock = true;
            this.showAddWindow = true;
        }
        
        this.addItem = function() {
            this.data.push(this.itemToAdd);
            this.showBlock = false;
            this.showAddWindow = false;
        }
        
        this.removeItem = function(item) {
            this.data.splice(this.data.indexOf(item), 1);
        }
        
        this.openChangeWindow = function(item) {
            this.showBlock = true;
            this.showChangeWindow = true;
            this.changedItemIndex = this.data.indexOf(item);
            console.log(this.data.indexOf(item));
            this.itemToChange = angular.copy(item);
        };
        
        this.saveChanged = function() {
            this.data[this.changedItemIndex] = this.itemToChange;
            this.showBlock = false;
            this.showChangeWindow = false;
        };
        
        this.setSort = function(field) {
            this.sortField = field;
        }
    });
    
    app.controller("orderCtrl", function() {
        this.sortField = "firstName";
        this.reverse = false;
        this.sortBy = function(sortField) {
            this.reverse = (this.sortField === sortField)? !this.reverse : false
            this.sortField = sortField;
        };
    });
})