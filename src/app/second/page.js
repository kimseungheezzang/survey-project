'use client'
import { useDispatch, useSelector } from "react-redux";
import { pickCard } from "@/lib/features/alcohol/alcoholSlice";
import {useRouter} from "next/navigation";

export default function SecondPage() {
    const dispatch = useDispatch();
    const { cards } = useSelector(state => state.card);
    // state 뒤에 reducer 이름으로 써야 함
    const router = useRouter()
    const handleOpenBread = (name, answer) => {
        dispatch(pickCard({ name, answer }));
        router.push(`/third`)
    }

    return (
        <div className="flex">
            <div className="headerBeer">
                <h1>오늘은 어떤 종류의 술을 드실건가요 ?</h1>
                <div>
                    <div className="beer">
                        {cards.map((card, index) => (
                            <div key={index}>
                                <button className="beerButton" onClick={() => handleOpenBread(card.name, card.answer)}>{card.answer}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}