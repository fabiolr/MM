/* global Module */

/* Magic Mirror
 * Module: ToothBrush
 *
 * By Fabio Ribeiro
 * MIT Licensed.
 */
// var tools = require('./tools');
/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("ToothBrush",{

	// Default module config.
	defaults: {
		text: "Olá Mundo!"
	},

	// getScripts: function() {

	// 	return ["/modules/TootBrush/progressBar.js"];
	// },

		start: function() {

		// var paths = ['#handle-path','#fibers1-path','#fibers2-path','#fibers3-path','#fibers4-path','#toothpaste-path'];
		// var bar = [];
		// for (var i = 0, len = paths.length; i < len; i++) {
		// 	bar[i] = new ProgressBar.Path(paths[i], {duration: 800});
		// }
		
		// i = 0
		// f(i,6);

		// function f(i,z) {
		//   if (i < z) {
		//     bar[i].animate(1.0, function() {f(i+1,z)});
		//   }
		// }



},


	// getScripts: function() {

	// 	return ["progressBar.js"];
	// },


	// Override dom generator.
	// getDom: function() {
	// 	var wrapper = document.createElement("div");
	// 	wrapper.innerHTML = bar[0];
	// 	return wrapper;
	// }


	getDom: function() {

		//var svg = require("tootbrush.svg");
		//console.log("XPTO: " + svg);
		var wrapper = document.createElement("div");
		wrapper.id = "brush";
		wrapper.innerHTML = "svg";
		// wrapper.appendChild(svg);
		return wrapper;
	},


});
