import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({ handleAddToBookmark }) => {
    const [blogs, setBolgs] = useState([]);

    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => res.json())
            .then((data) => setBolgs(data));
    }, []);
    return (
        <div className="w-2/3">
            <h2>Blogs{blogs.length}</h2>

            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                >
                </Blog>)
            }

        </div>
    );
};

export default Blogs;