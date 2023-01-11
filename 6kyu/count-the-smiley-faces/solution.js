//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;
    let regex = new RegExp("([\:|\;][-|~][\)|D])|([\:|\;][\)|D])")
    for (let i = 0; i < arr.length; i++){
      if (regex.test(arr[i]) == true)
        count++;
    }
    return count;
  }

module.exports = countSmileys;