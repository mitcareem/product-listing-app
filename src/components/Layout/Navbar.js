import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Toolbar,
  AppBar,
  Badge,
  IconButton,
  Container,
  InputBase,
} from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// context
import { CardContext } from "../../contexts/CardContextProvider";
import { ProductContext } from "../../contexts/ProductContextProvider";

const Navbar = () => {
  const { state } = useContext(CardContext);
  const { products, setProducts } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };


  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#b7b7b7",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/products">
            <Typography variant="h6" component="div" color="text.secondary">
              Store
            </Typography>
          </Link>

          {/* searchbar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "0 8px",
              outline: "1px solid white",
            }}
          >
            <SearchIcon />
            <InputBase
              style={{ color: "white" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <Link to="/cards">
            <IconButton>
              <Badge badgeContent={state.itemsCounter} color="info">
                <ShoppingCartIcon color="action" sx={{ fontSize: "30px" }} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
