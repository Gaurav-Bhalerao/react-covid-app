import React from 'react'

const Header = (props) => {
    return (<>
        <header className="header_container container-fluid">
            <div className="header container">
                <div id="header_logo"> React Covid Tracker </div>
                <div className="header_dropdown">
                    <select className="form-select" onChange={props.inputEvent} value={props.cname} >
                        <option value="worldwide"> Worldwide </option>
                        {
                            props.country_data.map((eachItem, index) => {
                                return <option key={index} value={eachItem.cCode}> {eachItem.cName} </option>
                            })
                        }
                    </select>
                </div>
            </div>
        </header>
    </>);
}

export default Header;
