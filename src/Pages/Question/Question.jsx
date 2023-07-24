import { useEffect, useState } from "react";


const Question = () => {
    const [items, setItems] = useState([])
    useEffect(() =>{
        fetch('ansquestion.json')
        .then(res => res.json())
        .then(data =>{
            setItems(data)
            console.log(data)
            
        })
    },[])
    return (
        <div  className="lg:px-20 md:px-16 sm:px-10 px-8 py-8">
            <h2 className="text-2xl font-bold title">MERN Stack Technologies Interview Questions</h2>
            <div className="py-12">
                 <div className="grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 space-y-2">
                      {
                        items.map((ane,index) =><div key={index}>
                            <div>
                                <div className="border">
                                    <h2 className="py-2 px-4">{ane.question}</h2>
                                </div>
                                <div className="border mt-2">
                                <p className="py-4 px-4">{ane.answer}</p>
                                </div>
                            </div>
                        </div>)
                      }
                 </div>
            </div>
        </div>
    );
};

export default Question;