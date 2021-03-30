import React,{useState} from "react";
import web from "../src/img2.jpg";
import SeData from "./SeData";
import Card from "./Card";
const Contact=()=>{
    return(
        <>
        <div className="my-5">
           <h1 className="text-center" style={{color:"rgb(190, 10, 70)",fontWeight:"bold"}}>Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="colo-10 mx-auto">
                    <div className="row gy-4">
                       {
                           SeData.map((val,ind)=>{
                               return <Card
                                   key={ind}
                                   imgsrc={val.imgsrc}
                                   title={val.title}
                                   content={val.content}
                               />
                           })
                       }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;