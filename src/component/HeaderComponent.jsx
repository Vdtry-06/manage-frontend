

const HeaderComponent = () => {
    return (
      <div>
          <header>
              <nav className="navbar navbar-dark bg-dark">
                  <div className="container">
                      <a className="navbar-brand" href="#">Employee Management System</a>
                      <form className="d-flex" role="search">
                          <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            style={{ width: "400px" }} 
                          />
                          <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                  </div>
              </nav>
          </header>
      </div>
    )
}

export default HeaderComponent;

  