'use client'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { pickPlace } from "@/lib/features/place/placeSlice";



export default function ThirdPage() {
    const dispatch = useDispatch();
    const { objectPlaces } = useSelector(state => state.objectPlace);
    const router = useRouter()

    const handlePick = (name, answer) => {
        dispatch(pickPlace({ name, answer }));
        console.log(pickPlace({name, answer}))
        router.push(`/result`)
    }

    return (
        <div className="flex">
            <div className="headerBeer">
                <h1>오늘은 어떤 종류의 술을 드실건가요 ?</h1>
                <div>
                    <div className="beer">
                        {objectPlaces.map((objectPlace, index) => (
                            <div key={index}>
                                <button className="beerButton" onClick={() => handlePick(objectPlace.name, objectPlace.answer)}>{objectPlace.answer}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}