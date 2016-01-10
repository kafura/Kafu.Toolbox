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

});