import { useNavigate } from "react-router-dom";

import style from '../basicStyleSheets/GenericStyling.module.css';

const AllPurposeHeader = () => {

    const navigator = useNavigate();
    
    return (
        <>
            <header>
                <h1>Fred's Interstellar App</h1>
                <button type="button" className={style.HeaderButton} onClick={() => navigator("/")}>Home</button>
                <button type="button" className={style.HeaderButton} onClick={() => navigator("/inputPage")}>Input Page</button>
            </header>
        </>
    )

};

export default AllPurposeHeader;