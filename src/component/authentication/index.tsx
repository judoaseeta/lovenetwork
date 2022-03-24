import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Authentication(): JSX.Element {
    return (
        <div className="w-screen h-screen bg-network1 flex justify-center items-center ">
            <div className="flex flex-col gap-y-10 bg-network3 shadow-lg shadow-slate-500">
                <Outlet />
                <div className="flex justify-center gap-12 p-6">
                    <NavLink to="signup" className="text-network4 text-sm font-bold">
                        회원 가입
                    </NavLink>
                    <NavLink to="signin" className="text-network4 text-sm font-bold">
                        로그인
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
