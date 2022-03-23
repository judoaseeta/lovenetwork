import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Intro(): JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center bg-primary ">
            <div className="bg-secondary w-screen h-screen  p-10">
                <h1 className="text-cont1 text-8xl">인간 관계는 중요하죠.</h1>
                <NavLink to="network">보기</NavLink>
            </div>
            <div className="bg-secondary w-screen h-screen  p-10">
                <h2 className="text-cont2 text-7xl">관심사가 같은 친구를 찾아보세요. 🧐</h2>
            </div>
            <div className="bg-secondary w-screen h-screen  p-10">
                <h2 className="text-cont3 text-5xl">호감 가는 친구에게 호감을 맘껏 표현하세요. 😘 </h2>
            </div>
        </div>
    )
}
