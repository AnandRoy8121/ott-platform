import Header from "./Header";
import SignSignUpForm from "./SignSignUpForm";

const Login = () => {
  
  return (
    <div className="relative h-screen w-full bg-black">
      <Header />
      <div>
        <img
          className="w-full h-screen object-cover hidden md:block"
          src="https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg"
          alt="bg-image"
        />
      </div>
      <SignSignUpForm/>
    </div>
  );
};

export default Login;
