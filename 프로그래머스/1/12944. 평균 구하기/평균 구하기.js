function solution(arr) {

    var result = arr.reduce(function add(sum, currValue) {
           return sum + currValue
    }, 0)

    return average = result / arr.length;

}