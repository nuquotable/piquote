/*	KL.StyleSheet
	Style Sheet Object
================================================== */

KL.StyleSheet = KL.Class.extend({
	
	includes: [KL.Events],
	
	_el: {},
	
	/*	Constructor
	================================================== */
	initialize: function() {
		// Borrowed from: http://davidwalsh.name/add-rules-stylesheets
		this.style = document.createElement("style");
		
		// WebKit hack :(
		this.style.appendChild(document.createTextNode(""));
		
		// Add the <style> element to the page
		document.head.appendChild(this.style);
		
		this.sheet = this.style.sheet;
		
	},
	
	addRule: function(selector, rules, index) {
		var _index = 0;
		
		if (index) {
			_index = index;
		}
		
		if("insertRule" in this.sheet) {
			this.sheet.insertRule(selector + "{" + rules + "}", _index);
		}
		else if("addRule" in this.sheet) {
			this.sheet.addRule(selector, rules, _index);
		}
	},
	

	/*	Events
	================================================== */
	onLoaded: function(error) {
		this._state.loaded = true;
		this.fire("loaded", this.data);
	}
	
});