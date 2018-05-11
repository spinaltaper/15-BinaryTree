'use strict';

let Tree=function(){
    this.head;
    this.recursiveTravel=()=>{
        this.returnValue='';
        this.__recursivetraversal(this.head);
        return this.returnValue;
    }
    this.__recursivetraversal=(node)=>{
        if(node.left)
        {this.__recursivetraversal(node.left)}
        if(node.right)
        {this.__recursivetraversal(node.right)}
        this.returnValue=`${this.returnValue} ${node.content.toString()}`;
    }
    return(null);
}
module.exports.Tree=Tree;
module.exports.Node=Tree;