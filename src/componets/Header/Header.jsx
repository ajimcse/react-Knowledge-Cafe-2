import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className="text-xl font-bold text-blue-600 ">
           Knowledge Cafe
            </h1>
        <img src={profile} alt="" />
        </div>
    );
};

export default Header;