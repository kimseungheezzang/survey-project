'use client'
import 'animate.css';
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <div className="media">
            <div className="header">
                <h1>나만의 술집 찾기</h1>
            </div>
            <label className="labeltext">술집 선택이 어려울 때, 나만의 술집을 같이 찾아볼까요 ?</label>

            <div className="startButton">
                <button className="start" onClick={() => router.push('/first')} >시작하기</button>


            </div>
        </div>
    );
}
