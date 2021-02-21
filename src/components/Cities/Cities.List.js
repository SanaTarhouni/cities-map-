import React, { useState } from 'react'
import { CityItem } from '../../Style'

const CitiesList = (props) => {

    return (
        <div>
            <ul>
                {Object.values(props.cities).map((city, i) =>
                    <CityItem key={i} onClick={() => props.onClickCity({ lat: city.lat, lng: city.lng })}> {city.city}</CityItem>
                )}
            </ul>
        </div>
    )
}
export default CitiesList;
