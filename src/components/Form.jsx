import React from 'react'
import { useEffect, useState } from 'react';

const Form = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        role: "",
        date: ""
    })

    const onChangeHandler = (e) => {
        setState((currState) => {
            return {
                ...currState,
                [e.target.name]: e.target.value
            }
        })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        useEffect(() => {
            fetch('http://localhost:5000/register')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error:', error));
        }, []);
        try {
            const response = await fetch('http://localhost:5000/', {
                body: JSON.stringify(state),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log(data)

        } catch (error) {
            console.log(error.message)

        }
    }

    return <>
        <div className="container py-5 px-5">
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3'>Empoyee's Details</div>
                <div className="mb-3">
                    <label className="form-label">Name<span className='text-changer'>*</span></label>
                    <input
                        type="name"
                        placeholder="Enter Your Name"
                        name="name"
                        value={state.name}
                        onChange={onChangeHandler}
                        className=" form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address<span className='text-changer'>*</span></label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        name="email" value={state.email}
                        onChange={onChangeHandler}
                        aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Role<span className='text-changer'>*</span></label>
                    <select
                        className="form-control"
                        name="role"
                        value={state.role}
                        onChange={onChangeHandler} >
                        <option value="Web Developer">Web Developer</option>
                        <option value="Android App Developer">Android App Developer</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="QA">QA</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Date<span className='text-changer'>*</span></label>
                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={state.date}
                        onChange={onChangeHandler} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </div >

    </>
}

export default Form