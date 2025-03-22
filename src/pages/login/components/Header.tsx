import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="container sticky top-0 z-sticky">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
export default Header;
