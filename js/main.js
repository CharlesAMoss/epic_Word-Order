var wordOrder = function (phrase) {

    var wordArr = phrase.split(" ");
    var counts = {};

    for(var i = 0; i< wordArr.length; i++) {
        var word = wordArr[i];

        counts[word] = counts[word] ? counts[word]+1 : 1;
    }

    // var countArr = Object.keys(counts);
    // var num = 0;


    var finArr = [];
    for (var key in counts) {
        finArr.push([key, counts[key]]);
    };
    finArr.sort(function(a, b) {return b[1]-a[1]});
    return finArr;

}
