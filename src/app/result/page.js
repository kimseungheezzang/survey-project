'use client'
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";


export default function ResultPage() {
    const { pickCards } = useSelector((state) => state.card);
    const [response, setResponse] = useState('');
    const { location } = useSelector((state) => state.place);
    const { pickPlaces } = useSelector((state) => state.objectPlace);

    const handleConfirm = () => {
        console.log(pickCards);
        console.log(location);
        console.log(pickPlaces);
        console.log("pickCards:", pickCards);
        console.log("pickObjects:", pickPlaces);

        if (pickCards.length === 0 || pickPlaces.length === 0) {
            console.error('pickCards 또는 object 비었다.');
            return;
        }

        const answer = pickCards.flatMap(card => card.pickCards).join(', ');

        const commend = `${pickCards[0]?.answer || ''} ${pickPlaces[0]?.answer || ''} ${location || ''} 이라는 단어들을 조합해서 술집추천을해줘!`;

        const apiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=AIzaSyD4SPVnwvSfNZ5VLz1VVYLFVlO23_RHCts';

        const data = { "contents": [{ "parts": [{ "text": commend }] }] };
        axios.post(apiUrl, data)
            .then(res => {
                setResponse(res.data.candidates[0].content.parts[0].text);
            })
            .catch(err => {
                console.log(err);
            });

    };

    return (
        <div>
            <div className="result">
                <button onClick={handleConfirm} className="resultButton">결과보기</button>
                {response && <div className="p-2 opacity-75 rounded-md bg-green-100">{response}</div>}
            </div>
        </div>
    );
}
