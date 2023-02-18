import React from 'react';
// import img from "./logo192.png"

const Card = (x) => {

    const handleClick = () => {

        console.log("clicked")


    }
    return (
        <div>

            {console.log(x)}
            <div className="card" style={{ width: "18rem" }}>
                <img src={x.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    <p className="card-text">{x.content}</p>
                    <a href="#" onClick={handleClick} className="btn btn-primary">{x.value}</a>
                </div>
            </div>

            
        </div>
    );
}

export default Card;
