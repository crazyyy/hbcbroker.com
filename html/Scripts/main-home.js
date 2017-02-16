$(document).ready(function(){
	$('.quote__container').initQuotes({
    	updateInterval: 4000,
    	liMarqueOpts: {
    		circular: true,
    		loop: -1,
    		direction: 'left',
    		scrollamount: 50,
    		hoverstop: false
    	}
    });
	initQuotesGrid() ;
})
function initQuotesGrid()  {
    var containerName = $(this);
    var updateInterval = 5000;
    var containerName = "quote__grid";

    function updateQuotes()  {
        var xmlhttp;
        if (window.XMLHttpRequest)  {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (document.getElementsByClassName(containerName).length > 0) {
                    document.getElementsByClassName(containerName)[0].innerHTML=xmlhttp.responseText;
                }
            }
        }
        xmlhttp.open("GET", "/Widgets/GetQuotes/", true);
		xmlhttp.timeout = updateInterval - 1000;
        xmlhttp.send();
    }
    var intervalUpdateQuotes = setInterval(updateQuotes, updateInterval);
}
$.fn.initQuotes = function (opts) {
	return $(this).each(function () {
		var container = $(this),
            initialized = false;

		function retrieveQuotes() {
			var xmlhttp;
			if (window.XMLHttpRequest) {   //IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			}
			else {                                     //IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					updateQuotes(xmlhttp.responseText);
				}
			}
			xmlhttp.open("GET", "/Widgets/GetQuotes/", true);
			xmlhttp.timeout = opts.updateInterval - 1000;
			xmlhttp.send();
		}

		function updateQuotes(response) {
			var tempContainer = $('<div></div>'),
                quotesHtml = '';

			response = response.replace(/\s+(<)/ig, '<');
			//console.log(response);
			tempContainer.html(response);
			quotesHtml = tempContainer.find('.quotes').html();

			if (initialized) {
				container.find('.str_origin, .str_move_clone').find('>.quote').remove();
				container.find('.str_origin, .str_move_clone').prepend(quotesHtml);
				updateClonsWidth();
			} else {
				container.html(quotesHtml).liMarquee(opts.liMarqueOpts);
				updateClonsWidth();
				initialized = true;
			}
		}
		function updateClonsWidth() {
			container.find('.str_move_clone').each(function () {
				$(this).width(container.find('.str_origin').outerWidth());
			})
		}
		retrieveQuotes();
		$(window).on('load', function () {
			updateClonsWidth();
		})
		var intervalUpdateQuotes = setInterval(retrieveQuotes, opts.updateInterval);
	});
}