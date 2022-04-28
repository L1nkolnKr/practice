import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)


    return (
        <div className="App">
            {/*<OnOff />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion titleValue={} collapsed={}/>*/}
            {/*<PageTitle title={"this is app"}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Accordion titleValue={"menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"main"} collapsed={false}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}



export default App;
