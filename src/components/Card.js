import React from 'react';

const Card = (props) => {
    return (<>
        <div className="card text-white bg-danger mb-3 text-center w-100" style={{border : '1px solid white'}}>
            <div className="card-header h5">{props.header}</div>
            <div className="card-body">
                <h5 className="card-title h1">{props.todaycount}</h5>
                <p className="card-text"><strong> Total : </strong> {props.totalcount} </p>
            </div>
        </div>  
    </>);
}

export default Card;
