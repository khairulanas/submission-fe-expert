import HomePage from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
