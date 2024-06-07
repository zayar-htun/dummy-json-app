import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TabButton() {
    const navigate = useNavigate();
    const location = useLocation();
    const isUsersActive = location.pathname === "/";
    const isProductsActive = location.pathname === "/products";
    return (
        <Box>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                variant={isUsersActive ? "contained" : "outlined"}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Users
                </Button>
                <Button
                    variant={isProductsActive ? "contained" : "outlined"}
                    onClick={() => {
                        navigate("/products");
                    }}
                >
                    Products
                </Button>
            </ButtonGroup>
        </Box>
    );
}
