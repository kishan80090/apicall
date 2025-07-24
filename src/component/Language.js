import './Design.css';
import Returnorder from './Returnorder';
function Language () {
    return(
        <div>
            <input list="la" type="text" className="lanmargin" placeholder="Language" ></input>
            <datalist id="la">
                <option>English</option>
                <option>Hindi</option>
                </datalist>  
                <Returnorder></Returnorder>
        </div>
    )
}
export default Language;