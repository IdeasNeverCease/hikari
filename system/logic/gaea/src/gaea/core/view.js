// Gaea
define(["$"], function($, _) {

	var
	splitter = /^(?:(.*)\s)?(\w+)$/,
	transitionEventNames = "transitionend oTransitionEnd webkitTransitionEnd",
	animationEventNames = "animationend oAnimationEnd webkitAnimationEnd";

	// CSS3 transform, transition, animation hooks, prefixless
	var hooks = ["transform", "transition", "animation", "transform-origin"];

	for(var i=hooks.length;i--;) {
		(function(property) {

			$.cssHooks[property] = {
				get: function( elem, computed, extra ) { return null; },

				set: function(elem, value) {
					elem.style[property] = value;
					elem.style["-o-"+property] = value;
					elem.style["-moz-"+property] = value;
					elem.style["-webkit-"+property] = value;
				}
			};

		})(hooks[i]);
	}

	$.fn.extend({
		listen: function (map, scope) {

			var handler, data, selector, event;

			for(var key in map) {
				if(!map.hasOwnProperty(key))
					continue;

				handler = map[key];

				data = key.match(splitter);
				selector = data[1];
				event = data[2];

				if (event === "mousedown")
					event += " touchstart";
				else if (event === "mousemove")
					event += " touchmove";
				else if (event === "mouseup")
					event += " touchend";
				else if (event === "click")
					event += " touchend";

				if (typeof handler === "string")
					handler = scope[handler];

				if (!handler)
					throw new Error("Handler not found");

				if (selector)
					this.on(event, selector, handler.bind(scope));
				else
					this.on(event, handler.bind(scope));
			}

			return this;

		},

		onTransitionEnd: function (callback, scope) {
			this.one(transitionEventNames, function() { callback.apply(scope||this); });
		},

		onAnimationEnd: function (callback, scope) {
			this.one(animationEventNames, function() { callback.apply(scope||this); });
		}
	});

	return function(root) {

		if(typeof root === "function") { // It's a template
			return function(options) {
				return $(root(options || {}));
			};
		} else { // It's a selector
			return $(root);
		}

	};

});
