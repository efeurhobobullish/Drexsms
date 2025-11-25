import { useState } from "react";
import { toast } from "sonner";
import InputField from "../../Global/InputField";
import Layout from "../Layout";
import Heading from "../UI/Heading";
import { Link, useNavigate } from "react-router-dom";
import loader from "../../../assets/rolling-loader.svg";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const inputs = [
    {
      id: "email",
      type: "email",
      label: "E-mail Address",
      placeholder: "e.g example@gmail.com",
      value: form.email,
      onChange: handleChange,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      placeholder: "min of 6 characters",
      value: form.password,
      onChange: handleChange,
    },
  ];

  const validate = (): boolean => {
    if (!form.email.trim()) {
      toast.error("E-mail Address is required!");
      return false;
    }
    
    if (!form.password) {
      toast.error("Password is required!");
      return false;
    }
    
    if (form.password.length < 6) {
      toast.error("Password should be at least 6 characters!");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      // Replace this with your actual login API call
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      toast.success("Login successful! Redirecting...");
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
      
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <Heading
          title="Welcome back! 👋"
          subtitle="Login to continue using our service"
        />
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          {inputs.map((input) => (
            <InputField
              key={input.id}
              id={input.id}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          ))}
          
          <button 
            className="btn-primary btn mt-4" 
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <img src={loader} width={25} alt="Loading" />
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-600 text-base">
          Create New Account?{" "}
          <Link 
            className="font-semibold text-primary hover:underline" 
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
