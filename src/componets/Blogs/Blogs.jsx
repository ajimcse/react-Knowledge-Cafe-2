import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBolgs] = useState([]);

     useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBolgs(data));
  }, []);
    return (
        <div className="w-2/3">
            <h2>Blogs{blogs.length}</h2>
        </div>
    );
};

export default Blogs;