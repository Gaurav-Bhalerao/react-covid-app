import React from 'react';
import Card from './Card';

const CardsComp = (props) => {
    return (<>
        <div className="card_container container my-5">
            <Card header="Today's Cases" todaycount={props.countryInfo.todayCases} totalcount={props.countryInfo.cases} />
            <Card header="Today's Recovery Count" todaycount={props.countryInfo.todayRecovered} totalcount={props.countryInfo.recovered} />
            <Card header="Today's Death Count" todaycount={props.countryInfo.todayDeaths} totalcount={props.countryInfo.deaths} />
        </div>
    </>);
}

export default CardsComp;
