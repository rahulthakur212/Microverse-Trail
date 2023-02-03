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