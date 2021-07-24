
// prime number of an array using: IIFE function: ()f();

(function (arr) {
    for(let i=0;i<arr.length;i++)
    {
        let flag=0;
        for(let j=2;j<arr[i];j++)
        {
        if(arr[i]%j==0)
        {
            flag=1;
            break;
        }

        }
        if(flag==0)
        {
           console.log("Prime number:" ,arr[i]);
        }
    }
   
}
)([2, 3, 4, 5, 6, 7, 8, 9]);

// prime number of an array:  using anonymous function:


let prime=function (arrNum) 
{
    for(let i=0;i<arrNum.length;i++)
    {
        let flag=0;
        for(let j=2;j<arrNum[i];j++)
        {
        if(arrNum[i]%j==0)
        {
            flag=1;
            break;
        }

        }
        if(flag==0)
        {
           console.log( "prime Number:",arrNum[i]);
        }
    }


    
};
prime([3,4,5,6,7,8,9,10])
