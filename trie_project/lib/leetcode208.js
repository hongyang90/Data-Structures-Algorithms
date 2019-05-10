class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word, root = this.root) {
        let letter = word[0];

        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }
        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        }
        else {
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }



    search(word, root = this.root) {

        if (word.length === 0) {
            if (root.isTerminal) {
                return true;

            } else {
                return false;
            }
        }

        let letter = word[0];
        if (!(letter in root.children)) { return false; }
        else {
            return this.searchRecur(word.slice(1), root.children[letter]);
        }
    }

    startsWith(word, root = this.root) {

        if (word.length === 0) {
  
                return true;

        }

        let letter = word[0];
        if (!(letter in root.children)) { return false; }
        else {
            return this.startsWith(word.slice(1), root.children[letter]);
        }
    }



}