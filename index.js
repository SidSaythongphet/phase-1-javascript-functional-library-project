const myEach = function (collection, alert) {
    if (Array.isArray(collection)) {
        for (let num of collection) {
            alert(num)
        }
    } else {
    const arrayObject = Object.values(collection)
    myEach(arrayObject, alert)
    }
    return collection
}

const mapCallBack = (num) => num + 4

const myMap = function (collection, mapCallBack) {
    const newCollection = []
    if (Array.isArray(collection)) {
        for (let num of collection) {
            const newNum = mapCallBack(num)
            newCollection.push(newNum)
        }
    } else {
    const arrayObject = Object.values(collection)
    myMap(arrayObject, mapCallBack)
    }
    return newCollection
}    