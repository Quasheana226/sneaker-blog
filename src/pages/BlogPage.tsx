// BLOG 

//This index page shows all sneakers post 

import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';

const BlogPage: React.FC = () => {
    return (
        <div style={{ padding: '40px 32px', maxWidth: "800px", margin: '0 auto' }}>
            <h1 style={{ color: '#fff', marginBottom: '8px' }}>Latest Drops</h1>
            <p style={{ color: '#888', marginBottom: '32px' }}>{posts.length} sneakers in the database</p>

            {posts.map((post) => (
                <div key={post.id}
                    style={{
                        marginBottom: '20px',
                        padding: '20px',
                        background: ' #1a1a1a',
                        borderRadius: '12px',
                        border: '1px solid #2a2a2a'
                    }}
                >
                    <p style={{
                        color: '#f97316',
                        fontSize: '12px',
                        margin: '0 0 6px',
                        textTransform: 'uppercase'
                    }}> {post.brand} ' {post.releaseDate} ' {post.price}

                    </p>
                    <h2 style={{
                        color: '#fff',
                        margin: '0 0 12px',
                        fontSize: '20px'
                    }}>{post.title}

                    </h2>
                    <Link to={`/blog/${post.slug}`}
                        style={{
                            color: '#f97316',
                            fontWeight: 600,
                            textDecoration: 'none'
                        }}
                    >
                        Read More Here
                    </Link>
                </div>
            ))
            }


        </div>
    )
};

export default BlogPage;