// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var client = new WindowsAzure.MobileServiceClient(
        "https://jumponthecloud.azure-mobile.net/",
        "cIjTaRDrRRmiTLnloTyXAAkEuWyZdU32");

    WinJS.UI.Pages.define("/CreateJump/createJump.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.

        
        ready: function (element, options) {
            // TODO: Initialize the page here.

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.

            cJtopicker.onclick = function () {
                ////grab variables and put in app variables
				//if(document.foreign.isforeign == '0')
				//{ document.foreign.country = '00'; }
				
				//// get total jumps
				
				////get next jump number from sql!!!!! TODO

				////test code!!!
				//app.jumpnum = 1;

				//app.jumpstring = app.jumpnum + document.combat.combat + document.time.year + document.time.month + document.time.day + document.time.daynight + document.bird.bird + document.foreign.country;
                WinJS.Navigation.navigate("/pages/filepicker/filepicker.html")
            }

            //cJsnapshot.onclick = function () {
            //    //grab variables and put in app variables
            //    WinJS.Navigation.navigate("/pages/filepicker/filepicker.html")
            //}

        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }

    });


})();
