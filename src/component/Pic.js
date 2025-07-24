import Pictures from "./Product";

function Pic(props){
    return(
        <div>
             {props.sname}

            <p>{props.children}</p>

            <Pictures pic={"pic/amazon.jpg"}></Pictures>

        </div>
    );
}
export default Pic;