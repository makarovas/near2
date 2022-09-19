import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main, SignIn } from 'routes/pages';
import { PrivateRoute } from 'routes/components/PrivateRoute';

export const AppRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<PrivateRoute element={<Main />} />} />
    </Routes>
  </BrowserRouter>
);
