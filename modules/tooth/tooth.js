/* global Module */

/* Magic Mirror
 * Module: tooth
 *
 * By Fabio Ribeiro
 * MIT Licensed.
 */

Module.register("tooth",{
		// Default module config.
		defaults: {
				height:"220px",
				width:"490px"
		},

    start: function() { 

    	this.hide();
	},


	timeToHide: function() {

	var self = this;
    v = setTimeout(function (){self.hide()}, 140000);

    return v;

	},
	
	
	// Override dom generator.
	getDom: function() {

		var wrapper = document.createElement("div");


		if (this.display) {


			var iframe = document.createElement("IFRAME");
			iframe.style = "border:0"
			iframe.width = this.config.width;
			iframe.height = this.config.height;
			iframe.id = 'toothwrapper';
			iframe.scrolling = "no";
			iframe.src =  "/modules/tooth/public/tooth.html?u=" + this.url;
			console.log("Tooth - iframe created");
			this.timeToHide();
			return iframe;

		}

		else {

			return wrapper;

		}


	},


	notificationReceived: function (notification, payload) {


		if(notification === "BRUSH_TEETH") {
			console.log("tooth - got a notification BRUSH_TEETH");
			//this.sendNotification('HIDE_CAMERA');
			console.log('Tooth was summoed');
			this.display = true;
			this.show();
			this.updateDom(500);
		}

		if(notification === "DONE_BRUSHING") {
			console.log("tooth - got a notification DONE_BRUSHING");
			this.display = false;
			this.updateDom(500);

		}
		
	},

	socketNotificationReceived: function(notification, payload) {
		Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		



	},

});
