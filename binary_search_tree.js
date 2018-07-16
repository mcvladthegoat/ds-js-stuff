class Node {
    constructor(val) {
        this.value = val;
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        [this.left, this.right] = [null, null];
    }

    left() {
        return this.left;
    }

    right() {
        return this.right;
    }
}

class BST {
    constructor(root) {
        this.root = root || null;
        this.push = this.push.bind(this);
        this.swap = this.swap.bind(this);
    }

    push(val) {
        if (!this.root) { // 1st case: need to init
            this.root = new Node(val);
            return;
        }

        let currN = this.root,
            newN = new Node(val);

        while(currN){
            if(val < currN.value){
                if(!currN.left){
                    currN.left = newN;
                    break;
                } else {
                    currN = currN.left;
                }
            } else {
                if(!currN.right){
                    currN.right = newN;
                    break;
                } else {
                    currN = currN.right;
                }
            }
        }
    }

    swap() {
        let leftCopy = JSON.stringify(this.root.left),
            rightCopy = JSON.stringify(this.root.right);
        
	    this.root = {
	        left: JSON.parse(rightCopy),
    	    right: JSON.parse(leftCopy)
	    };
    }
}

//Testing

var bst = new BST();

bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);

console.log(bst);
bst.swap();
console.log(bst);
