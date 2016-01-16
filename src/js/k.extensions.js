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

    /**
     * Checks if array contains value
     * @param {?} it - Value to check if exists in array
     * @returns {bool} True if found
     */
    window.Array.prototype.contains = function(it) {
        return k.utils.contains(this, it);
    }
})(window);

