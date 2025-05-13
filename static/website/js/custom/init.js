/* global jQuery:false */
/* global HOTCOFFEE_STORAGE:false */


// Theme-specific first load actions
//==============================================
function hotcoffee_theme_ready_actions() {
	"use strict";
	// Put here your init code for the theme-specific actions
	// It will be called before core actions
}


// Theme-specific scroll actions
//==============================================
function hotcoffee_theme_scroll_actions() {
	"use strict";
	// Put here your theme-specific code for scroll actions
	// It will be called when page is scrolled (before core actions)
}


// Theme-specific resize actions
//==============================================
function hotcoffee_theme_resize_actions() {
	"use strict";
	// Put here your theme-specific code for resize actions
	// It will be called when window is resized (before core actions)
}


// Theme-specific shortcodes init
//=====================================================
function hotcoffee_theme_sc_init(cont) {
	"use strict";
	// Put here your theme-specific code for init shortcodes
	// It will be called before core init shortcodes
	// @param cont - jQuery-container with shortcodes (init only inside this container)
	
	// MenuItems - init once
	hotcoffee_menuitems_init();
}


// Theme-specific post-formats init
//=====================================================
function hotcoffee_theme_init_post_formats() {
	"use strict";
	// Put here your theme-specific code for init post-formats
	// It will be called before core init post_formats when page is loaded or after 'Load more' or 'Infonite scroll' actions
}

var menuItemStopAjax = true;
var menuItemList;
var menuItemIdNext = 0;
var menuItemIdPrev = 0;


// Display menuitem in the popup
function hotcoffee_menuitems_init() {
	"use strict";
	var body = jQuery('body');
	var popup_menuitem = jQuery(".popup_menuitem");
	jQuery('.sc_menuitems_wrap').on('click', '.show_popup_menuitem', function(e) {
		var id = jQuery(this).parents('.sc_menuitems_item').attr('id');
		hotcoffee_menuitems_show_popup(id); 
		
		e.preventDefault();
		return false;
	});
	
	body.on('click', '.close_menuitem', function(e) {	
		console.log('close click');
		jQuery(".popup_menuitem").remove();
		
		e.preventDefault();
		return false;
	});	
	body.on('click', '.popup_menuitem', function(e) {
		if (e.target !== this)
		return;
	
		console.log('close click');
		jQuery(".popup_menuitem").remove();
		
		e.preventDefault();
		return false;
	});
}

function hotcoffee_menuitems_show_popup(id) {
	"use strict";
	var menuitem = jQuery('#' + id);
	var columns_wrap = menuitem.parents('.sc_menuitems_wrap').find('.columns_wrap');
		
	var url = menuitem.data('url');
	
	if(url != null) {
		// Create popup
		var popup_menuitem = jQuery(".popup_menuitem");
		if (popup_menuitem.length === 0) {
			jQuery('body').append('<div class="popup_menuitem"></div>');
		} 
		// load html file 
		popup_menuitem.load(url, function( response, status, xhr ) {
		  if (status === "error") {
			var msg = "Sorry but there was an error: ";
			alert(msg + xhr.status + " " + xhr.statusText);
		  }else{
			popup_menuitem.show();
			hotcoffee_menuitems_navigation(columns_wrap, menuitem);
			
			popup_menuitem.find('.show_popup_menuitem').on('click', function(e){
				id = jQuery(this).data('id');
				hotcoffee_menuitems_show_popup(id);
				
				e.preventDefault();
				return false;
			});
		 }
		});
	}
		
}

// menuitems navigation
function hotcoffee_menuitems_navigation(columns_wrap, menuitem) {
	"use strict";
	//navigation
	var popup_menuitem = jQuery(".popup_menuitem");
	if(popup_menuitem.find('.show_popup_menuitem').length > 0){
		
		// prev arrow
		var prev_arrow = popup_menuitem.find('.show_popup_menuitem.prev_menuitem');
		var prev_menuitem = menuitem.parent().prev().find('.sc_menuitems_item');
		if( !prev_menuitem.length ){
			prev_menuitem = columns_wrap.find('[class*="column-"]').last().find('.sc_menuitems_item');
		}
		if( prev_menuitem.length ){
			var prev_id = prev_menuitem.attr('id');
			if(prev_id != null){
				prev_arrow.attr('data-id', prev_id);
			}
			else {
				prev_arrow.remove();
			}
		}
		else {
			prev_arrow.remove();
		}
		
		// next arrow
		var next_arrow = popup_menuitem.find('.show_popup_menuitem.next_menuitem');
		var next_menuitem = menuitem.parent().next().find('.sc_menuitems_item');
		if( !next_menuitem.length ){
			next_menuitem = columns_wrap.find('[class*="column-"]').first().find('.sc_menuitems_item');
		}
		if( next_menuitem.length ){
			
			var next_id = next_menuitem.attr('id');
			if(next_id != null){
				next_arrow.attr('data-id', next_id);
			}
			else {
				next_arrow.remove();
			}
		}
		else {
			next_arrow.remove();
		}
	}
}
