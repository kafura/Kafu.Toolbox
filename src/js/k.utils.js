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
      },

      /**
       * Checks if something contains some other thing
       * @param {val} string | array - The object to be checked
       * @param {it} string | number - the value to check
       * @return {bool} True if found
       */
      contains: function(val, it) {
          return !!~val.indexOf(it);
      }
  };

})(window);
