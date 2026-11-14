import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time } = blog
    console.log(blog)
    return (
        <div>
            <img src={cover} alt={`Cover pictur of the title${title}`} />
            <div className='flex '>
                <div>
                    <img src={author_img} alt="" />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;