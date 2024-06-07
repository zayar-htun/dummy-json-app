import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TabButton() {
    const navigate = useNavigate();
    return (
        <Box>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Users
                </Button>
                <Button
                    variant="outlined"
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
