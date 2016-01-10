(function(window) {
    "use strict";

    /**
     * Makes first letter in the string uppercase
     * "hepper".upperCaseFirst(); // "Hepper"
     */
    window.String.prototype.upperCaseFirst = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

})(window);

