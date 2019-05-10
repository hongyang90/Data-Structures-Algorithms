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

   wordsWithPrefix(prefix) {
       if (prefix.length === 0) {
           let allWords = [];
           if (root.isTerminal) allWords.push('');
   
           for (let letter in root.children) {
               let child = root.children[letter];
               let suffixes = this.wordsWithPrefix(prefix, child);
               let words = suffixes.map(ele => letter + ele);
               allWords.concat(words);
           }
           return allWords;

       } else {
           let firstLetter = prefix[0];
           let child = root.children[firstLetter];
           if (child === undefined) {
               return [];
           } else {
               let suffixes = this.wordsWithPrefix(prefix.slice(1),root.children[firstLetter]);
               let words = suffixes.map(ele => firstLetter + ele);
                return words;

           }

       }
   }


}

module.exports = {
    Node,
    Trie
};