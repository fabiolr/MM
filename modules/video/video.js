/* global Module */

/* Magic Mirror
 * Module: video
 *
 * By Fabio Ribeiro
 * MIT Licensed.
 * 
 * Module to discover CNN10 news feed URL, and use to bring an iFrame when summoed.
 */

Module.register("video",{
		// Default module config.
		defaults: {
				height:"300px",
				width:"100%"
		},

    start: function() { 
			this.display = false;
    },

	// Override dom generator.
	getDom: function() {

		var wrapper = document.createElement("div");

		// this code will generate the URL for the most recent CNN 10 news briefing video

		if (this.display) {


			this.date = new Date();

			ad = 1

			// first date of the URL must be today if weekday or last friday if weekend

			if (this.date.getDay() == 0) { 
				ad = 3; 
			}

			else if (this.date.getDay() == 6) {
				ad = 2; 
			}

			// the first date of a URL
			firstDate = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()) - (ad * (1000*60*60*24)));
			firstYear = firstDate.getFullYear();
			firstMonth = firstDate.getMonth();
			firstDay = firstDate.getDate();

			// the second date on the URL is one day after the first...
			secondDate = new Date(+new Date(firstYear, firstMonth, firstDay) + (1000*60*60*24));

			secondMonth = secondDate.getMonth();
			secondDay = secondDate.getDate();
			firstMonth++;
			secondMonth++;

			// add leading zeros
			firstMonth = ("0" + firstMonth).slice(-2);
			secondMonth = ("0" + secondMonth).slice(-2);
			firstDay = ("0" + firstDay).slice(-2);
			secondDay = ("0" + secondDay).slice(-2);


			this.url = "http://pmd.cdn.turner.com/cnn/big//cnn10/" + firstYear + "/" + firstMonth + "/" + firstDay + "/" + "ten-" + secondMonth + secondDay + ".cnn_cnn_iphone_cell.mp4"
			
			// other uncommon URL patterns. investigate when they occur to code logic...
			//this.url = "http://pmd.cdn.turner.com/cnn/big//cnn10/" + year + "/" + month + "/" + vday + "/" + "ten-" + month + vpday + "b.cnn_cnn_iphone_cell.mp4"
			//this.url = "http://cnnios-f.akamaihd.net/i/cnn/big/cnn10/" + year + "/" + month + "/" + vday + "/ten-" + month + vpday + "b.cnn_1372130_ios_,440,650,840,1240,.mp4.csmil/master.m3u8?__b__=650";
			console.log("video - URL formulated to: " + this.url);

			// create an iframe and wrap it calling the new URL

			var iframe = document.createElement("IFRAME");
			iframe.style = "border:0"
			iframe.width = this.config.width;
			iframe.height = this.config.height;
			iframe.id = 'videowrapper';
			iframe.scrolling = "no";
			iframe.src =  "/modules/video/public/video.html?u=" + this.url;
			console.log("Video - iframe created");
			return iframe;
		}

		else {

			return wrapper;

		}

	},


	notificationReceived: function (notification, payload) {


		// if(notification === "DOM_OBJECTS_CREATED") {
		// 	console.log("video - got a notification DOM_OBJECTS_CREATED");
		// 	this.updateDom();
		// }

		if(notification === "HIDE_NEWS") {
			console.log("video - got a notification HIDE_NEWS");
			this.display = false;
			this.updateDom(500);
		}

		if(notification === "SHOW_NEWS") {
			console.log("video - got a notification SHOW_NEWS");
			this.display = true;
			this.updateDom(500);

		}
		
	},

	socketNotificationReceived: function(notification, payload) {
		Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		



	},

});
