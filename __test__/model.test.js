const tree=require('../lib/tree')
const node=require('../lib/node')
let Maple=new tree.Tree();
test('testing recuriveTraversal',()=>{
Maple.head=new node.Node(2);
Maple.head.left=new node.Node(3);
Maple.head.right=new node.Node(4);
Maple.head.left.left=new node.Node(7);
Maple.head.left.right=new node.Node(1);
Maple.head.right.left=new node.Node(2);
expect(Maple.recursiveTravel()).toEqual(' 7 1 3 2 4 2')});