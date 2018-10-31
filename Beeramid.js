var beeramid = function(bonus, price) {
    if(bonus==price)return 1;
    if(bonus<price)return 0;
    try{
        var total=0;
        var level=1;
        while(total<=bonus){
            total+=level*level*price;
            level++;
        }}
    catch(e){}
    return level-2;
}