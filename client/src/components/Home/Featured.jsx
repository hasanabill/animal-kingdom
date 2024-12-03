import { useState, useEffect } from 'react';
import axios from 'axios';

const Featured = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('http://localhost:5000/animals');
                setPets(response.data.slice(0, 3));
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };
        fetchPets();
    }, []);

    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {pets.map((pet) => (
                    <div key={pet._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={pet.image}
                            alt={pet.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{pet.name}</h3>
                            <p className="text-gray-600">{pet.breed}</p>
                            <button className="mt-4 bg-darkBlue-600 text-white py-2 px-4 rounded-md hover:bg-darkBlue-800 transition-all">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;