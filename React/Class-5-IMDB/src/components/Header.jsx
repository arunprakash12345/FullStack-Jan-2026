import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 12px"
        }}>
            <h3>Scaler</h3>
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
                alignItems: "center"
            }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/abc">ABC</Link>
            </div>
        </div>
    );
};

export default Header;