import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import AuthWrapper from './authwrapper';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Auth from '../routes/auth';

const App = () => (
  <div id="app" class="flex justify-center items-center min-h-screen bg-gray-200 text-black">
    <div class="w-full sm:w-1/3 bg-slate-100 p-4 shadow-lg h-screen">
      <Header />
      <main class="pt-14">
        <Router>
          {/* <Auth path="/auth" /> */}
		  <AuthWrapper path="/auth" component={Auth} />
          <AuthWrapper path="/" component={Home} />
        </Router>
      </main>
    </div>
  </div>
);

export default App;