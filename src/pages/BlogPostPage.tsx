// /BLOG/:SLUG

// Dynamis route uses `` useParm to grab the slug 

import type React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from '../lib/posts'


const BlogPostPage: React.FC = () => {


    const { slug } = useParams<{ slug: string }>();
    //,find loops through array and return first post 

    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        return (
            <div style={{ padding: '80px 32px', color: '#fff', textAlign: 'center' }}>
                <h2>Sneaker not found 👟</h2>
                <p style={{ color: '#888', marginBottom: '24px' }}>
                    No drop matches the slug: <code style={{ color: '#f97316' }}>{slug}</code>
                </p>
                <Link to="/blog" style={{ color: '#f97316' }}>← Back to all drops</Link>
            </div>
        );
    }

    // Post was found — render it
    return (
        <div style={{ padding: '40px 32px', maxWidth: '800px', margin: '0 auto' }}>

            {/* Back button */}
            <Link to="/blog" style={{ color: '#f97316', textDecoration: 'none', fontSize: '14px' }}>
                ← Back to all drops
            </Link>

            {/* Post details */}
            <h1 style={{ color: '#fff', marginTop: '24px', marginBottom: '8px' }}>{post.title}</h1>
            <p style={{ color: '#f97316', fontSize: '13px', marginBottom: '24px' }}>
                {post.brand} · Released {post.releaseDate} · {post.price}
            </p>
            <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: '16px' }}>{post.content}</p>
        </div>


    )
}


export default BlogPostPage;