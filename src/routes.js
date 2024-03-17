import Home from './pages/Home';
import About from './pages/monitoring';
import Contact from './pages/Us';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/monitoring', component: <About /> },
  { path: '/us', component: <Contact /> },
];

export default routes;