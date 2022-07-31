import Button from '../Button/Button';
import styles from './EnginStopwatch.module.scss';
import { useState, useEffect } from "react";

const EnginStopwatch = () => {

    const [ time, setTime ] = useState (0);
    const [ activeTimer, setActiveTimer ] = useState(false);

    let milliseconds = String(Math.floor(time)).slice(-4);
    let seconds = String(Math.floor(time / 1000)).padStart(2, "0");
    let minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    let hours = String(Math.floor(minutes / 60)).padStart(2, "0");
    
    useEffect(() => {
        let timer;

        if(activeTimer) {
            timer = setInterval(() => {
                setTime((prevValue) => prevValue +1 )
            }, 1);
        } else if (!activeTimer) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [activeTimer]);
    
    return (
            <div>
                <h1 className={styles.displayStopwatch}>{ hours }:{ minutes }:{ seconds }:{ milliseconds }</h1>
                <div className={styles.buttonsEngin}>
                    <Button onClick={() => setActiveTimer(true)}>START</Button>
                    <Button onClick={() => setActiveTimer(!true)}>STOP</Button>
                    <Button onClick={() => setTime(0)}>RESET</Button>
                </div>
            </div>
            
            
    )
}
export default EnginStopwatch;