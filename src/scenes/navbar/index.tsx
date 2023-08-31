import Logo from '@/assets/Logo.png';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import Link from './Link';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Navbar = ({selectedPage, setSelectedPage} : Props) => {
  
  return (
    <nav>
      <div className={`fixed top-0 z-30 w-full py-6 flexBetween`}>
        <div className="flexBetween mx-auto w-5/6">
          <div className="flexBetween w-full gap-16">
            {/* Left Side  */}
            <img src={Logo} alt="Fitness Logo" />
            {/* Right Side  */}
            <div  className='flexBetween w-full'>
              <div className='flexBetween gap-8 text-sm'>
                <Link
                  page='Home'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page='Benefits'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page='Our Classes'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page='Contact Us'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flexBetween gap-8">
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar