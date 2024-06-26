import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import DataTable from "../components/DataTable";
import Filters from "../components/Filters";
import PaginationComponent from "../components/Pagination";
import { Box } from "@mui/material";
import TabButton from "../components/TabButton";

const Products = () => {
    const {
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        pageSize,
    } = useContext(AppContext);
    const [page, setPage] = useState(1);

    const fetchProducts = async (params = {}) => {
        const response = await axios.get("https://dummyjson.com/products", {
            params: { limit: pageSize, skip: (page - 1) * pageSize, ...params },
        });
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
    };

    useEffect(() => {
        fetchProducts();
    }, [pageSize, page]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box sx={{ my: 2 }}>
                <TabButton />
            </Box>
            <Box sx={{ my: 2 }}>
                <Filters
                    columns={["title", "brand", "category"]}
                    fetchData={fetchProducts}
                    type="products"
                />
            </Box>
            <Box sx={{ my: 2 }}>
                <DataTable
                    data={filteredProducts}
                    columns={[
                        "title",
                        "brand",
                        "category",
                        "price",
                        "stock",
                        "rating",
                    ]}
                />
            </Box>
            <Box sx={{ my: 2 }}>
                <PaginationComponent
                    count={10}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                />
            </Box>
        </Box>
    );
};

export default Products;
