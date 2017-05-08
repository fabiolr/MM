/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("helloworld",{

	// Default module config.
	defaults: {
		text: "Olá Mundo!"
	},


	init: function(){

		this.timeToHide();

	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},

	timeToHide: function() {

	var self = this;

    v = setTimeout(function (){self.hide()}, 10000);

    return v;

	},

	
	
});