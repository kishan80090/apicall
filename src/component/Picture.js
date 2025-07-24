function Pictures(props){

    return(
        <div>
            <img src={props.pic}></img>

            <p>{props.children}</p>

        </div>

    )
};
export default Pictures;