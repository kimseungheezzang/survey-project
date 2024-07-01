'use client'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {patchLocationName} from "@/lib/features/location/locationSlice";
import {useRouter} from "next/navigation";

export default function FirstPage() {
    const [location, setLocation] = useState('')
    const router = useRouter()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log(location)
        e.preventDefault()
        console.log(location)
        dispatch(patchLocationName(location))
        console.log(location)
        router.push(`/second`)
    }


    return (
        <form className="all" onSubmit={handleSubmit}>
            <div className="map">
                <h1>당신은 어디 지역에서 사시나요?</h1>
            </div>
            <div className="map">
                <input className="input" type="text" value={location}  onChange={(e) => setLocation(e.target.value)}/>
                <button type="submit" className="buttons">입력</button>
            </div>
        </form>
    )
}

