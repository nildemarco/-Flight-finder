import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

const Forms = styled.form`
margin: 20px;
input {
    margin: 5px;
}
`

const Form = () => {
    const [dataSearch, setDataSearch] = useState({
        origin: '',
        departureDate: '',
        returnDate: '',
        oneWay: 'true',
    })

    const createQueryParams = (obj) => {

        let queryParams = JSON.stringify(obj);
        let s = "";
        for (let key in obj) {
            if (obj[key] !== '') {
                if (s !== "") {
                    s += "&";
                }
                s += (key + "=" + encodeURIComponent(obj[key]))
            }
        }
        queryParams = s
        return queryParams
    }

    const dayCounter = (date1, date2) => {
        let Difference_In_Time = Date.parse(date2) - Date.parse(date1)
        let days = Difference_In_Time / (1000 * 3600 * 24)
        return days
    }

    const history = useHistory();

    const handleChange = e => {
        setDataSearch({ ...dataSearch, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { origin, departureDate, returnDate, oneWay } = dataSearch;
        if (oneWay === 'true') {
            history.push(`/${createQueryParams(dataSearch)}`)
        }
        else {
            const newObj = {
                origin,
                departureDate,
                duration: dayCounter(departureDate, returnDate),
                oneWay
            }
            history.push(`/${createQueryParams(newObj)}`)
        }
    }
    console.log(dataSearch)
    return (
        <Forms onSubmit={handleSubmit}>
            <input type="radio" name="oneWay" onChange={handleChange} value='true' checked={dataSearch.oneWay === 'true'} ></input>Oneway
            <input type="radio" name="oneWay" onChange={handleChange} value='false' checked={dataSearch.oneWay === 'false'}></input>Roundtrip
            Origin <input type="text" name="origin" onChange={handleChange} value={dataSearch.origin} placeholder='Origin'></input>
            Departure Date<input type="date" name="departureDate" onChange={handleChange} value={dataSearch.departureDate}></input>
            {dataSearch.oneWay === 'false' &&
                <label> Return Date
                <input type="date" name="returnDate" onChange={handleChange} value={dataSearch.returnDate}></input>
                </label>
            }
            <input type="submit" name="submit" value="Search"></input>
        </Forms>
    );
}

export default Form;