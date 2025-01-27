import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from "react-bootstrap";
import { UserContext } from '../../context/UserContext'

const Profile = () => {
  const { token, logout, getProfile } = useContext(UserContext); 
  const [email, setEmail] = useState(''); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile(); 
        if (profile && profile.email) {
          setEmail(profile.email); 
        } else {
          setError(true); 
        }
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
        setError(true);
      } finally {
        setLoading(false); 
      }
    };

    if (token) {
      fetchProfile();
    } else {
      setLoading(false); 
    }
  }, [getProfile, token]);


  if (loading) {
    return <p>Cargando perfil...</p>;
  }

  if (!token || error) {
    return <Navigate to="/login" />;
  }

  return (
    <Container fluid="md" className='d-flex flex-wrap justify-content-md-center'>
        <h1 style={{width: "100%"}}>Tu perfil</h1>
        <h2 style={{width: "100%"}}>Usuario: {email}</h2>
        <div style={{width: "100%"}}>
            <Link to='/'>
                <Button variant='outline-primary' onClick={logout}>🔒 Logout</Button>
            </Link>
        </div>
    </Container>
  )
}

export default Profile