import React,{useContext, useState} from 'react'
import userContextProvider from '../../Context/UserContextProvider'
import userContext from '../../Context/UserContext'

const Login = () => {

const [usernamme, setusernamme] = useState('')
const [password, setpassword] = useState('')

// const {setuser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({usernamme,password})        
    }




    return (
        <>
            <div className='h-screen w-full relative flex justify-center items-center flex-col gap-5 '>
                <div className='w-80 border-black border-2 relative flex justify-center items-center flex-col gap-5 p-5'>
                    <h1>Login</h1>
                    <label for="username">Username</label>
                    <input type="text" 
                    value={usernamme}
                    onChange={(e) => setusernamme(e.target.value)}
                    id="username" name="username" placeholder='Username' />
                    <label for="password">Password</label>
                    <input type="password" 
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    id="password" name="password" placeholder='Password' />
                    <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
                </div>
            </div>

        </>
    )
}

export default Login