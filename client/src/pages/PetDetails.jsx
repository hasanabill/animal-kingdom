import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import EditPetModal from '../components/EditPetModal';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/animals/${id}`);
                setPet(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching pet details', err);
                setLoading(false);
            }
        };
        fetchPet();
    }, [id]);

    const handleUpdatePet = async (updatedPet) => {
        try {
            await axios.put(`http://localhost:5000/animals/${id}`, updatedPet);
            setPet(updatedPet);
            setShowEditModal(false);
        } catch (err) {
            console.error('Error updating pet:', err);
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-center py-16 text-red-600">{error}</div>;
    }

    return (
        <div className="py-16 px-4 max-w-4xl mx-auto bg-white shadow-md rounded-md">
            <div className="flex flex-col md:flex-row items-center">
                <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full md:w-1/2 h-64 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">{pet.name}</h2>
                    <p className="text-gray-600 mb-2"><strong>Breed:</strong> {pet.breed}</p>
                    <p className="text-gray-600 mb-2"><strong>Age:</strong> {pet.age}</p>
                    <p className="text-gray-600 mb-2"><strong>Gender:</strong> {pet.gender}</p>
                    <p className="text-gray-500 mt-4">{pet.description}</p>
                    <button
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-all"
                        onClick={() => setShowEditModal(true)}
                    >
                        Edit Pet
                    </button>
                </div>
            </div>
            {showEditModal && (
                <EditPetModal
                    pet={pet}
                    onClose={() => setShowEditModal(false)}
                    onSave={handleUpdatePet}
                />
            )}
        </div>
    );
};

export default PetDetails;