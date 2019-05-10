class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor(){
       this.root = new Node();
   }

   insertRecur (word, root = this.root) {
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

   insertIter(word, root = this.root) {

    while (word.length) {
        let letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }
        if(word.length === 1) {
            root.children[letter].isTerminal = true;
            word = word.slice(1);

        } else {
            root = root.children[letter];
            word = word.slice(1);
        }

    }
   }

   searchRecur (word, root = this.root) {
       
       if (word.length === 0) {
           if (root.isTerminal) {
               return true;
               
            } else {
                return false;
            }
        } 
        
        let letter = word[0];
        if (!(letter in root.children)) {return false;}
        else {
            return this.searchRecur(word.slice(1), root.children[letter]);
        }
   }

   searchIter (word, root = this.root) {
    
    while (word.length >= 0) {
        if (word.length === 0) {
            if (root.isTerminal) {
                return true;

            } else {
                return false;
            }
        }
        let letter = word[0];
        if (!(letter in root.children)) { return false; 
        } else {
            word = word.slice(1);
            root = root.children[letter]
        }
        


    }


   }


}

module.exports = {
    Node,
    Trie
};