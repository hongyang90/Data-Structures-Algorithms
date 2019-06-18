function arrayIntersection(arr1, arr2) {
    let res = [];
    let set1 =new Set();
    let set2 = new Set();

    arr1.forEach(ele => set1.add(ele));
    arr2.forEach(ele => set2.add(ele));

    let short;
    let long;
    if (set1.size > set2.size) {
        short = set2;
        long = set1;
    } else {
        short = set1;
        long = set1;
    }

    short.forEach( ele => {
        if (longer.has(ele)){
            res.push(ele);
        }
    });

    return res;



}