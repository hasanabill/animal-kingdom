// Adopt.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddPetModal from '../components/AddPetModal';
import { Link } from 'react-router-dom';


const Adopt = () => {
    const [pets, setPets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newPet, setNewPet] = useState({
        _id: '',
        name: '',
        type: '',
        breed: '',
        age: '',
        gender: '',
        image: '',
        description: '',
    });

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('http://localhost:5000/animals');
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };
        fetchPets();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/animals', newPet);
            setShowModal(false);
            setNewPet({
                name: '',
                type: '',
                breed: '',
                age: '',
                gender: '',
                image: '',
                description: '',
            });
            const response = await axios.get('http://localhost:5000/animals');
            setPets(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error adding pet:', error);
        }
    };

    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10">Available Pets for Adoption</h2>
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-darkBlue-600 text-white py-2 px-4 rounded-md hover:bg-darkBlue-800 transition-all"
                >
                    Add New Pet
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {pets.map((pet) => (
                    <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{pet.name}</h3>
                            <h3 className="">{pet.type}</h3>
                            <p className="text-gray-600">{pet.breed} - {pet.age}</p>
                            <p className="text-gray-500 mt-2 mb-3">{pet.description}</p>
                            <Link to={`/pets/${pet._id}`} className="mt-4 bg-darkBlue-600 text-white py-2 px-4 rounded-md hover:bg-darkBlue-800 transition-all">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <AddPetModal
                showModal={showModal}
                setShowModal={setShowModal}
                newPet={newPet}
                setNewPet={setNewPet}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
};

export default Adopt;
