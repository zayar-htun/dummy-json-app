import React, { useState, useContext } from "react";
import { TextField, MenuItem, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../context/AppContext";

const Filters = ({ columns, fetchData, type }) => {
    const {
        setPageSize,
        searchQuery,
        setSearchQuery,
        users,
        setFilteredUsers,
        products,
        setFilteredProducts,
    } = useContext(AppContext);
    const [pageSize, setLocalPageSize] = useState(5);

    const handlePageSizeChange = event => {
        const newSize = event.target.value;
        setLocalPageSize(newSize);
        setPageSize(newSize);
        fetchData({ limit: newSize });
    };

    const handleSearchChange = event => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        if (type === "users") {
            setFilteredUsers(
                users.filter(user =>
                    columns.some(column =>
                        user[column]?.toString().toLowerCase().includes(query)
                    )
                )
            );
        } else if (type === "products") {
            setFilteredProducts(
                products.filter(product =>
                    columns.some(column =>
                        product[column]
                            ?.toString()
                            .toLowerCase()
                            .includes(query)
                    )
                )
            );
        }
    };

    return (
        <div>
            <TextField
                select
                label="Page Size"
                value={pageSize}
                onChange={handlePageSizeChange}
                variant="outlined"
                margin="normal"
            >
                {[5, 10, 20, 50].map(size => (
                    <MenuItem key={size} value={size}>
                        {size}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                sx={{ ml: 4 }}
                label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                variant="outlined"
                margin="normal"
            />
        </div>
    );
};

export default Filters;
