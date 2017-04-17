/* global Module */

/* Magic Mirror
 * Module: video
 *
 * By Fabio Ribeiro
 * MIT Licensed.
 */

Module.register("video",{
		// Default module config.
		defaults: {
				height:"300px",
				width:"100%"
		},



	// Override dom generator.
	getDom: function() {

		this.date = new Date();
		ad = 0

		if (this.date.getDay() == 0) { 

			ad = -2; 
		}

		else if (this.date.getDay() == 6) {

			ad = -1; 
		}

		year = this.date.getFullYear();
		month = (this.date.getMonth() + 1);
		day = (this.date.getDate() - 1);
		vday = day + ad;
		vpday = vday + 1;
		month = ("0" + month).slice(-2);
		vday = ("0" + vday).slice(-2);
		day = ("0" + day).slice(-2);
		vpday = ("0" + vpday).slice(-2);
		this.url = "http://pmd.cdn.turner.com/cnn/big//cnn10/" + year + "/" + month + "/" + vday + "/" + "ten-" + month + vpday + "b.cnn_cnn_iphone_cell.mp4"
		//this.url = "http://pmd.cdn.turner.com/cnn/big//cnn10/" + year + "/" + month + "/" + vday + "/" + "ten-" + month + vpday + ".cnn_cnn_iphone_cell.mp4"
		//this.url = "http://cnnios-f.akamaihd.net/i/cnn/big/cnn10/" + year + "/" + month + "/" + vday + "/ten-" + month + vpday + "b.cnn_1372130_ios_,440,650,840,1240,.mp4.csmil/master.m3u8?__b__=650";


		console.log("video - URL formulated to: " + this.url);


		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.id = 'videowrapper';
		iframe.scrolling = "no";
		iframe.src =  "/modules/video/public/video.html?u=" + this.url;
		console.log("Video - iframe created");
		//this.hide();
		return iframe;
	},


	notificationReceived: function (notification, payload) {


		if(notification === "DOM_OBJECTS_CREATED") {
			console.log("video - got a notification DOM_OBJECTS_CREATED");
			//this.show();


		this.updateDom();
		}
	},

	socketNotificationReceived: function(notification, payload) {
		Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		if(notification === "VIDEO_URL") {
			console.log("Video received the new URL");
			this.config.url = payload;


		}



	},

});
