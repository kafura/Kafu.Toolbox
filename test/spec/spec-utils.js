describe('k.utils', function () {

    describe('Should check k.utils', function () {


        it('Should return absolute url', function () {
            var host = location.host;
            var url = k.utils.getAbsoluteUrl("/test");
            expect(url).toBe("http://" + host + "/test");
        });

        it('Should return absolute url deep link', function () {
            var host = location.host;
            var url = k.utils.getAbsoluteUrl("test");
            expect(url).toBe("http://" + host + "/test");
        });

    });

});