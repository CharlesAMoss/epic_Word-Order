describe('wordOrder', function() {
    it("input a string and output an array", function() {
        expect(wordOrder("hello world")).to.be.an("array");
    });

    it("input a two unique word string and output an array with those words with keys", function() {
        expect(wordOrder("hello world")).to.eql([["hello", 1], ["world", 1]]);
    });

    it("input a string with a repeating word and output an array of array ordered by word count ", function() {
        expect(wordOrder("hello world world")).to.eql([["world", 2], ["hello", 1]]);
    });

    it("input a string with even more repeating words and output an array of array ordered by word count", function() {
        expect(wordOrder("hello hello hello goodbye world world")).to.eql([["hello", 3], ["world", 2], ["goodbye", 1]]);
    });

    it("in the event to word count ties, order by first occurrence in string", function() {
        expect(wordOrder("hello hello hello goodbye world goodbye world")).to.eql([["hello", 3], ["goodbye", 2], ["world", 2]]);
    });
});
