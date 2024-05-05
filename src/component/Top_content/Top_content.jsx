import baner from '../../Asset/img/banner-01.png'
import logo_1 from '../../Asset/img/logo-01.png'
import logo_2 from '../../Asset/img/logo-02.png'
import logo_3 from '../../Asset/img/logo-03.png'

const TopContent = () => {
    return(
        <>
        {/* home page main content */}
        <section className='py-20'>
            <div className='grid lg:grid-cols-5 '>
                <div className='lg:col-span-3'>
                <div className="px-5 flex flex-col justify-start ">
                    <h1 className='font-bold lg:text-6xl text-4xl text-regal-blue'>Buy & Sell Digital</h1>
                    <h1 className='font-bold lg:text-6xl text-4xl text-regal-blue'>Assest In The BitByte</h1>
                    <p className='font-normal lg:text-xl text-base text-gray-400 pr-32 mt-6'>BitByte is the easiest, safest, and fastest way to buy & sell crypto asset exchange</p>
                    <div className='mt-6'>
                        <h4 className='text-yellow-400 text-3xl font-bold'>245,533,3+</h4>
                        <h4 className='font-normal text-2xl'>User's Trust BitByte</h4>
                    </div>
                    <div className='mt-6'>
                        <h3 className='font-bold text-2xl text-regal-blue'>Our Patners</h3>
                        <div className='flex mt-4'>
                            <img className='mr-8' src={logo_1} alt="" />
                            <img className='mr-8' src={logo_2} alt="" />
                            <img className='mr-8' src={logo_3} alt="" />
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex justify-center items-center mt-10 lg:justify-end px-5 lg:col-span-2">
                    <img className='lg:w-full w-3/4 ' src={baner} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}

export default TopContent