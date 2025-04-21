import Footer from '../../components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SignUpForm from './components/SignUpForm';

const Register = () => {
  return (
    <div className="leading-default text-start font-sans text-base font-normal text-slate-500 antialiased">
      <Header />
      <main className="ease-soft-in-out mt-0 transition-all duration-200">
        <HeroSection />
        <SignUpForm />
        <Footer />
      </main>
    </div>
  );
};
export default Register;
