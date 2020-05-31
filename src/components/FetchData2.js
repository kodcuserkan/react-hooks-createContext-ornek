import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const url = 'https://api.covid19api.com/summary';

const initialState = {
    error: "",
    data: {},
    loading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':

            return {
                loading: false,
                error: "",
                data: action.payload,
            };
        case 'FETCH_FAIL':

            return {
                loading: false,
                error: "Kaynaktan veri çekilirken hata oluştu...",
                data: {},
            };
        default:
            return state;
    }
}


function FetchData2() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setinput] = useState("Turkey");
    

    useEffect(() => {
        axios
            .get(url)
            .then(data => dispatch({
                type: 'FETCH_SUCCESS',
                payload: (data.data.Countries.filter(ulke => ulke.Country === input)[0]) == undefined ? {} : data.data.Countries.filter(ulke => ulke.Country === (input == "" ? "Germany": input))[0]
            }))
            .catch({ type: 'FETCH_FAIL' });
    }, [state.data.Country]);

    const handleChange = (e) => {
        e.preventDefault();
        setinput(e.target.value)
    }
    console.log(state, input)

    return (
        <div>
        <b>**FetchData2.js</b><br/>

            {
                state.loading ? 'Yükleniyor...' :
                    <div>
                        <input type="text" value={input} onChange={e => handleChange(e)}/>
                        <div className="Country"><p><b>Ülke adı: </b>{state.data.Country}</p></div>
                        <div className="Country"><p><b>Kısa adı: </b>{state.data.CountryCode}</p></div>
                        <div className="Country"><p><b>Sorgu tarihi: </b>{state.data.Date}</p></div>
                        <div className="Country"><p><b>Yeni vaka sayısı: </b>{state.data.NewConfirmed}</p></div>
                        <div className="Country"><p><b>Yeni ölüm: </b>{state.data.NewDeaths}</p></div>
                        <div className="Country"><p><b>Bugün iyileşen: </b>{state.data.NewRecovered}</p></div>
                        <div className="Country"><p><b>Toplam vaka: </b>{state.data.TotalConfirmed}</p></div>
                        <div className="Country"><p><b>Toplam ölüm: </b>{state.data.TotalDeaths}</p></div>
                        <div className="Country"><p><b>Toplam iyileşen: </b>{state.data.TotalRecovered}</p></div>
                    </div>
            }

        </div>
    )
}

export default FetchData2;
