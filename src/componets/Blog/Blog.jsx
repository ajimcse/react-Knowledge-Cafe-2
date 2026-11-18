import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({ blog,  handleAddToBookmark}) => {
    const { title, cover, author, author_img, reading_time, posted_date,hashtags } = blog
    console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 ' src={cover} alt={`Cover pictur of the title${title}`} />
            <div className='flex justify-between mb-4'>
                <div>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                           <span>{reading_time} min read</span>
                           <button onClick={handleAddToBookmark}>
                           <FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;