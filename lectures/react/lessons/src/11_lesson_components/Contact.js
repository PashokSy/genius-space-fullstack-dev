import { useLocation, useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <>
      <h1>Contact</h1>
      <button onClick={() => navigate(-1)}>Return back</button>
    </>
  );
};

export default Contact;
