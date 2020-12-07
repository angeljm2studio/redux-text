import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator';




import { useForm } from '../../hooks/useForm'
import { startRegisterEmailaAndPassword } from '../../action/auth'
import { setError, uiRemoveError } from '../../action/ui'


export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)

    console.log(msgError)

    const [formValues, handleInputChange] = useForm({
        name: 'angel carrasco',
        email: 'yerlover@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2 } = formValues;


    const startRegister = (e) => {
        e.preventDefault();
        //    dispatch( startRegisterEmailaAndPassword(email,password, name))
        if (ifFormCorrect()) {
            dispatch(startRegisterEmailaAndPassword(email, password, name))
        }
    }


    const ifFormCorrect = () => {
        if (name.trim().length === 0) {
            dispatch(setError('name is required'))

            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is required'))
            
            return false;
        } else if (password !== password2 || password.length < 6) {
            dispatch(setError('password is required'))
            return false;
        }
        return uiRemoveError()
    }


    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={startRegister}>
                {
                    msgError &&
                    
                    <div className="auth__alert-error">
                    {msgError}
                </div>
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}

                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}

                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}

                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}

                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
