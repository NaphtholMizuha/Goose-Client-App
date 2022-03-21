import { useEffect } from "react";
import { useState } from "react";

function Fuck() {
    const [times, setTimes] = useState(0)
    useEffect(
        ()=>{
            setInterval(()=>{
                setTimes(times + 1)
            }, 1000)
        }
    );
    
    return <p>I fucked you {times} times!</p>
}

export default Fuck;