import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Video from './components/Video';
import NavBar from './components/NavBar';
import Business from './components/Business';
import SingleBusiness from './components/SingleBusiness';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Video} path='/video' />
        <Route component={SingleBusiness} path='/business/:slug' />
        <Route component={Business} path='/business' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
