import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/home';
import UI from './pages/UI/basic';
import UI2 from './pages/UI/dark';
import Alert from './pages/UiElements/Alerts';
import Credit from './pages/Credit'
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import Integrate from './pages/UI/integrate';
import Verify from './pages/Authentication/Verify';
import Terms from './pages/T&C';
import Cancellation from './pages/Cancellation';
import PrivacyPolicy from './pages/Privacy';

const Chart = lazy(() => import('./pages/Chart'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/BotSetting'));
const AddBot = lazy(() => import('./pages/AddBot'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
const Chats = lazy(() => import('./components/TableThree') )
const Docs = lazy(() => import('./pages/Documents'))
const AddDocs = lazy(() => import('./pages/AddDoc'))
const Feedback = lazy(() => import('./pages/Feedback'))

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route
            path="/verify"
            element={<Verify />}
          />
        <Route
            path="/ui/1/*"
            element={
              <Suspense fallback={<Loader />}>
                <UI />
              </Suspense>
            } />

          <Route
            path="/alert"
            element={
              <Suspense fallback={<Loader />}>
                <Alert />
              </Suspense>
            } />

         <Route
            path="/ui/2/*"
            element={
              <Suspense fallback={<Loader />}>
                <UI2 />
              </Suspense>
            } />

        <Route element={<DefaultLayout />}>
        <Route
            path="/integrate"
            element={
              <Suspense fallback={<Loader />}>
                <Integrate />
              </Suspense>
            } />
            
          <Route index element={<Dashboard />} />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />

          <Route
            path="/credit"
            element={
              <Suspense fallback={<Loader />}>
                <Credit/>
              </Suspense>
            } />

          
          <Route
            path="/feedback"
            element={
              <Suspense fallback={<Loader />}>
                <Feedback />
              </Suspense>
            }
          />
          
          <Route
            path="/forms/form-elements"
            element={
              <Suspense fallback={<Loader />}>
                <FormElements />
              </Suspense>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <Suspense fallback={<Loader />}>
                <FormLayout />
              </Suspense>
            }
          />
          <Route
            path="/chats"
            element={
              <Suspense fallback={<Loader />}>
                <Chats />
              </Suspense>
            }
          />
          <Route
            path="/documents"
            element={
              <Suspense fallback={<Loader />}>
                <Docs />
              </Suspense>
            }
          />
          <Route
            path="/documents/adddocs"
            element={
              <Suspense fallback={<Loader />}>
                <AddDocs />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
          <Route
            path="/addbot"
            element={
              <Suspense fallback={<Loader />}>
                <AddBot />
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<Loader />}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<Loader />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="/cancel"
            element={
              <Suspense fallback={<Loader />}>
                <Cancellation />
              </Suspense>
            }
          />
          <Route
            path="/chart"
            element={
              <Suspense fallback={<Loader />}>
                <Chart />
              </Suspense>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <Suspense fallback={<Loader />}>
                <Alerts />
              </Suspense>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <Suspense fallback={<Loader />}>
                <Buttons />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
