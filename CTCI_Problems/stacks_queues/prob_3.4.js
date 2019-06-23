class MyQueue {
    constructor(){
        this.front = [];
        this.back = [];
    }

    push(val){
        this.back.push(val);
    }

    pop(){
        if (this.front.length ===0){
            while (this.back){
                this.front.push(this.back.pop());
            }

        }
        return this.front.pop();
    }

    peek(){
        if (this.front.length === 0){
            while (this.back) {
                this.front.push(this.back.pop());
            }

        }
        return this.front[this.front.length -1];
    }

    empty(){
        return (!this.back.length && !this.front.length);
    }

}