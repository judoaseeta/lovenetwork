import { useCallback, useState } from 'react'
// components
import LabelledInput from './LabelledInput'
export default function Form() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [pwError, setPwError] = useState('')
    return (
        <form className="flex flex-col gap-y-10 rounded-md px-10 py-10 ">
            <LabelledInput label="이메일" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            <LabelledInput
                label="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
        </form>
    )
}
