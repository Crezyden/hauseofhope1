import Header from './components/Header';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const WhoWeAre = lazy(() => import('./pages/WhoWeAre')),
  Hope21 = lazy(() => import('./pages/Hope21')),
  Gallery = lazy(() => import('./pages/Gallery')),
  Activity = lazy(() => import('./pages/Activity')),
  Contacts = lazy(() => import('./pages/Contacts')),
  Home = lazy(() => import('./pages/Home'));
function App() {
  return (
    <Router>
      <Header />
      <section className="content">
        <Suspense fallback={null}>
          <Switch>
            <Route path="/:lang" exact component={Home} />
            <Route path="/:lang/whoweare" component={WhoWeAre} />
            <Route path="/:lang/hope21" component={Hope21} />
            <Route path="/:lang/gallery" component={Gallery} />
            <Route path="/:lang/activity" component={Activity} />
            <Route path="/:lang/contacts" component={Contacts} />
          </Switch>
        </Suspense>
      </section>
      <Footer />
    </Router>
  );
}
export default App;