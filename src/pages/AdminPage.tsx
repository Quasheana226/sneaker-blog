// ADMIN PROTECTED 
// If user sees this page that mean there authenticated 

const AdminPage: React.FC = () => {
    return (
        <div style={{ padding: '40px 32px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#fff', marginBottom: '8px' }}>
                Welcome to the Admin Dashboard
            </h1>
            <p style={{ color: '#888', marginBottom: '32px' }}>
                You're logged in. Manage your sneaker drops here.
            </p>

            <div style={{
                padding: '20px',
                background: '#1a1a1a',
                borderRadius: '12px',
                border: '1px solid #2a2a2a',
                color: '#ccc',
            }}>
                🔒 This page is protected — unauthenticated users are automatically

            </div>
        </div>
    );
};

export default AdminPage