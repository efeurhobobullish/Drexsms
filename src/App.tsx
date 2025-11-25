import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./Components/LandingPage/Layout";
import AdminLayout from "./Components/Admin/Layout";
import { useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Global/Loader";

const Home = lazy(() => import("./Components/LandingPage/Pages/Home"));
const About = lazy(() => import("./Components/LandingPage/Pages/About"));
const Contact = lazy(() => import("./Components/LandingPage/Pages/Contact"));
const Notfound = lazy(() => import("./Components/Global/Notfound"));
const Login = lazy(() => import("./Components/Auth/Pages/Login"));
const Register = lazy(() => import("./Components/Auth/Pages/Register"));
const Dashboard = lazy(() => import("./Components/User/Pages/Dashboard"));
const Purchase = lazy(() => import("./Components/User/Pages/Purchase"));
const Messages = lazy(() => import("./Components/User/Pages/Messages"));
const FundWallet = lazy(() => import("./Components/User/Pages/FundWallet"));
const Numbers = lazy(() => import("./Components/User/Pages/Numbers"));
const Overview = lazy(() => import("./Components/Admin/Pages/Overview"));
const User = lazy(() => import("./Components/Admin/Pages/User"));

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          className: 'my-toast',
        }}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/fund-wallet" element={<FundWallet />} />
          <Route path="/numbers" element={<Numbers />} />

          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Overview />} />
            <Route path="/users" element={<User />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;