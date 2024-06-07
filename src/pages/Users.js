import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import DataTable from "../components/DataTable";
import Filters from "../components/Filters";
import PaginationComponent from "../components/Pagination";
import TabButton from "../components/TabButton";
import { Box } from "@mui/material";

const Users = () => {
    const { users, setUsers, pageSize } = useContext(AppContext);
    const [page, setPage] = useState(1);

    const fetchUsers = async (params = {}) => {
        const response = await axios.get("https://dummyjson.com/users", {
            params: { limit: pageSize, skip: (page - 1) * pageSize, ...params },
        });
        setUsers(response.data.users);
    };

    useEffect(() => {
        fetchUsers();
    }, [pageSize, page]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box sx={{my:2}}>
                <TabButton />
            </Box>
            <Box sx={{my:2}}>
                <Filters
                    columns={["firstName", "lastName", "email"]}
                    fetchData={fetchUsers}
                />
            </Box>
            <Box sx={{my:2}}>
                <DataTable
                    data={users}
                    columns={[
                        "firstName",
                        "lastName",
                        "email",
                        "phone",
                        "age",
                        "gender",
                    ]}
                />
            </Box>
            <Box sx={{my:2}}>
                <PaginationComponent
                    count={10}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                />
            </Box>
        </Box>
    );
};

export default Users;
