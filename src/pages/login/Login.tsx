// import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SignInForm from './components/SignInForm';

const Login = () => {
  return (
    <div className="leading-default pb-12 text-start font-sans text-base font-normal text-slate-500 antialiased">
      <Header />
      <main className="ease-soft-in-out mt-0 transition-all duration-200">
        <HeroSection />
        <SignInForm />
        {/* <Footer /> */}
      </main>
    </div>
  );
};
export default Login;
