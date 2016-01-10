describe('k.extensions', function () {

    it('Should uppercase first letter in string', function () {
        var s = "hepper ding";

        expect(s.upperCaseFirst()).toBe("Hepper ding");
    });

    it("Should return thousand separated number", function() {
        var n = 1234;
        expect(n.toStringWithThousandSeparator()).toBe("1.234");

        n = 1234567;
        expect(n.toStringWithThousandSeparator()).toBe("1.234.567");

        n = 1234567.22;
        expect(n.toStringWithThousandSeparator()).toBe("1.234.567,22");
    });

    describe("Array.clone", function() {
        var a = ["hep1", "hep2"];

        it("without clone, array should be the same array", function() {
            expect(a).toBe(a);
        });

        it("but with clone, it should not be the same array", function() {
            expect(a.clone()).not.toBe(a);
        });
    });
});