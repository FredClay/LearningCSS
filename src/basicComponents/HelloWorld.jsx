import { useNavigate } from 'react-router-dom'; 

import style from '../basicStyleSheets/GenericStyling.module.css';
import logo from '../logo.svg';
import planetLogo from '../Images/BluePlanetLogo-1.svg';

const HelloWorld = () => {

    const navigator = useNavigate();

    return (
        <>  
            <header className="App-header">
                <img src={planetLogo} className="App-logo" alt="logo" />
                <p className={style.para}>Hello World</p>
                <button className={style.FancyButton} onClick={() => navigator("/inputPage")}>Begin Your Journey</button>
            </header>

        </>
    );

};

export default HelloWorld;