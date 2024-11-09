import React from "react";
import User from '../images/user.png';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img className="ui avatar image" src={User} alt="user" style={{ marginRight: "10px" }} />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            </div>
        <i 
        className="trash alternate outline icon"
        style={{color:"red", marginTop:"7px" }}
        onClick={() => props.clickHandler(id)}
        ></i>
    </div>
    );
};

export default ContactCard;