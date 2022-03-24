import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// usecase
import { addAuthListener } from '../../usecase/firebase/auth'
export const useAuthStatus = () => {
    const navigate = useNavigate()
    useEffect(() => {
        addAuthListener((user) => {
            if (!user) {
                navigate('/auth/signin')
                return
            }

            if (user && !user.emailVerified) {
                navigate('/auth/verify_email')
            }
        })
    }, [])
}
