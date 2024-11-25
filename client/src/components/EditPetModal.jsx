import { useState } from "react";

const EditPetModal = ({ pet, onClose, onSave }) => {
    const [updatedPet, setUpdatedPet] = useState({ ...pet });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPet((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(updatedPet);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Edit Pet</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedPet.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Type</label>
                        <input
                            type="text"
                            name="type"
                            value={updatedPet.type}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Breed</label>
                        <input
                            type="text"
                            name="breed"
                            value={updatedPet.breed}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Age</label>
                        <input
                            type="text"
                            name="age"
                            value={updatedPet.age}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Gender</label>
                        <select
                            name="gender"
                            value={updatedPet.gender}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={updatedPet.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPetModal;