import React from 'react'

 function Add(a,b) {
    let add = a+b;
    return (
        <div>
            {add}
        </div>
    )
    }
    function Sub(a,b) {
        let sub = a-b;
        return (
            <div>
                {sub}
            </div>
        )
    }
        function Mul(a,b) {
            let mul = a*b;
            return (
                <div>
                    {mul}
                </div>
            ) 
     }   
            function Div(a,b) {
                let div = a/b;
                div = div.toFixed(3)
                return (
                    <div>
                        {div}
                    </div>
                    
                )  
        }        

export {Add, Sub, Mul, Div};