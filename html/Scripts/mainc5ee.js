new WOW().init();
$(document).ready(function(){
	$(".form input[type=checkbox]").uniform();
	
	$('label').each(function () {
		if(!$(this).parent().hasClass('radio-check')){
			$(this).wrapInner("<span></span>");
		};
		$(this).html($(this).html().replace('*', '<span>*</span>'));
	})
	$('.blank').each(function(){$(this).attr('target', '_blank');})
	
	$('.form select').selectpicker({
		width : '100%'
		//mobile: false
	});
	
	$('.boxes .box').responsiveEqualHeightGrid();
	$('.table:not(.default-table) table').not('.account-table table').stacktable();
	
	$('#nav > ul > li:last').addClass("last-child");
	$('.hp-features .item:last').addClass("last-child");
	
	$('.glossary').tableAccordion();
    
	$('.input input, .input textarea').focusin(function(){
		$(this).parent().addClass('focus');
	});
	$('.input input, .input textarea').focusout(function(){
		$(this).parent().removeClass('focus')
	});
	initDropDown();
	updateDrops();
	initPopups();
	
    $('.top-panel a.link').on('click', function() {
		var active = $(this).hasClass('active');
		$('.top-panel .drop:visible').slideUp().prev().removeClass('active');
		if (active) {
			$(this).removeClass('active');
			$(this).next().slideUp();
		} else {
			$(this).addClass('active');
			$(this).next().slideDown();
		}
		return false;
	})
	$('.lang-nav .drop a').on('click', function( e ) {
        e.preventDefault();
        $el = $(this);
        $('a.lng span').html($('span', $el).html());
        $('a.lng img').attr('src', $('img', $el).attr('src'));
        setTimeout(function() {
            window.open($el.attr('href'), '_self');
        }, 100)
    });
    $('.lang-nav .drop a').on('click', function( e ) {
        $('a.lng').html($(this).html());
        $('.lang-nav .drop').slideUp();
        if ($('.top-panel .link').hasClass('active')) {
            $('.top-panel .link').removeClass('active');
        }
    });
	$('body').on('click', function (evt) {
        if (!$(evt.target).parents().hasClass('header-panel')) {
            if ($('.top-panel .link').hasClass('active')) {
                $('.top-panel .link').removeClass('active');
            }
            $('.top-panel .drop').slideUp();
        }
    });

    (function() {
        var featuresItems = $('.hp-features .item');
    
        if ( featuresItems.length ) {
            $('body').on('click', function(e) {
                if ( !$(e.target).parents('.hp-features').length ) {
                    featuresItems.removeClass('hover');
                }
            })
            featuresItems.on( "mouseenter", function() {
                featuresItems.removeClass('hover');
                $(this).addClass('hover');
            }).on('mouseleave', function() {
                $(this).removeClass('hover');
            })
            featuresItems.on('click', function(e) {
                if ( !$(this).hasClass('hover') ) {
                    featuresItems.removeClass('hover');
                    $(this).addClass('hover');
                }
            })
            featuresItems.find('a.text').on('click', function(e) {
                if ( !$(this).parent().hasClass('hover') ) {
                    e.preventDefault();
                    return false;
                } else {
                    e.stopImmediatePropagation();
                    $(this).parent().removeClass('hover');
                }
            })
        }
    })()

	if ($.browser.msie && $.browser.version <= 9) {$('input:text, input:password, textarea').placeholder();}
})
function initDropDown(){
    var nav = $('nav , .footer-nav');
    if (nav.length > 0) {
        var lis = nav.find('li');
            lis.each(function(){
                if ($(this).find('ul').length > 0) {
                $(this).find('a').first().append("<i />");
                $(this).attr('class', ($(this).attr('class') || '') + ' has-drop-down');
                $(this).find('a').first().attr('class', ($(this).find('a').first().attr('class') || '') + ' has-drop-down-a' );
            }
        })
    }
}

function updateDrops() {
    //navigation clone
    $('.mb-drop.nav-drop nav').html( $('#nav').html() )
    //languages clone
    $('.mb-drop.tools-drop').html($('.lang-nav .drop .direction-area').html());
    //account clone
    $('.mb-drop.account-drop').html($('.account-nav .drop .direction-area').html());
    
    $('.mb-control.nav-control').on('click', function() {
        toggleDrop($('.mb-drop.nav-drop'), $(this));
        return false;
    })
    $('.mb-control.tools-control').on('click', function() {
        toggleDrop($('.mb-drop.tools-drop'), $(this));
        return false;
    })
    $('.mb-control.account-control').on('click', function() {
        toggleDrop($('.mb-drop.account-drop'), $(this));
        return false;
    })
	//$('.mb-control.login-control').on('click', function() {
    //    toggleDrop($('.mb-drop.login-drop'), $(this));
    //    return false;
    //})

    $('.mb-drop.nav-drop').on('click', function(e) {
        var target = $(e.target),
        drop = target.parent().parent().find('>.drop');
        if ( target[0].tagName.toLowerCase() == 'i' ) {
            e.stopImmediatePropagation();
            if ( drop.length > 0 ) {
				var parentDrops = drop.parents('.drop');
                $(this).find('.drop').not( parentDrops ).each(function() {
                    $(this).slideUp();
                    $(this).parent().removeClass('nav-expanded');
                })
                if ( drop.is(':visible') ) {
                    drop.slideUp();
                    target.parent().parent().removeClass('nav-expanded');
                } else {
                    drop.slideDown();
                    target.parent().parent().addClass('nav-expanded');
                }
            };
            return false;
        } 
    })
	 function toggleDrop( drop, context ) {
        $('.mb-drop').not(drop).slideUp();
        $('.mb-control').removeClass('active');
        if ( drop.is(':visible') ) {
            drop.slideUp();
        } else {
            context.addClass('active');
            drop.slideDown();
        }
    }
	$('body').on('click', function (evt) {
        if (!$(evt.target).parents().hasClass('mb-header')) {
            if ($('.mb-header .mb-control').hasClass('active')) {
                $('.mb-header .mb-control').removeClass('active');
            }
            $('.mb-header .mb-drop').slideUp();
        }
    });
	$('.footer-nav').on('click', function(e) {
        var target = $(e.target),
        drop = target.parent().parent().find('>ul');
        if ( target[0].tagName.toLowerCase() == 'i:not([class*="ico-"])' ) {
            e.stopImmediatePropagation();
            if ( drop.length > 0 ) {
              	var parentDrops = drop.parents('ul');
                $(this).find('ul').not( parentDrops ).each(function() {
                    $(this).slideUp();
                    $(this).parent().removeClass('nav-expanded');
                })
                if ( drop.is(':visible') ) {
                    drop.slideUp();
                    target.parent().parent().removeClass('nav-expanded');
                } else {
                    drop.slideDown();
                    target.parent().parent().addClass('nav-expanded');
                }
            };
            return false;
        } 
    })
}
(function($) {
$.fn.tableAccordion = function() {
    var items = $(this);
    return $(this).find('.item h3').each(function() {
        $(this).on('click', function() {
            var slideArea = $(this).parent().find('.slidetext');
            if (slideArea.is(':visible')) {
                $('.item .slidetext').slideUp().parent().removeClass('active');
            } else {
                $('.item .slidetext').not(slideArea).each(function() {
                    if ($(this).is(':visible')) {
                        $(this).css('display', 'block');
                    }
                    $(this).slideUp().parent().removeClass('active')
                })
                slideArea.slideDown().parent().addClass('active')
            }
        })
    })
};
  $.fn.equalHeight = function(){
    var heights = [];
    $.each(this, function(i, element){
      $element = $(element);
      var element_height;
      var includePadding = ($element.css('box-sizing') == 'border-box') || ($element.css('-moz-box-sizing') == 'border-box');
      if (includePadding) {
        element_height = $element.outerHeight();
      } else {
        element_height = $element.height();
      }
      heights.push(element_height);
    });
    this.css('height', Math.max.apply(window, heights) + 'px');
    return this;
  };
  $.fn.equalHeightGrid = function(columns){
    var $tiles = this;
    $tiles.css('height', 'auto');
    for (var i = 0; i < $tiles.length; i++) {
      if (i % columns === 0) {
        var row = $($tiles[i]);
        for(var n = 1;n < columns;n++){
          row = row.add($tiles[i + n]);
        }
        row.equalHeight();
      }
    }
    return this;
  };
  $.fn.detectGridColumns = function() {
    var offset = 0, cols = 0;
    this.each(function(i, elem) {
      var elem_offset = $(elem).offset().top;
      if (offset === 0 || elem_offset == offset) {
        cols++;
        offset = elem_offset;
      } else {
        return false;
      }
    });
    return cols;
  };
  $.fn.responsiveEqualHeightGrid = function() {
    var _this = this;
    function syncHeights() {
      var cols = _this.detectGridColumns();
      _this.equalHeightGrid(cols);  
    }
    $(window).bind('resize load', syncHeights);
    syncHeights();
    return this;
  };
  $.fn.stacktable = function(options) {
    var $tables = this,
        defaults = {id:'mobile-table',hideOriginal:true},
        settings = $.extend({}, defaults, options);

    return $tables.each(function() {

      var $stacktable = $('<table class="'+settings.id+'"><tbody></tbody></table>');
      if (typeof settings.myClass !== undefined) $stacktable.addClass(settings.myClass);
      var markup = '';
      var indicator = true;
      $table = $(this);
      $table.addClass('desktop-table');
      $topRow = $table.find('tr').eq(0);
      $table.find('th').each(function() {
      var html = $(this).html();
        if(html == ' ' || html == '&nbsp;'){
            $(this).html('');
        }   
      });
      $table.find('tr').each(function(index,value) {
        

        if ( index !== 0 ) {
          if ( $('th, td', $(this)).length == 1 && $('th, td', $(this)).attr('colspan') && $('th, td', $(this)).attr('colspan') != '1') {
            var colspan = $('th, td', $(this)).attr('colspan'),
                html = $('th, td', $(this)).html();

            $(this).find('td,th').each(function(index,value) {
              indicator = index === 0 ? !indicator : indicator;
              var classname = indicator ? 'odd' : ''
              if ($(this).html() !== ''){
                  markup += '<tr class="' + classname + '">';
                  $topRow.find('td,th').each(function(index) {
                    markup += '<td class="st-key">' + $(this).html() + '</td>';
                    if ( index === 0 ) {
                      markup += '<td class="st-val" rowspan="' + colspan + '">' + html + '</td>';
                    }
                    markup += '</tr>';
                  })
              }
            });
            return;
          }
          $(this).find('td,th').each(function(index,value) {
            indicator = index === 0 ? !indicator : indicator;
            var classname = indicator ? 'odd' : ''
            if ($(this).html() !== ''){
                markup += '<tr class="' + classname + '">';
                var dblCol = "colspan=2";
                var dblColClass = "st-dbl";
                if ($topRow.find('td,th').eq(index).html()){
                  markup += '<td class="st-key">'+$topRow.find('td,th').eq(index).html()+'</td>';
                  dblCol = '';
                  dblColClass = '';
                } else {
                  //markup += '<td class="st-key"></td>';
                  //dblCol = ''
                }
                markup += '<td class="st-val ' + dblColClass + '"' + dblCol + '>'+$(this).html()+'</td>';
                markup += '</tr>';
            }
          });
        }
      });
      $stacktable.append($(markup));
      $table.before($stacktable);
      if (!settings.hideOriginal) $table.show();
    });
  };

})(jQuery);
function initPopups() {
    var _zIndex = 1000;
    var _fadeSpeed = 200;
    var _faderOpacity = 0.5;
    var _faderBackground = '#000';
    var _faderId = 'popup-overlay';
    var _closeLink = '.close, .btn-close';
    var _fader;
    var _lightbox = null;
    var _ajaxClass = 'ajax-load';
    var _openers = jQuery('.open-popup');
    var _page = jQuery(document);
    var _minWidth = jQuery('body > div:eq(0)').outerWidth();
    var _scroll = false;
    var counter = 0;

    // init popup fader
    _fader = jQuery('#' + _faderId);
    if (!_fader.length) {
        _fader = jQuery('<div />');
        _fader.attr('class', _faderId);
        jQuery('body').append(_fader);
    }
    _fader.css({
        opacity: _faderOpacity,
        backgroundColor: _faderBackground,
        position: 'fixed',
        overflow: 'hidden',
        display: 'none',
        top: 0,
        left: 0,
        zIndex: _zIndex
    });

    function LoadPlayer(src, options) {
       var windowHeight = $(window).height() - 500,//50px it is additional spaces from top and bottom to display X button
            windowWidth = $(window).width() - 50;//50px - it is additional space from left and right sides to display X button

        $("#popup-media").empty().append('<iframe style="width: ' + options.width + ';height:' + options.height + '" width="702" height="395" src="' + src + '" frameborder="0" allowfullscreen></iframe><a href="#" class="close">close</a>');

        if (options.height > windowHeight) {
            $('#popup-media').css('height', windowHeight + 'px');
        } else {
            $('#popup-media').css('height', options.height);
        }
        if (options.width > windowWidth) {
            $('#popup-media').css('width', windowWidth + 'px');
        } else {
            $('#popup-media').css('width', options.width);
        }
        var lbWidth = $("#popup-media").width(),
            lbHeihgt = $("#popup-media").height();
        $("#popup-media").css({'left': '50%', 'top': '50%', 'position': 'fixed', 'margin-left': -lbWidth/2 + 'px', 'margin-top': -lbHeihgt/2 + 'px'});
        _lightbox.off('click.close');
        _lightbox.on('click.close', _closeLink, function () {
            toggleState(false);
            _lightbox.empty();
            return false;
        });
    }
    window.positionLightbox = function positionLightbox() {
        if (_lightbox) {
            var _windowHeight = jQuery(window).height();
            var _windowWidth = jQuery(window).width();
            var _lightboxWidth = _lightbox.outerWidth();
            var _lightboxHeight =  _lightbox.outerHeight();
            var _pageHeight = _page.height();

            _fader.css('width', '100%');
            if (_windowHeight < _pageHeight) _fader.css('height', _pageHeight);
            else _fader.css('height', _windowHeight);

            _lightbox.css({
                position: 'absolute',
                top: '50%',
                zIndex: (_zIndex + 1)
            });

            // vertical position
            if (_windowHeight > _lightboxHeight) {
                _lightbox.css({
                    'position': 'fixed',
                    'margin-top': - _lightboxHeight / 2 + 'px'
                }).removeClass('out-of-window');
            } else {
                var _faderHeight = _fader.height();
                if (_faderHeight < _lightboxHeight) _fader.css('height', _lightboxHeight);
                if (!_scroll) {
                    if (_faderHeight - _lightboxHeight > parseInt(jQuery(window).scrollTop())) {
                        _faderHeight = parseInt(jQuery(window).scrollTop())
                        _scroll = _faderHeight;
                    } else {
                        _scroll = _faderHeight - _lightboxHeight;
                    }
                }
                _lightbox.css({
                    position: 'fixed',
                    top: 0,
                    'margin-top': 0
                }).addClass('out-of-window');
            }

            // horizontal position
            if (_fader.width() > _lightbox.outerWidth()) {
                _lightbox.removeClass('left-aligned-popup').css({ 'left': '50%', 'margin-left': - _lightbox.outerWidth() / 2  });
            } else {
                _lightbox.addClass('left-aligned-popup').css({ left: 0, 'margin-left': '0' });
            };

            _lightbox.find(_closeLink).on('click', function () {
                toggleState(false);
                if (_lightbox.data('type') == 'popup-media' && !_lightbox.data('static')) {
                    _lightbox.empty();
                }
                return false;
            });
        }
    }

    // show/hide lightbox
    function toggleState(_state, opener, disableOverlay) {
        if (!_lightbox) return;
        if (_state) {
            if ( !disableOverlay ) {
                _fader.fadeIn(_fadeSpeed, function () {
                    _lightbox.fadeIn(_fadeSpeed, function() {
                      $(this).trigger('shown');
                    });
                });
            } else {
                _lightbox.fadeIn(_fadeSpeed, function() {
                  $(this).trigger('shown');
                });
            }
            /*if ( !disableOverlay ) {
                _fader.fadeIn(_fadeSpeed, function () {
                    _lightbox.fadeIn(_fadeSpeed);
                });
            } else {
                _lightbox.fadeIn(_fadeSpeed);
            }*/
            _scroll = false;
            positionLightbox();
            if (_lightbox.data('type') == 'popup-media') {
                if (opener.data('youtube-video-src') == "") {
                    alert('Please set data-youtube-video-src attribute to #' + opener.attr('id') + ' popup');
                    return;
                }
                var autoplay = opener.data('youtube-video-autoplay') === true ? '?autoplay=1' : '';
                var youtubeVideoUrl = String(opener.data('youtube-video-src')) + '' + autoplay,
                    options = {};
                options.height = opener.data('height') ? opener.data('height').toString().replace(/\D+/g, '') + 'px' : '100%';
                options.width = opener.data('width') ? opener.data('width').toString().replace(/\D+/g, '') + 'px' : '100%';
                options.poster = opener.data('poster');
                opener.attr('rel') ? loadLocalVideoPlayer(opener.attr('rel'), opener.data('autoplay'), options) : LoadPlayer(youtubeVideoUrl, options); 
            }
        } else {
            _lightbox.fadeOut(_fadeSpeed, function () {
                $(window).trigger('close.lightbox', _lightbox);
                _fader.fadeOut(_fadeSpeed);
                _scroll = false;
                if (_lightbox.hasClass('out-of-window')){
                    _lightbox.removeClass('out-of-window');
                }
                if (_lightbox.hasClass('left-aligned-popup')){
                    _lightbox.removeClass('left-aligned-popup');
                }
                if (_lightbox.data('type') == 'popup-media' && !_lightbox.data('static')) {
                    _lightbox.empty();
                }
                //$("#popup-media").find('iframe').remove();
            });
        }
    }

    // popup actions
    function initPopupActions(_obj) {
        if (!_obj.get(0).jsInit) {
            _obj.get(0).jsInit = true;
            // close link
            _obj.find(_closeLink).on('click', function () {
                _lightbox = _obj;
                toggleState(false);
                return false;
            });
        }
    }
    
    //Global function to call any popup
    window.openPopupManual = function(id, opacity, preventClosing ) {
        if ( opacity ) {
            _fader.addClass('custom-opacity');
            _fader.css({opacity: opacity});
        }
        if ( preventClosing ) {
            _fader.addClass('prevent-closing');
        }
        _lightbox = $('#' + id);
        toggleState(true, null, (opacity === 0) );
    }
    window.closePopupManual = function() {
        if (!_fader.is(':animated') ) toggleState(false);
        return false;
    }

    // lightbox openers
    _openers.each(function () {
        var _opener = jQuery(this);
        var _target = (_opener.is('a') ? _opener.attr('href') : _opener.attr('alt'));

        // popup load type - ajax or static
        if (_opener.hasClass(_ajaxClass)) {
            _opener.click(function () {
                // ajax load
                if (jQuery('div[rel*="' + _target + '"]').length == 0) {
                    jQuery.ajax({
                        url: _target,
                        type: "POST",
                        dataType: "html",
                        success: function (msg) {
                            // append loaded popup
                            _lightbox = jQuery(msg);
                            _lightbox.find('img').load(positionLightbox)
                            _lightbox.attr('rel', _target).hide().css({
                                position: 'absolute',
                                zIndex: (_zIndex + 1),
                                top: -9999,
                                left: -9999
                            });
                            jQuery('body').append(_lightbox);

                            // init js for lightbox
                            initPopupActions(_lightbox);

                            // show lightbox
                            toggleState(true);
                        },
                        error: function (msg) {
                            alert('AJAX error!');
                            return false;
                        }
                    });
                } else {
                    _lightbox = jQuery('div[rel*="' + _target + '"]');
                    toggleState(true);
                }
                return false;
            });
        } else {
            if (jQuery(_target).length) {
                // init actions for popup
                var _popup = jQuery(_target);
                initPopupActions(_popup);
                // open popup
                _opener.click(function () {
                    var opener = $(this);
                    if (_lightbox) {
                        _lightbox.fadeOut(_fadeSpeed, function () {
                            _lightbox = _popup.hide();
                            toggleState(true, opener);
                        })
                    } else {
                        _lightbox = _popup.hide();
                        toggleState(true, opener);
                    }
                    return false;
                });
            }
        }
    });

    // event handlers
    jQuery(window).resize(positionLightbox);
    //jQuery(window).scroll(positionLightbox);
    jQuery(document).keydown(function (e) {
        if (!e) evt = window.event;
        if (e.keyCode == 27) {
            toggleState(false);
        }
    })
    _fader.click(function () {
        if (!_fader.is(':animated') && !_fader.hasClass('prevent-closing') ) toggleState(false);
        return false;
    })
}