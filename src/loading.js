import React,{useState, useEffect} from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./load.json";
import * as doneData from "./doneloading.json";
import * as instaLogo from "./instagram.json";

const defaultOptions = {
loop: true,
autoplay: true,
animationData: legoData.default,
rendererSettings: {
preserveAspectRatio: "xMidYMid slice"
}
}


const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };
 
 const instagram = {
    loop: false,
    autoplay: true,
    animationData: instaLogo.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
    }

const Loading = ()=>{
const [done, setDone]=useState(false);
const [loading, setLoading]=useState(false);

useEffect(()=>{
    setTimeout(()=>{
        const fetcheddata = async() =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            setLoading(response);
            setTimeout(()=>{
            setDone(response);
            console.log(`${loading} loading `);
            },2000);       
            console.log(done);
          }
             fetcheddata();
    },3000);
   
},[]);


return(
    <div>
       {!done ? (
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              <h1>Fetching data from the database</h1>
              {!loading ? (
                <Lottie options={defaultOptions} height={120} width={120} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )}
            </div>
          </FadeIn>
        ) : (
            <div>
                <h1>🤓 🔥 😬</h1>
                Follow me on Instagram for more.
                <a href="https://www.instagram.com/yeahthatnerd">
                <Lottie options={instagram} height={120} width={120} />
                </a>
            </div>
          
        )}
        
    </div>
);
}

export default Loading;