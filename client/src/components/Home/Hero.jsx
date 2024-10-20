import heroImage from '../../assets/hero-1.jpg';


const Hero = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat h-[800px] flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-darkBlue-800 bg-opacity-15"></div>
            <div className="relative z-10 text-white max-w-2xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Animal Kingdom</h1>
                <p className="text-lg mb-6">
                    Find your perfect companion and give a pet a forever home today.
                </p>
                <button className="bg-darkBlue-600 hover:bg-darkBlue-800 text-white py-2 px-6 rounded-md font-semibold transition-all">
                    Adopt Now
                </button>
            </div>
        </div>
    );
};

export default Hero;
