function intersection (list1, list2) {
    if (list1 && !list2) return false;
    if (!list1 && list2) return false;

    let set = new Set();

    while (list1){
        set.add(list1);
        list1 = list1.next;
    }

    while (list2){
        if (set.has(list2)) {
            return true;
        }
        list2 = list2.next;
    }

    return false;
}

function intersection (list1, list2) {
    if (list1 && !list2) return false;
    if (!list1 && list2) return false;

    let size1 = 0;
    let size2 = 0;

    let curr1 = list1;
    let curr2 = list2;

    while (list1) {
        size1++;
        curr1 = list1.next;
    }

    while (list2) {
        size2++;
        curr2 = list2.next;
    }

    curr1 = list1;
    curr2= list2;

    if (size1 > size2) {
        for (let i=0; i < size1 - size2;i++){
            curr1 = curr1.next;
        }
    } else {
        for (let i = 0; i < size2 - size1; i++) {
            curr2 = curr2.next;
        }
    }

    while (curr1 && curr2){
        if (curr1 === curr2){
            return true;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return false;
}