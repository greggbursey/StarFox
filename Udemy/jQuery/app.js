$(function () {
    // json, $.getJSON()
    var flickerAPIURL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var searchTerm = null;
    var _searchTimeout = null;
    var imagesMatchingTerm = [];
    var searchErrorParagraph = "<p style='color: red;'>Invalid, must be more than 3 characters</p>";
    var spinner = "<i class='fa fa-spinner'></i>";

    $("#flickr-search").parent().append(searchErrorParagraph);

    var imageClickFn = function () {

        var imagesOnPage = document.getElementsByTagName("img");

        imagesMatchingTerm.forEach(function (item, index) {

            if ($(imagesOnPage[index]).hasClass("active")) {
                $(imagesOnPage[index]).removeClass("active");
            }

        });

        $(this).addClass("active");
    };

    $("#flickr-search").on("input", function (event) {
        clearTimeout(_searchTimeout);
        _searchTimeout = setTimeout(function () {

            $("#flickr-container").find("img").remove();
            $("#flickr-search").parent().find("p").remove();

            var inputVal = $("#flickr-search").val();
            if (inputVal != null && inputVal.length > 3) {
                searchFlickr(inputVal, event);
            } else {
                $("#flickr-search").parent().append(searchErrorParagraph);
            }
        }, 500);
    });

    var addLoadSpinner = function (){
        $("#search-container").append(spinner);
        var ii = $("#search-container").find("i");
        $(ii).addClass("fa-spin");
    };

    var removeLoadSpinner = function (){
        $("#search-container").find("i").remove();
    };

    var searchFlickr = function (sTerm, event) {

        addLoadSpinner();

        $.getJSON(flickerAPIURL, {
            // options
            tags: sTerm,
            tagmode: "any",
            format: "json"
        }).done(function (data) {
            //--
            imagesMatchingTerm = [];
            //--
            if (data.items.length === 0) {
                alert("No Images for " + sTerm);
            }
            //--
            data.items.forEach(function (item, index) {
                imagesMatchingTerm.push(item);
                $("<img>").attr("src", item.media.m).appendTo("#flickr-container").on("click", imageClickFn);
            });
            removeLoadSpinner();
            //--
        }).fail(function () {
            alert("Ajax call failed");
        });
    };
});