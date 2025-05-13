	
jQuery( document ).on( "ready", function() {
	"use strict";
    if (jQuery(".rev_slider").length > 0)  
		initRevSlider();
	if (jQuery(".esg-grid").length > 0)  
		initEssentialGrid();
	if (jQuery(".booked-calendar").length > 0)  
		initDatepicker();
});


	
window._wpemojiSettings = {
	"baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/",
	"ext": ".png",
	"svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/",
	"svgExt": ".svg",
	"source": {
		"concatemoji": "http:\/\/hotcoffee.themerex.net\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.7.5"
	}
};
	
	
! function(a, b, c) {
	"use strict";

	function d(a) {
		var b, c, d, e, f = String.fromCharCode;
		if (!k || !k.fillText) return !1;
		switch (k.clearRect(0, 0, j.width, j.height), k.textBaseline = "top", k.font = "600 32px Arial", a) {
			case "flag":
				return k.fillText(f(55356, 56826, 55356, 56819), 0, 0), !(j.toDataURL().length < 3e3) && (k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57331, 65039, 8205, 55356, 57096), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57331, 55356, 57096), 0, 0), c = j.toDataURL(), b !== c);
			case "emoji4":
				return k.fillText(f(55357, 56425, 55356, 57341, 8205, 55357, 56507), 0, 0), d = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55357, 56425, 55356, 57341, 55357, 56507), 0, 0), e = j.toDataURL(), d !== e
		}
		return !1
	}

	function e(a) {
		var c = b.createElement("script");
		c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
	}
	var f, g, h, i, j = b.createElement("canvas"),
		k = j.getContext && j.getContext("2d");
	for (i = Array("flag", "emoji4"), c.supports = {
			everything: !0,
			everythingExceptFlag: !0
		}, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
	c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
		c.DOMReady = !0
	}, c.supports.everything || (g = function() {
		c.readyCallback()
	}, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
		"complete" === b.readyState && c.readyCallback()
	})), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}(window, document, window._wpemojiSettings);


(function() {
	"use strict";
	function addEventListener(element, event, handler) {
		if (element.addEventListener) {
			element.addEventListener(event, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, handler);
		}
	}
})();


function initRevSlider() {
	"use strict";
	
	jQuery(window).on('load',function() {
		// CUSTOM AJAX CONTENT LOADING FUNCTION
		var ajaxRevslider = function(obj) {

			// obj.type : Post Type
			// obj.id : ID of Content to Load
			// obj.aspectratio : The Aspect Ratio of the Container / Media
			// obj.selector : The Container Selector where the Content of Ajax will be injected. It is done via the Essential Grid on Return of Content

			var content = "";

			data = {};

			data.action = 'revslider_ajax_call_front';
			data.client_action = 'get_slider_html';
			data.token = '1d909e2cfa';
			data.type = obj.type;
			data.id = obj.id;
			data.aspectratio = obj.aspectratio;

			// SYNC AJAX REQUEST
			jQuery.ajax({
				type: "post",
				url: "",
				dataType: 'json',
				data: data,
				async: false,
				success: function(ret, textStatus, XMLHttpRequest) {
					if (ret.success === true)
						content = ret.data;
				},
				error: function(e) {
					console.log(e);
				}
			});

			// FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
			return content;
		};

		// CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
		var ajaxRemoveRevslider = function(obj) {
			return jQuery(obj.selector + " .rev_slider").revkill();
		};

		// EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
		var extendessential = setInterval(function() {
			if (jQuery.fn.tpessential != undefined) {
				clearInterval(extendessential);
				if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
					jQuery.fn.tpessential.defaults.ajaxTypes.push({
						type: "revslider",
						func: ajaxRevslider,
						killfunc: ajaxRemoveRevslider,
						openAnimationSpeed: 0.3
					});
					// type:  Name of the Post to load via Ajax into the Essential Grid Ajax Container
					// func: the Function Name which is Called once the Item with the Post Type has been clicked
					// killfunc: function to kill in case the Ajax Window going to be removed (before Remove function !
					// openAnimationSpeed: how quick the Ajax Content window should be animated (default is 0.3)
				}
			}
		}, 30);
	});

	
	
	
	var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
	var htmlDivCss = ".tp-caption.Hotcoffee-style-1,.Hotcoffee-style-1{color:rgba(66,57,48,1.00);font-size:85px;line-height:90px;font-weight:400;font-style:normal;font-family:Grand Hotel;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px;padding:0 8px}.tp-caption.Hotcoffee-style-2,.Hotcoffee-style-2{color:rgba(66,57,48,1.00);font-size:92px;line-height:98px;font-weight:400;font-style:normal;font-family:Grand Hotel;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px;padding:0 8px}.tp-caption.Hotcoffee-style-3,.Hotcoffee-style-3{color:rgba(66,57,48,1.00);font-size:141px;line-height:150px;font-weight:700;font-style:normal;font-family:Droid Serif;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px;padding:0 8px}.tp-caption.Hotcoffee-style-4,.Hotcoffee-style-4{color:rgba(66,57,48,1.00);font-size:65px;line-height:72px;font-weight:700;font-style:normal;font-family:Droid Serif;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:0.5px;padding:0 8px}.tp-caption.Hotcoffee-style-5,.Hotcoffee-style-5{color:rgba(66,57,48,1.00);font-size:90px;line-height:98px;font-weight:700;font-style:normal;font-family:Droid Serif;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px;padding:0 8px}.tp-caption.Hotcoffee-style-6,.Hotcoffee-style-6{color:rgba(66,57,48,1.00);font-size:104px;line-height:112px;font-weight:400;font-style:normal;font-family:Grand Hotel;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px;padding:0 8px}";
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement("div");
		htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
		document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
	}
	
	
	/******************************************
		-	PREPARE PLACEHOLDER FOR SLIDER	-
	******************************************/

	var setREVStartSize = function() {
	"use strict";
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_1_1');
			e.gridwidth = [1240];
			e.gridheight = [868];

			e.sliderLayout = "auto";
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
					f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
				}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" === e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function(e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	function revslider_showDoubleJqueryError(sliderID) {
	"use strict";
		var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
		errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
		errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
		errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
		errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
		jQuery(sliderID).show().html(errorMessage);
	}
	var tpj = jQuery;
	var rev_slider_1_1 = tpj("#rev_slider_1_1");

	var revapi1;
	tpj(window).on('load',function() {
	"use strict";
		if (rev_slider_1_1.revolution === undefined) {
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		} else {
			revapi1 = rev_slider_1_1.show().revolution({
				sliderType: "standard",
				jsFileLocation: "//hotcoffee.themerex.net/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "off",
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
				},
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: 1240,
				gridheight: 868,
				lazyType: "none",
				parallax: {
					type: "mouse",
					origo: "enterpoint",
					speed: 400,
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
					type: "mouse",
				},
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});
		
	var htmlDiv=document.getElementById("rs-plugin-settings-inline-css");
	var htmlDivCss=".tp-caption.Hotcoffee-style-7,.Hotcoffee-style-7{color:rgba(255,255,255,1.00);font-size:89px;line-height:98px;font-weight:400;font-style:normal;font-family:Droid Serif;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px;padding:0 8px}.tp-caption.Hotcoffee-style-8,.Hotcoffee-style-8{color:rgba(255,255,255,1.00);font-size:26px;line-height:32px;font-weight:400;font-style:normal;font-family:Droid Serif;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px;padding:0 8px}.tp-caption.Hotcoffee-style-9,.Hotcoffee-style-9{color:rgba(255,255,255,1.00);font-size:16px;line-height:22px;font-weight:400;font-style:normal;font-family:Droid Serif;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:0.1px;padding:0 8px;font-family:Source Sans Pro}.tp-caption.no-style,.no-style{color:rgba(0,0,0,1.00);font-size:18px;line-height:18px;font-weight:900;font-style:normal;font-family:Raleway;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:inherit;background-color:transparent;border-color:inherit;border-radius:0 0 0 0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;padding:inherit}";
	if(htmlDiv) {
		htmlDiv.innerHTML=htmlDiv.innerHTML + htmlDivCss;
	}

	else {
		var htmlDiv=document.createElement("div");
		htmlDiv.innerHTML="<style>" + htmlDivCss + "</style>";
		document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
	}

	/******************************************
	-	PREPARE PLACEHOLDER FOR SLIDER	-
	******************************************/

	var setREVStartSize=function() {
	"use strict";
		try {
			var e=new Object,
			i=jQuery(window).width(),
			t=9999,
			r=0,
			n=0,
			l=0,
			f=0,
			s=0,
			h=0;
			e.c=jQuery('#rev_slider_2_2');
			e.gridwidth=[1240];
			e.gridheight=[840];
			e.sliderLayout="auto";
			if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels, function(e, f) {
				f>i&&(t=r=f, l=e), i>f&&f>r&&(r=f, n=e)
			}
			), t>r&&(l=n)), f=e.gridheight[l]||e.gridheight[0]||e.gridheight, s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth, h=i/s, h=h>1?1:h, f=Math.round(h*f), "fullscreen"==e.sliderLayout) {
				var u=(e.c.width(), jQuery(window).height());
				if(void 0!=e.fullScreenOffsetContainer) {
					var c=e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function(e, i) {
						u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0): u
					}
					),
					e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset, 0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset, 0))
				}
				f=u
			}
			else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);
			e.c.closest(".rev_slider_wrapper").css( {
				height: f
			}
			)
		}
		catch(d) {
			console.log("Failure at Presize of Slider:"+d)
		}
	}

	;
	setREVStartSize();
	function revslider_showDoubleJqueryError(sliderID) {
	"use strict";
		var errorMessage="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
		errorMessage +="<br> This includes make eliminates the revolution slider libraries, and make it not work.";
		errorMessage +="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
		errorMessage +="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
		errorMessage="<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
		jQuery(sliderID).show().html(errorMessage);
	}

	var tpj=jQuery;
	var rev_slider_2_2=tpj("#rev_slider_2_2");
	var revapi2;
	tpj(window).on('load',function() {
	"use strict";
		if(rev_slider_2_2.revolution===undefined) {
			revslider_showDoubleJqueryError("#rev_slider_2_2");
		}
		else {
			revapi2=rev_slider_2_2.show().revolution( {
				sliderType:"standard", jsFileLocation:"//hotcoffee.themerex.net/wp-content/plugins/revslider/public/assets/js/", sliderLayout:"auto", dottedOverlay:"none", delay:9000, navigation: {
					keyboardNavigation:"off", keyboard_direction: "horizontal", mouseScrollNavigation:"off", onHoverStop:"off", touch: {
						touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 50, swipe_direction: "horizontal", drag_block_vertical: false
					}
					, bullets: {
						enable: true, hide_onmobile: true, hide_under: 600, style: "", hide_onleave: false, direction: "horizontal", h_align: "center", v_align: "bottom", h_offset: 0, v_offset: 70, space: 16, tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
					}
				}
				, visibilityLevels:[1240, 1024, 778, 480], gridwidth:1240, gridheight:840, lazyType:"none", shadow:0, spinner:"spinner0", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", disableProgressBar:"on", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:false, fallbacks: {
					simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: false,
				}
			}
			);
		}
	}

);
	
	
}


function initEssentialGrid() {
	"use strict";
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption === "id")
			return obj;
		else
			return lastamount;
	}
	
	var esg_grid_3_1 = jQuery("#esg-grid-3-1");
	if ("cobbles" === "even") {
		var coh = 0,
			container = esg_grid_3_1;
		var cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 3;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_3;
	jQuery(window).on('load',function() {
		essapi_3 = esg_grid_3_1.tpessential({
			gridID: 3,
			layout: "cobbles",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 3,
			loadMoreAjaxToken: "0c69fd013a",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 10,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "all",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-3",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			aspectratio: "4:3",
			responsiveEntries: [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-3-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
	
	
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption === "id")
			return obj;
		else
			return lastamount;
	}
	if ("cobbles" === "even") {
		var coh = 0,
			container = esg_grid_3_1;
		var cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 3;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_3;
	jQuery(window).on('load',function() {
		essapi_3 = esg_grid_3_1.tpessential({
			gridID: 3,
			layout: "cobbles",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 3,
			loadMoreAjaxToken: "0c69fd013a",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 10,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "all",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-3",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			aspectratio: "4:3",
			responsiveEntries: [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-3-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
	
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption === "id")
			return obj;
		else
			return lastamount;
	}
	var esg_grid_1_1 = jQuery("#esg-grid-1-1");
	if ("even" === "even") {
		var coh = 0,
			container = esg_grid_1_1;
		var cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 3;
		var aratio ;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_1;
	jQuery(window).on('load',function() {
		essapi_1 = esg_grid_1_1.tpessential({
			gridID: 1,
			layout: "even",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 3,
			loadMoreAjaxToken: "0c69fd013a",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 10,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			evenGridMasonrySkinPusher: "off",
			lightBoxMode: "all",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-1",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			aspectratio: "4:3",
			responsiveEntries: [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-1-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
	
	
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				var lamount;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption === "id")
			return obj;
		else
			return lastamount;
	}
	var esg_grid_2_1 = jQuery("#esg-grid-2-1");
	if ("masonry" === "even") {
		var coh = 0,
			container = esg_grid_2_1;
		var cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 3;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_2;
	jQuery(window).on('load',function() {
		essapi_2 = esg_grid_2_1.tpessential({
			gridID: 2,
			layout: "masonry",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 3,
			loadMoreAjaxToken: "0c69fd013a",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 10,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "all",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-2",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			responsiveEntries: [{
				width: 1400,
				amount: 3
			}, {
				width: 1170,
				amount: 3
			}, {
				width: 1024,
				amount: 3
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-2-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
	
	
}


function initDatepicker() {
	"use strict";
	jQuery.datepicker.setDefaults({
		"closeText": "Close",
		"currentText": "Today",
		"monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		"monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		"nextText": "Next",
		"prevText": "Previous",
		"dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		"dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		"dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
		"dateFormat": "MM d, yy",
		"firstDay": 1,
		"isRTL": false
	});
}


var HOTCOFFEE_STORAGE = getStorage();
function getStorage(){
	"use strict";
	var HOTCOFFEE_STORAGE = {};
	if (typeof HOTCOFFEE_STORAGE === 'undefined') var HOTCOFFEE_STORAGE = {};
	if (HOTCOFFEE_STORAGE['theme_font'] === '') HOTCOFFEE_STORAGE['theme_font'] = 'Source Sans Pro';
	HOTCOFFEE_STORAGE['theme_skin_color'] = '';
	HOTCOFFEE_STORAGE['theme_skin_bg_color'] = '';
	
	
	if (typeof HOTCOFFEE_STORAGE === 'undefined') 
		var HOTCOFFEE_STORAGE = {};
			HOTCOFFEE_STORAGE["strings"] = {
			ajax_error: "Invalid server answer",
			bookmark_add: "Add the bookmark",
			bookmark_added: "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab &#039;Bookmarks&#039;",
			bookmark_del: "Delete this bookmark",
			bookmark_title: "Enter bookmark title",
			bookmark_exists: "Current page already exists in the bookmarks list",
			search_error: "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
			email_confirm: "On the e-mail address &quot;%s&quot; we sent a confirmation email. Please, open it and click on the link.",
			reviews_vote: "Thanks for your vote! New average rating is:",
			reviews_error: "Error saving your vote! Please, try again later.",
			error_like: "Error saving your like! Please, try again later.",
			error_global: "Global error text",
			name_empty: "The name can&#039;t be empty",
			name_long: "Too long name",
			email_empty: "Too short (or empty) email address",
			email_long: "Too long email address",
			email_not_valid: "Invalid email address",
			subject_empty: "The subject can&#039;t be empty",
			subject_long: "Too long subject",
			text_empty: "The message text can&#039;t be empty",
			text_long: "Too long message text",
			send_complete: "Send message complete!",
			send_error: "Transmit failed!",
			login_empty: "The Login field can&#039;t be empty",
			login_long: "Too long login field",
			login_success: "Login success! The page will be reloaded in 3 sec.",
			login_failed: "Login failed!",
			password_empty: "The password can&#039;t be empty and shorter then 4 characters",
			password_long: "Too long password",
			password_not_equal: "The passwords in both fields are not equal",
			registration_success: "Registration success! Please log in!",
			registration_failed: "Registration failed!",
			geocode_error: "Geocode was not successful for the following reason:",
			googlemap_not_avail: "Google map API not available!",
			editor_save_success: "Post content saved!",
			editor_save_error: "Error saving post data!",
			editor_delete_post: "You really want to delete the current post?",
			editor_delete_post_header: "Delete post",
			editor_delete_success: "Post deleted!",
			editor_delete_error: "Error deleting post!",
			editor_caption_cancel: "Cancel",
			editor_caption_close: "Close"
		};

	if (typeof HOTCOFFEE_STORAGE === 'undefined') 
	var HOTCOFFEE_STORAGE = {};
		HOTCOFFEE_STORAGE['ajax_url'] = '';
		HOTCOFFEE_STORAGE['ajax_nonce'] = '8d4007e6be';
		HOTCOFFEE_STORAGE['site_url'] = '';
		HOTCOFFEE_STORAGE['vc_edit_mode'] = false;
		HOTCOFFEE_STORAGE['theme_font'] = 'Source Sans Pro';
		HOTCOFFEE_STORAGE['theme_skin'] = 'no_less';
		HOTCOFFEE_STORAGE['theme_skin_color'] = '';
		HOTCOFFEE_STORAGE['theme_skin_bg_color'] = '';
		HOTCOFFEE_STORAGE['slider_height'] = 100;
		HOTCOFFEE_STORAGE['system_message'] = {
			message: '',
			status: '',
			header: ''
		};
		HOTCOFFEE_STORAGE['user_logged_in'] = false;
		HOTCOFFEE_STORAGE['toc_menu'] = 'float';
		HOTCOFFEE_STORAGE['toc_menu_home'] = true;
		HOTCOFFEE_STORAGE['toc_menu_top'] = true;
		HOTCOFFEE_STORAGE['menu_fixed'] = true;
		HOTCOFFEE_STORAGE['menu_mobile'] = 1023;
		HOTCOFFEE_STORAGE['menu_slider'] = true;
		HOTCOFFEE_STORAGE['menu_cache'] = false;
		HOTCOFFEE_STORAGE['demo_time'] = 0;
		HOTCOFFEE_STORAGE['media_elements_enabled'] = true;
		HOTCOFFEE_STORAGE['ajax_search_enabled'] = true;
		HOTCOFFEE_STORAGE['ajax_search_min_length'] = 3;
		HOTCOFFEE_STORAGE['ajax_search_delay'] = 200;
		HOTCOFFEE_STORAGE['css_animation'] = true;
		HOTCOFFEE_STORAGE['menu_animation_in'] = 'fadeIn';
		HOTCOFFEE_STORAGE['menu_animation_out'] = 'fadeOutDown';
		HOTCOFFEE_STORAGE['popup_engine'] = 'magnific';
		HOTCOFFEE_STORAGE['email_mask'] = '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';
		HOTCOFFEE_STORAGE['contacts_maxlength'] = 1000;
		HOTCOFFEE_STORAGE['comments_maxlength'] = 1000;
		HOTCOFFEE_STORAGE['remember_visitors_settings'] = false;
		HOTCOFFEE_STORAGE['admin_mode'] = false;
		HOTCOFFEE_STORAGE['isotope_resize_delta'] = 0.3;
		HOTCOFFEE_STORAGE['error_message_box'] = null;
		HOTCOFFEE_STORAGE['viewmore_busy'] = false;
		HOTCOFFEE_STORAGE['video_resize_inited'] = false;
		HOTCOFFEE_STORAGE['top_panel_height'] = 0;
		
		
		return HOTCOFFEE_STORAGE;
}

