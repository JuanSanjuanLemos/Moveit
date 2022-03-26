import { ReactEventHandler } from "react";
import styles from "../styles/components/CountdownButton/CountdownButton.module.css";

interface propsButton{
    onClick?: ReactEventHandler;
    text: string;
    classButton?: string;
    disabled?: boolean;
}

export function CountdownButton(props:propsButton){
    return(

        <button className={`${styles.countdownButton} ${styles[props.classButton] || ''}`} disabled={props.disabled} onClick={props.onClick}>
            {props.text}
        </button>
    )
}