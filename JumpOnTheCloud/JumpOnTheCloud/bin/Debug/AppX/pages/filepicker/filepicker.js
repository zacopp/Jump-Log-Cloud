(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/filepicker/filepicker.html", {
        ready: function (element, options) {
            var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
            openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
            openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
            openPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);

            document.querySelector(".filepicker #open").onclick = function (e) {
                openPicker.pickSingleFileAsync().then(function (file) {
                    var result = document.querySelector(".filepicker #result");
                    if (file) {
                        var img = document.querySelector(".filepicker img");
                        img.src = URL.createObjectURL(file);
                        img.style.display = "block";
                        result.innerText = "";
                    } else {
                        result.innerText = "No file picked";
                    }
                });
            };

            // conditional showing of button

            //



        }
    });
})();
