
const AddPetModal = ({ showModal, setShowModal, newPet, setNewPet, handleFormSubmit }) => {
    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPet((prev) => ({ ...prev, [name]: value }));
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md max-w-md w-full">
                <h3 className="text-2xl font-bold mb-4">Add a New Pet</h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newPet.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="mb-4">
                            <label className="block mb-2">Type</label>
                            <input
                                type="text"
                                name="type"
                                value={newPet.type}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Breed</label>
                            <input
                                type="text"
                                name="breed"
                                value={newPet.breed}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="mb-4">
                            <label className="block mb-2">Age</label>
                            <input
                                type="text"
                                name="age"
                                value={newPet.age}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Gender</label>
                            <input
                                type="text"
                                name="gender"
                                value={newPet.gender}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={newPet.image}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Description</label>
                        <textarea
                            name="description"
                            value={newPet.description}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="mr-4 px-4 py-2 border rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-darkBlue-600 text-white px-4 py-2 rounded-md hover:bg-darkBlue-800 transition-all"
                        >
                            Add Pet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPetModal;
