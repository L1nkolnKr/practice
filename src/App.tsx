import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className="App">
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <OnOff
                on={switchOn}
                onChange={setSwitchOn}/>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>
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

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
