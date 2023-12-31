import { useEffect, useState } from 'react';
import axios from 'axios';

const Mypage = () => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    // Fetch user data from the server
    axios.get('/api/mypage')
      .then((response) => setUserData(response.data.사용자))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>{userData.id}님의 마이페이지</h2>
    </div>
  );
};

export default Mypage;
