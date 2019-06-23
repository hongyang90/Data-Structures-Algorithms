class MinStack {
    constructor(){
        this.stack = [];
        this.min = [];
    }


    push(val){
        this.stack.push(val);
        if (!this.min) {
            this.min.push(val);
        } else if (val < this.min[this.min.length-1]){
            this.min.push(val);
        }
    }


    pop(){
        let num = this.stack.pop();
        if (this.min[this.min.length -1] === num){
            this.min.pop();
        }
    }


    getMin(){
        return this.min[this.min.length -1];
    }
}