import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time, posted_date,hashtags } = blog
    console.log(blog)
    return (
        <div>
            <img src={cover} alt={`Cover pictur of the title${title}`} />
            <div className='flex justify-between'>
                <div>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                           <span>{reading_time} min read</span>
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