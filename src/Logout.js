const Logout = () => {
    localStorage.removeItem('token');
    return (
        <div>
            <h2>LoggedOut successfully</h2>
        </div>
    );
};

export default Logout;