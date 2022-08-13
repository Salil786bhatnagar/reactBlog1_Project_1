import React from 'react'

const img1        = "https://picsum.photos/200/300";
const img2        = "https://picsum.photos/300/350";
const img3        = "https://picsum.photos/350/400";

const myEmail    = 'https://mail.google.com/mail/u/0/#inbox'
export default function Showimages() {
    return (
        <div>
             <h4 className="h4ClassName">Wellcome To My Test Page</h4>
            <img src={img1} alt="woldImages"/>
            <img src={img2} alt="woldImages22"/>
            <a href={myEmail } target="_blank">
            <img src={img3} alt="woldImages33"/>
            </a>
        </div>
    )
}
