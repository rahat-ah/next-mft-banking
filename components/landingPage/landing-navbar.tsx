import LogoAction from "./logo-action"
import RegisterBtnAction from "./register-btn-action"


function LandingNavbar() {
  return (
     <>
      
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <LogoAction />
            <RegisterBtnAction /> 
          </nav>
        </header>
    </>
  )
}

export default LandingNavbar