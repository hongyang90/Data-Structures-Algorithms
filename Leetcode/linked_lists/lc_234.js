function palindromeList (head) {
    if (!head || head.next === null) return true;
    let arr = [];
    let curr = head;
    while (curr){
        arr.push(curr.val);
    }

  let i =0;
  let j = arr.length - 1;
  while (i < j){
      if (arr[i] !== arr[j]) return false;
  }
  return true;
}