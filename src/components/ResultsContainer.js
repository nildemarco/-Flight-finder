import React, { useState, useEffect } from 'react';
import { Container, CardContainer, CardDetails, CardBottom, ErrorContainer } from './ResulstContainer.style';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { MdFlightTakeoff, MdFlightLand, MdAttachMoney } from 'react-icons/md';


const ResultsContainer = () => {
    const [results, setResults] = useState('');
    const [error, setError] = useState(null);

    const getParams = useParams();

    const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

    const item = {
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_API_KEY,
        client_secret: process.env.REACT_APP_API_KEY_SECRET
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

    console.log(results)
    return (
        <Container>
            {results &&
                results.data.map((element, i) => {
                    return (
                        <CardContainer key={i}>
                            <CardDetails>
                                <h4> Origin: {element.origin}</h4>
                                <h4> Destination: {element.destination}</h4>
                            </CardDetails>
                            <CardBottom>
                                <p> <MdFlightTakeoff
                                    className="icons-cardbottom" />
                                 Departure Date: {element.departureDate}
                                </p>
                                {
                                    element.returnDate &&
                                    <p> <MdFlightLand
                                        className="icons-cardbottom" />
                                    Return Date: {element.returnDate}
                                    </p>
                                }
                                <p>Price: <MdAttachMoney
                                    className="icons-cardbottom" />
                                    {element.price.total}
                                </p>
                                <button>Buy</button>
                            </CardBottom>
                        </CardContainer>
                    )
                })
            }
            {error &&
                <ErrorContainer>
                    Sorry, We coudn't find any results!
              </ErrorContainer>

            }
        </Container>
    );
}

export default ResultsContainer;