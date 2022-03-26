import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown/Countdown.module.css";
import { CountdownButton } from "./CountdownButton";

export function Countdown(){
    const {minutes, seconds, hasFineshed, isActive, resetCountdown, startCountdown} = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFineshed ?
                (<CountdownButton text="Ciclo encerrado" disabled/>)
                :
                (<>
                {isActive ? 
                    (<CountdownButton text="Abandonar ciclo" classButton="Active" disabled={false} onClick={resetCountdown}/>) 
                : 
                    (<CountdownButton text="Iniciar ciclo" classButton="" onClick={startCountdown}/>)}
                </>)}
            
        </div>
    )
}