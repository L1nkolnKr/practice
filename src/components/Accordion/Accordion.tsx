import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function Accordion(props:AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}
                                onClick={props.onClick}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(e) => props.onClick()}>{props.title}</h3>
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