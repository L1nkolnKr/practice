import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={"this is app"}/>
            <Rating value={1}/>
            <Accordion titleValue={"menu"} collapsed={true}/>
            <Accordion titleValue={"main"} collapsed={false}/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={0}/>
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
