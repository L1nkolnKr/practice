import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";





export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired")

export const CollapsedMod = ()=> <Accordion titleValue={"Menu"} collapsed={true} onClick={callback}/>
export const UsersUnCollapsedMod = ()=> <Accordion titleValue={"Users"} collapsed={false} onClick={callback}/>

export const ModeChanged = () => {

    const [value, setValue] = useState<boolean>(true);

    return <Accordion titleValue={"Users"} collapsed={value} onClick={() =>setValue(!value)}/>
}
