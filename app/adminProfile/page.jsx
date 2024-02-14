'use client'
// Import statements
import { useAuth } from '@/context/authContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AdminProfile = () => {
    // Styles
    const formInputStyle = 'w-[80%] p-3 rounded-md mb-4 outline-none';
    const formBtnStyle = 'bg-white px-8 py-4 rounded shadow-lg';

    // Authentication and routing
    const [auth, setAuth] = useAuth();
    const router = useRouter();

    // State variables
    const [addByPatternButton, setAddByPatternButton] = useState(true);
    const [addByTopicButton, setAddByTopicButton] = useState(false);
    const [addTopicButton, setAddTopicButton] = useState(false);
    const [addPatternButton, setAddPatternButton] = useState(false);

    // input states
    const [topic, setTopic] = useState("");
    const [pattern, setPattern] = useState("");


    // fetched data states
    const [allTopic, setAllTopic] = useState([]);


    // Function to handle logout
    const handleLogout = async () => {
        try {
            const { data } = await axios.get('api/auth/logout');
            if (data.success) {
                setAuth(null);
                localStorage.removeItem('auth');
                alert('Logged out');
                router.push('/login');
            }
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    };


    // Function to add a topic
    const addTopic = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/dsa/topic', { topic }, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (data.success) {
                alert(data.message)
            }
            else {
                alert(data.message)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    // Function to add a pattern
    const addPattern = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/dsa/pattern', { pattern }, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (data.success) {
                alert(data.message)
            }
            else {
                alert(data.message)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    //function to fetch all topics
    const getAllTopic = async () => {
        const { data } = await axios.get('/api/dsa/topic/alltopic')
        if (data.success) {
            setAllTopic(data?.topics)
        }
    }
    useEffect(() => {
        getAllTopic()
    }, [])




    return (
        <div className='pt-[7rem] text-center'>
            {/* Header */}

            <h1 className='font-bold text-[3rem] py-8'>Welcome</h1>
            <h2 className='font-semibold text-[2rem] capitalize'>{auth?.user?.name}</h2>

            {/* Logout button */}
            <button
                className='border-2 mt-10 px-8 py-4 rounded-md bg-red-400 text-[2rem] hover:bg-red-500'
                onClick={() => handleLogout()}
            >
                logout
            </button>

            {/* Main content */}
            <div className='border-2 w-full mt-8 flex'>
                {/* Navigation buttons */}
                <div className='flex flex-col justify-evenly items-center w-[30%] h-[40vh]'>
                    <button onClick={() => { setAddTopicButton(true); setAddPatternButton(false); setAddByTopicButton(false); setAddByPatternButton(false); }}>
                        Add topic
                    </button>
                    <button onClick={() => { setAddPatternButton(true); setAddTopicButton(false); setAddByTopicButton(false); setAddByTopicButton(false); }}>
                        Add pattern
                    </button>
                    <button onClick={() => { setAddByPatternButton(true); setAddByTopicButton(false); setAddTopicButton(false); setAddPatternButton(false); }}>
                        Add Question By Pattern
                    </button>
                    <button onClick={() => { setAddByTopicButton(true); setAddByPatternButton(false);  setAddTopicButton(false); setAddPatternButton(false); }}>
                        Add Question By topic
                    </button>
                </div>

                {/* Form section */}
                <div className='min-h-[40vh] h-[auto] w-[70%]'>
                    {addByPatternButton ?
                        //  add question by pattern form
                        <form className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                            <input className={formInputStyle} type="text" placeholder=' Pattern' />
                            <input className={formInputStyle} type="text" placeholder=' Question name' />
                            <input className={formInputStyle} type="text" placeholder=' Link' />
                            <button className={formBtnStyle}>
                                Add
                            </button>
                        </form>
                        :
                        //  add question by topic form
                        addByTopicButton ?
                            <form className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                                <input className={formInputStyle} type="text" placeholder=' Topic' />
                                <input className={formInputStyle} type="text" placeholder=' Question name' />
                                <input className={formInputStyle} type="text" placeholder=' Link' />
                                <button
                                    onClick={() => addTopic()}
                                    className={formBtnStyle}>Add</button>
                            </form>
                            :
                            // add topic
                            addTopicButton ?
                                <form
                                    onSubmit={addTopic}
                                    className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                                    <input
                                        className={formInputStyle}
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        type='text'
                                        placeholder=' Topic'
                                    />
                                    <button
                                        type='submit'
                                        className={formBtnStyle}>
                                        Add Topic
                                    </button>
                                </form>
                                :
                                //  add pattern form
                                addPatternButton ?
                                <form className='h-full bg-pink-500 flex flex-col items-center justify-center p-5'>
                                    {allTopic && allTopic.length > 0 ?
                                        allTopic.map((topic) => (
                                            <p key={topic._id}>
                                                {topic.topic}
                                            </p>
                                        ))
                                        : null
                                    }
                                    <input className={formInputStyle} type="text"
                                        value={pattern}
                                        onChange={(e) => setPattern(e.target.value)}
                                        placeholder=' Pattern' />
                                    <button
                                        onClick={() => addPattern()}
                                        className={formBtnStyle}>Add </button>
                                </form>
                                :""

                    }
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;