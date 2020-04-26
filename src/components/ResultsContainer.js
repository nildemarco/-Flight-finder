import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from "axios";

const CardContainer = styled.div`
width:80%;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
margin: 10px;
padding: 5px;`

const ResultsContainer = (props) => {
    const [results, setResults] = useState('');
    const [error, setError] = useState(null);

    const getParams = useParams();

    const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

    const item = {
        grant_type: 'client_credentials',
        client_id: 'npXztSngSv1dNgfNtyOMnnZayZvD5BOU',
        client_secret: process.env.REACT_APP_API_KEY
    };

    useEffect(() => {
        axios({
            method: 'post',
            url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
            data: toUrlEncoded(item),
        })
            .then(res => {
                const accessToken = res.data.access_token;

                axios.get(`https://test.api.amadeus.com/v1/shopping/flight-destinations?${getParams.params}`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
                )
                    .then(res => setResults(res.data))
                    .catch(err => setError(err))
            })
    }, [getParams.params])

    return (
        <>
            {results &&
                results.data.map((element, i) => {
                    return(
                    <CardContainer key={i}>
                        <h4>{element.origin}</h4>
                        <h4>{element.destination}</h4>

                <p>Price: {element.price.total}</p>
                    </CardContainer>
                )})
            }
            { error && 
              <div>
                  we coudn't find any results
              </div>

            }


        </>
    );
}

export default ResultsContainer;