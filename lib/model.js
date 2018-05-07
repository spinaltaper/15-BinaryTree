let Node=function(){
    this.key;
    this.content;
    this.left;
    this.right;
}

let Tree=function(){
    this.head;
    this.recursiveSearch=(key)=>{
        let currentLocation=head;
        while(currentLocation.left!==null&&currentLocation.right!==null)
            {
                if(currentLocation.left!==null)
                {
                    currentLocation=currentLocation.left;
                }else
                {
                    currentLocation=currentLocation.right;
                }
            }
        while(key!==currentLocation.key)
        {
            
        }
    }
}