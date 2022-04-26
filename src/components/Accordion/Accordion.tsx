import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export function Accordion(props:AccordionPropsType) {
    if(props.collapsed === true){
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>

        </div>
    )
}

        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}