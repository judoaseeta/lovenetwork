import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './intro'
import Network from './network'
import Authentication from './component/authentication'
import SignIn from './component/authentication/signin'
import SignUp from './component/authentication/signup'
import NotifyVerifyingEmail from './component/authentication/notifyVerifyingEmail'
// usecase
import { signOut, addAuthListener } from './usecase/firebase/auth'
// hook
import { useAuthStatus } from './hooks/auth'
function App() {
    useAuthStatus()
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="network" element={<Network />} />
            <Route path="auth" element={<Authentication />}>
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="verify_email" element={<NotifyVerifyingEmail />} />
            </Route>
        </Routes>
    )
}

export default App
