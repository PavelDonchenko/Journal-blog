import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { NextPage } from 'next';



const Home: NextPage = () => {
  return (
    <MainLayout>
     <Post />
    </MainLayout>
  );
};



export default Home;
