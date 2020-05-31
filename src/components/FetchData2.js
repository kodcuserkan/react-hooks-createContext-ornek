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
    const [ulke, setulke] = useState("Turkey");

    useEffect(() => {
        axios
            .get(url)
            .then(data => dispatch({
                type: 'FETCH_SUCCESS',
                payload: data.data.Countries
            }))
            .catch({ type: 'FETCH_FAIL' });

    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        handleSelect(input);
    }, [state.data, input])

    const handleChange = (e) => {
        e.preventDefault();
        setinput(e.target.value);
    }
    const handleSelect = async (ulke) => {
        try {
            const data = await state.data && state.data.filter(cntry =>( cntry.Country).toLowerCase() === ulke.toLowerCase());
            // console.log(typeof state.data[1].Country,  state.data[1].Country);
            setulke(data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <b>**FetchData2.js</b><br />

            {
                state.loading ? 'Yükleniyor...' :
                    <div>
                        <input type="text" value={input} onChange={e => handleChange(e)} />
                        <div className="Country"><p><b>Ülke adı: </b>{typeof ulke === "object" && ulke.Country}</p></div>
                        <div className="Country"><p><b>Kısa adı: </b>{typeof ulke === "object" && ulke.CountryCode}</p></div>
                        <div className="Country"><p><b>Sorgu tarihi: </b>{typeof ulke === "object" && ulke.Date}</p></div>
                        <div className="Country"><p><b>Yeni vaka sayısı: </b>{typeof ulke === "object" && ulke.NewConfirmed}</p></div>
                        <div className="Country"><p><b>Yeni ölüm: </b>{typeof ulke === "object" && ulke.NewDeaths}</p></div>
                        <div className="Country"><p><b>Bugün iyileşen: </b>{typeof ulke === "object" && ulke.NewRecovered}</p></div>
                        <div className="Country"><p><b>Toplam vaka: </b>{typeof ulke === "object" && ulke.TotalConfirmed}</p></div>
                        <div className="Country"><p><b>Toplam ölüm: </b>{ typeof ulke === "object" && ulke.TotalDeaths}</p></div>
                        <div className="Country"><p><b>Toplam iyileşen: </b>{ typeof ulke === "object" && ulke.TotalRecovered}</p></div>
                    </div>
            }

        </div>
    )
}

export default FetchData2;
