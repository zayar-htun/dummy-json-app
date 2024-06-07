import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <AppContext.Provider
            value={{
                users,
                setUsers,
                filteredUsers,
                setFilteredUsers,
                products,
                setProducts,
                filteredProducts,
                setFilteredProducts,
                pageSize,
                setPageSize,
                searchQuery,
                setSearchQuery,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
