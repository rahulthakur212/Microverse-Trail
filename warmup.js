//bon-appetit 
let result = 0;
    for (let i=0;i<bill.length;i++)
    {
        if(i!==k)
        {
            result+=bill[i];
        }
    }
    let pay= result/2;
    if(b> pay)
    {
        console.log(b-pay);
    }
    else
    {
        return console.log("Bon Appetit");
    }
//
//  Apple and Orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let k=0;
    let j=0;
    let i;
    for(i=0;i<apples.length;i++)
    {
        if(a+apples[i]>=s && a+apples[i]<=t)
        {
            ++k;
        }
    }
    for(i=0;i<oranges.length;i++)
    {
        if(b+oranges[i]>=s && b+oranges[i]<=t)
        {
            ++j;
        }
    }
    console.log(k);
    console.log(j);

}
