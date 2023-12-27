import React, { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";

const ClientDetails = () => {
    const [clients, setClients] = useState([
        { id: 1, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 2, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 3, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 4, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 5, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 6, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 7, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 8, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 9, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 10, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 11, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 12, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 13, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 14, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 15, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 16, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 17, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 18, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 19, firstName: 'Milap', lastName: 'Leuva', email: 'milap@leuva.com', mobile: '123-456-7890' },
        { id: 20, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 21, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 22, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 23, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 24, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 25, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 26, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 27, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 28, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 29, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
        { id: 30, firstName: 'Boss', lastName: 'Leuva', email: 'boss@leuva.com', mobile: '987-654-3210' },
    ]);

    const [selectedClient, setSelectedClient] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAddClient = () => {
        const newClient = {
            id: clients.length + 1,
            firstName: prompt('Enter first name:'),
            lastName: prompt('Enter last name:'),
            email: prompt('Enter email:'),
            mobile: prompt('Enter mobile number:'),
        };

        if (newClient.firstName && newClient.lastName && newClient.email && newClient.mobile) {
            setClients((prevClients) => [...prevClients, newClient]);
        }
    }

    const handleEditClient = () => {
        const editedClient = {
            ...selectedClient,
            firstName: prompt('Edit first name:', selectedClient.firstName),
            lastName: prompt('Edit last name:', selectedClient.lastName),
            email: prompt('Edit email:', selectedClient.email),
            mobile: prompt('Edit mobile number:', selectedClient.mobile),
        };

        if (
            editedClient.firstName &&
            editedClient.lastName &&
            editedClient.email &&
            editedClient.mobile
        ) {
            setClients((prevClients) =>
                prevClients.map((client) =>
                    client.id === selectedClient.id ? editedClient : client
                )
            );
        }
    }

    const handleDeleteClient = () => {
        setClients((prevClients) =>
            prevClients.filter((client) => client.id !== selectedClient.id)
        );
        setSelectedClient(null);
    }

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const totalPages = Math.ceil(clients.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="clientdetails">
            <VscThreeBars style={{ cursor: "pointer", display: "flex" }} onClick={toggleMenu} />
            {menuOpen && (
                <div className="client-actions">
                    <button onClick={handleAddClient}>Add</button>
                    <button onClick={handleEditClient} disabled={!selectedClient}>
                        Edit
                    </button>
                    <button onClick={handleDeleteClient} disabled={!selectedClient}>
                        Delete
                    </button>
                </div>
            )}

            <table className="client-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((client) => (
                        <tr
                            key={client.id}
                            className={`client-item ${selectedClient && selectedClient.id === client.id ? 'selected' : ''}`}
                            onClick={() => setSelectedClient(client)}
                        >
                            <td>{client.id}</td>
                            <td>{client.firstName}</td>
                            <td>{client.lastName}</td>
                            <td>{client.email}</td>
                            <td>{client.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                {Array.from({ length: Math.ceil(clients.length / itemsPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default ClientDetails;