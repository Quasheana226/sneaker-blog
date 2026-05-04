// NOT FOUND PAGE 404 Catch all

import type React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
    return (
        <div style={{ padding: '80px 32px', textAlign: 'center' }}>
            <h1 style={{ color: '#fff', fontSize: '72px', margin: '0 0 8px', fontWeight: 900 }}>404</h1>
            <p style={{ color: '#888', marginBottom: '24px' }}>This page doesn't exist.</p>
            <Link to="/" style={{ color: '#f97316', fontWeight: 600 }}>← Go Home</Link>
        </div>
    )
}

export default NotFoundPage