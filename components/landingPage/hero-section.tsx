import Image from 'next/image'
import GetStartedBtnAction from './get-started-btn-action'
import ContactUsBtnAction from './contact-us-btn-action'

function HeroSection() {
  return (
    <section className="bg-linear-to-br from-blue-50 via-orange-50 to-blue-100 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight mb-4">
              Smart Loan & Customer <span className="text-orange-500">Management</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Easily manage customers, track loans, collect deposits and keep records organized
              in one secure dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <GetStartedBtnAction />
              <ContactUsBtnAction />
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-96 relative">
            <Image
              src="https://res.cloudinary.com/dznypggdx/image/upload/v1768719148/file_00000000696871fdb65d200119b9597d_o9rinv.png"
              alt="Banking Illustration"
              width={700}
              height={700}
              priority
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
  )
}

export default HeroSection