const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" />;
    }
    return children;
};