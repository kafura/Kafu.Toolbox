(function(window) {
    "use strict";

    /**
     * Makes first letter in the string uppercase
     * "hepper".upperCaseFirst(); // "Hepper"
     */
    window.String.prototype.upperCaseFirst = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    /**
     * Inserts . in number. Ex: 4444.toStringWi... becomes "4.444"
     * Can only transform to danish numbers.
     */
    window.Number.prototype.toStringWithThousandSeparator = function () {
        var num = this.toString().replace(".", ","),
            rgx = /(\d+)(\d{3})/;

        while (rgx.test(num)) {
            num = num.replace(rgx, '$1' + '.' + '$2');
        }

        return num;
    };

    /**
     * Clones an array. Ex: var newArray = [].clone();
     * @returns {Array.<T>}
     */
    window.Array.prototype.clone = function() {
        // This is not the fastest way, but ok for many situations
        return this.slice(0);
    };
})(window);


(function(window) {
  var k = window.k = window.k || {};

  k.utils = {
    /**
     * Returns an absolute url
     * @param {string} - url Relative url to make absolute.
     * @return {string} - The absolute url
     */
    getAbsoluteUrl: (function() {
	     var a;

    	return function(url) {
    		if(!a) a = document.createElement('a');
    		a.href = url;

    		return a.href;
    	};
    })(),

    /**
     * Returns a number as short number. Eg: toShortNumber(1100, 1) = 1,1K
     * @param {number} number - The number to be converted
     * @param {number} digits - THe number of digits after comma
     * @return {string} The short number
     */
    toShortNumber: function(number, digits) {
      var y;
      if (number > 999999) {
        y = (parseFloat(number) / 1000000).toFixed(digits) + "M";
      } else if (number > 999) {
        y = (parseFloat(number) / 1000).toFixed(digits) + "K";
      } else {
        y = number;
      }

      // Make it "danish" = replace ".", ","
      return y.toString().replace(".", ",");
    }
  };

})(window);
