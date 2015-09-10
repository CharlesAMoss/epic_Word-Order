var wordOrder = function (phrase) {

    var wordArr = phrase.split(" ");
    var counts = {};

    for(var i = 0; i< wordArr.length; i++) {
        var word = wordArr[i];

        counts[word] = counts[word] ? counts[word]+1 : 1;
    }

    var finArr = [];
    for (var key in counts) {
        finArr.push([key, counts[key]]);
    };
    finArr.sort(function(a, b) {return b[1]-a[1]});
    debugger;
    return finArr;
}

// Potential display formatting function
// var displayList = function(finArr) {
//     var string = "";
//     finArr.forEach(function(pair) {
//         string += pair[0] : pair[1];
//     });
//     return string;
// }
