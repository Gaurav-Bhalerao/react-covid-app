import React, { useState, useEffect } from 'react';

const Pagination = (props) => {
    const [pagecounter, setpagecounter] = useState(1);
    // number of buttons pagination
    // const [numbercounterbutttons, setnumbercounterbuttons] = useState(Math.ceil(props.dataLength / props.showperpage));

    useEffect(() => {
        const values = props.showperpage * pagecounter;
        props.changePageValues(values - props.showperpage, values);
    }, [pagecounter]);

    return (<>
        <div className="pagination_container container text-center">
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="btn btn-primary mx-2" href="!#" onClick={()=>{ pagecounter === 1 ? setpagecounter(1) : setpagecounter(pagecounter - 1) }}>
                            <span>&laquo; Previous </span>
                        </button>
                    </li>
                    
                    {/*
                        new Array(numbercounterbutttons).fill("").map((eachItem, index) => {
                            return(<> 
                                <li className={`page-item ${index+1 === pagecounter ? "active" : null }`}> 
                                    <a class="page-link" href="!#"> {index + 1} </a> 
                                </li> 
                            </>)
                        })
                    */}

                    <li className="page-item">
                        <button className="btn btn-primary mx-2" onClick={()=>{ /*numbercounterbutttons*/ Math.ceil(props.dataLength / props.showperpage) === pagecounter ? setpagecounter(pagecounter) : setpagecounter(pagecounter + 1) }}>
                            <span> Next &raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </>);
}

export default Pagination;
