//NAV BAR 

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



const Navbar: React.FC = () => {


    const { isAuthenticated, logout } = useAuth();

    return (

        <nav style={{
            padding: '16px 32px ',
            background: '#111',
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            borderBottom: '1px splid #222'

        }}>

            <Link to='/' style={{ color: '#f97316', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}> SneakerDrop
            </Link>

            <NavLink to='/blog' style={({ isActive }) => ({
                color: isActive ? '#f97316' : '#fff',
                textDecoration: 'none',
                fontWeight: isActive ? 700 : 400,

            })}>
                blog

            </NavLink>

            {isAuthenticated ? (
                <>
                    <NavLink to='/admin'
                        style={({ isActive }) => ({
                            color: isActive ? '#f97316' : '#fff',
                            textDecoration: 'none',
                            fontWeight: isActive ? 700 : 400,
                        })}
                    >
                        Admin
                    </NavLink>

                    <button onClick={logout} style={{
                        marginLeft: 'auto',
                        background: 'none',
                        border: '1px solid #f97316',
                        color: '#f97316',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 600,
                    }}>
                        Log out
                    </button>
                </>
    ) : (

        <Link to='/login'
            style={{ marginLeft: 'auto', color: '#f97316', textDecoration: 'none', fontWeight: 600 }}
        >

            Log in
        </Link>
    )
}
            </nav >
    )
}

export default Navbar;
