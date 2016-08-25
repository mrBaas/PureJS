"use strict"
/*** PureJS Description ***/
var PureJS = (function(){
    
    /*** Properties ***/
    var inputId =  0;
    var name    = "";
    var email   = "";
    var sms     = "";
    
    var modules = {};
    
    /*** Main Object Functions ***/
    var init = function(id, name, email, sms){
        this.inputId = id;
        this.name = name;
        this.email = email;
        this.sms = sms;
        
        this.modules = {design: designModule, gallery: galleryModule, info: infoModule};
        
        renderPageHtml();
    }
    
    var renderPageHtml = function(){
        var appElement = document.getElementById("");
        
        document.writeln("");
    }
    
    var showModule = function(moduleName){
        console.log(module);
    }
    
    var hideModule = function(moduleName){
        console.log(module);
    }
    
    var printModules = function(){
        this.moduleNames.forEach(function(value, index){
            console.log(index + ". " + value);
        })
    }
    
    
    
    /*** Modules ***/
    var designModule = function(){
        var init = function(){
            
        }
    }
    
    var galleryModule = function(){
        var init = function(){
            
        }
    }
    
    var infoModule = function(){
        var init = function(){
            
        }
    }
    
    
    
    /*** Public functions ***/
    return {
        init: init, 
        showModule : showModule,
        hideModule : hideModule,
        printModules : printModules
    }
    
})()    


// PureJS.init(1, "Jøran", "someMail@hotmail.com", "99604072");