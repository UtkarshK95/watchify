import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={Logo} alt="logo" height={70} width={100} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
