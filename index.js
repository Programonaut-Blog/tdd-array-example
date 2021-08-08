function removeEverySecond(array) {
    let newArray = []
    
    for (let i = 0; i < array.length; i++) {
        if((i + 1) % 2 == 1){
            newArray.push(array[i]);
        }
    }

    return newArray
}

exports.removeEverySecond = removeEverySecond;