const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() { return this.arr.length },
    addLink(value) {
        if (typeof value === 'undefined') {
            this.arr.push(0);
        } else {
            this.arr.push(value);
        }
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position)) { this.arr.length = 0; throw Error('Not a integer'); }
        if (position < 0 && position >= this.getLength()) { this.arr.length = 0; throw Error('out of range'); }
        this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.arr = this.arr.reverse();
        return this;
    },
    finishChain() {
        let result = null;
        if (this.getLength() === 1) {
            result = `( ${this.arr[0]} )`;
        } else {
            result = this.arr.map((curr, i, arr) => { if (!i) { return `( ${curr} )~` } else if (i === this.getLength() - 1) { return `~( ${curr} )` } else return `~( ${curr} )~` }).join('');
        }
        this.arr.length = 0;
        return result;
    }
};

module.exports = chainMaker;