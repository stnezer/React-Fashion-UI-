function Cards(props) {

    return(
    
        <div className="App">
            <img src={props.image} width="90%" height="100px"/>
            <h4>{props.name}</h4>
            <p>{props.gender}</p>    
        </div>
    );
};

export default Cards;