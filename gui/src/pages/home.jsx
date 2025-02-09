import React, { useEffect, useState, useRef } from "react";
import { fetchPosts } from "../services/postService";
import "../styles/home.css";

function Home() {
    const [posts, setPosts] = useState([]);
    const loaderRef = useRef(null); 
    useEffect(() => {
        loadMorePosts();

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMorePosts();
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const loadMorePosts = async () => {
        const newPosts = await fetchPosts();
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    };

    return (
        <div className="post-feed">
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div key={index} className="post">
                        <h3>{post.user}</h3>
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt="Post" />}
                    </div>
                ))
            ) : (
                <p>Loading posts...</p>
            )}
            <div ref={loaderRef} className="loading-indicator">
                Loading more posts...
            </div>
        </div>
    );
}

export default Home;
