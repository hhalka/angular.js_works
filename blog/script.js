$(function(){
    var app = angular.module("blogApp", []);
    
    app.controller("blogCtrl", function(){
        this.showBlock = true;
        this.showLogin = true;
        this.showChangeWindow = false;
        this.mistake = false;
        this.registered = {name: "halka", pwd: "mypwd"};
        
        this.user = {name: "", pwd: ""};
        this.currentUser;
        this.theme = "";
        this.message = "";
        this.changedIndex;
        this.changed;
        this.posts = [{user: this.registered, theme: "new post", message: "I like angular.", date: new Date("October 13, 2014 11:13:00")}];
        
        this.checkUser = function(){
            if(this.user.name === this.registered.name && this.user.pwd === this.registered.pwd) {
                this.currentUser = this.registered;
                this.showBlock = false;
                this.showLogin = false;
            }else {
                this.error = true;
            }
        };
        
        this.close = function() {
            this.currentUser = {name: "guest"};
            this.showBlock = false;
            this.showLogin = false;
        };
        
        this.sendPost = function() {
            var newPost = {user: this.currentUser, theme: this.theme, message: this.message, date: new Date()};
            this.posts.unshift(newPost);
            this.theme = "";
            this.message = "";
        };
        
        this.removePost = function(post) {
            this.posts.splice(this.posts.indexOf(post), 1);
        };
        
        this.changePost = function(post) {
            this.changedIndex = this.posts.indexOf(post);
            this.showBlock = true;
            this.showChangeWindow = true;
            this.changed = angular.copy(post);
        };
        
        this.saveChanged = function() {
            this.posts[this.changedIndex] = this.changed;
            this.showBlock = false;
            this.showChangeWindow = false;
        }
    });
});