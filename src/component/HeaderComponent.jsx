import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Khai báo useNavigate

const HeaderComponent = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    function searchEmployee(e) {
        e.preventDefault();
        if (searchKeyword) {
            navigate(`/search-employee?keyword=${searchKeyword}`);
        }
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">Employee Management System</a>
                        <form className="d-flex" role="search" onSubmit={searchEmployee}>
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                                style={{ width: "400px" }} 
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;
