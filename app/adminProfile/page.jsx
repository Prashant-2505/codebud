'use client'

import { useAuth } from '@/context/authContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AdminProfile = () => {

    const formInputStyle = ' w-[80%] p-3 rounded-md mb-4 outline-none'
    const formBtnStyle = 'bg-white px-8 py-4 rounded shadow-lg'

    const [addByPattern, setAddByPattern] = useState(true)
    const [addByTopic, setAddByTopic] = useState(false)
    const [addTopic, setAddTopic] = useState(false)
    const [addPattern, setAddPattern] = useState(false)


    const [auth, setAuth] = useAuth()
    const router = useRouter()

    const handleLogout = async () => {
        const { data } = await axios.get('api/auth/logout')
        if (data.success) {
            setAuth(null);
            localStorage.removeItem('auth');
            alert('Logged out')
            router.push('/login')
        }
        console.log(data)
    }
    return (
        <div className=' pt-[7rem] text-center '>
            <h1 className=' font-bold text-[3rem] py-8'>Welcome</h1>
            <h2 className=' font-semibold text-[2rem] capitalize'>{auth?.user?.name}</h2>
            <button className=' border-2 mt-10 px-8 py-4 rounded-md bg-red-400  text-[2rem] hover:bg-red-500'
                onClick={() => handleLogout()}>
                logout
            </button>

            <div className="  border-2 w-full mt-8 flex">
                <div className=" flex flex-col justify-evenly items-center w-[30%] h-[40vh]">

                    <button onClick={() => { setAddTopic(true), setAddPattern(false), setAddByTopic(false), setAddByPattern(false) }}>Add  topic</button>

                    <button onClick={() => { setAddTopic(false), setAddPattern(true), setAddByTopic(false), setAddByTopic(false) }}>Add pattern</button>

                    <button onClick={() => { setAddByPattern(true), setAddByTopic(false), setAddTopic(false), setAddPattern(false) }}>Add Question By Pattern</button>

                    <button onClick={() => { setAddByPattern(false), setAddByTopic(true), setAddTopic(false), setAddPattern(false) }}>Add Question By topic</button>
                </div>

                <div className=' min-h-[40vh] h-[auto] w-[70%]'>
                    {addByPattern ?
                        //  add question by pattern form
                        <form className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                            <input className={formInputStyle} type="text" placeholder=' Pattern' />
                            <input className={formInputStyle}
                                type="text" placeholder=' Question name' />
                            <input
                                className={formInputStyle}
                                type="text" placeholder=' Link' />
                            <button className={formBtnStyle}>
                                Add
                            </button>
                        </form>

                        :
                        //  add question by topic form
                        addByTopic ?
                            <form className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                                <input className={formInputStyle} type="text" placeholder=' Topic' />
                                <input className={formInputStyle}
                                    type="text" placeholder=' Question name' />
                                <input
                                    className={formInputStyle}
                                    type="text" placeholder=' Link' />
                                <button
                                    onClick={() => addByTopic()}
                                    className={formBtnStyle}>Add</button>
                            </form>

                            :
                            // add topic
                            addTopic ?
                                <form className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                                    <input className={formInputStyle} type="text" placeholder=' Topic' />

                                    <button
                                        onClick={() => addTopic()}
                                        className={formBtnStyle}>Add</button>
                                </form>

                                :
                                //  add pattern form
                                <form className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                                    <input className={formInputStyle} type="text" placeholder=' Pattern' />

                                    <button
                                        onClick={() => addPattern()}
                                        className={formBtnStyle}>Add</button>
                                </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminProfile
