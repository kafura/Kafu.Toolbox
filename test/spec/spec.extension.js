describe('k.extensions', function () {

    it('Should uppercase first letter in string', function () {
        var s = "hepper ding";

        expect(s.upperCaseFirst()).toBe("Hepper ding");
    });

});