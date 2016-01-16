describe('k.utils', function () {

    describe('k.utils.getAbsoluteUrl', function () {


        it('should return absolute url', function () {
            var host = location.host;
            var url = k.utils.getAbsoluteUrl("/test");
            expect(url).toBe("http://" + host + "/test");
        });

        it('should return absolute url deep link', function () {
            var host = location.host;
            var url = k.utils.getAbsoluteUrl("test");
            expect(url).toBe("http://" + host + "/test");
        });
    });

    describe('k.utils.contains', function () {
        var s = "this is a string";
        var a = ["this", "is", "an", "array"];

        it('should return true if value is found in string or array', function() {
            expect(k.utils.contains(s, "is")).toBe(true);
            expect(k.utils.contains(a, "is")).toBe(true);
        });

        it('and false if it is not found', function() {
            expect(k.utils.contains(s, "cirkus")).toBe(false);
            expect(k.utils.contains(a, "cirkus")).toBe(false);
        });
    });

});