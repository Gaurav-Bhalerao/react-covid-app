import React, { useState } from 'react';
import Pagination from './Pagination';

const CountryTable = (props) => {
    // number of data to show per page
    const showperpage = 7;
    // starting and ending values for padination next and previous buttons // value is used in slice
    const [pagevalues, setpagevalues] = useState({
        startPoint : 0,
        endPoint : 7,
    });

    // the function is getting its values from Paginantion.js and changing the values of pagevalues Hook
    const changePageValues = (start, end) => {
        console.log("Start : ", start);
        console.log("End : ", end);
        setpagevalues({
            startPoint : start,
            endPoint : end,
        });
    }
    
    /*
    // sort data of table order by largest number of cases
    const sortData = (arrayofobject) => {
        const sortedData = [...arrayofobject];
        sortedData.sort((a, b) => {
          if(a.cCases > b.cCases) {
            return -1;
          }
          else {
            return 1;
          }
        });
        return sortedData;
    }
    const sortedData = sortData(props.country_data);
    console.log(sortedData);  
    */

    return (<>
        <table className="table table-danger container table-striped table-hover" style={{marginTop : '-25px'}}>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col"> Country </th>
                <th scope="col"> Live Cases </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.country_data.slice(pagevalues.startPoint,pagevalues.endPoint).map((eachItem, index)=>{
                        return(<>
                        <tr key={index}>
                            <th scope="row">{eachItem.cKey + 1}</th>
                            <td> {eachItem.cName}, {eachItem.cCode} </td>
                            <td> {eachItem.cCases} </td>
                        </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
        <Pagination showperpage={showperpage} changePageValues={changePageValues} dataLength={props.country_data.length} />
    </>);
}

export default CountryTable;
