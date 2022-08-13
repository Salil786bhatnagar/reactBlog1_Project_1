import React,{useLocation} from 'react'

export default function CurrentLocationPage() {
    const location = useLocation();
    console.log(location);
  return (
    <div>
      CurrentLocationPage
    </div>
  )
}
