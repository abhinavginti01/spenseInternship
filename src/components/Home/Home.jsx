import { lazy } from 'react'
import { AiFillYoutube, AiFillEye, AiFillAndroid } from 'react-icons/ai'

import './home.css'

const HomeUpper = lazy(() => import('./HomeUpper'))
const HomeCard = lazy(() => import('./HomeCard'))

const Home = () => {

    const CardData = [
        {
            Icon: AiFillYoutube,
            iconColor: '#ff0000',
            bgColor: '#f7e8cc',
            title: 'Fluid Layout',
            content: 'Deliver the best stories and ideas on the topics you care about most straight to you.'
        },
        {
            Icon: AiFillEye,
            title: 'Fluid Layout',
            bgColor: '#f8f8fe',
            content: 'Deliver the best stories and ideas on the topics you care about most straight to you.'
        },
        {
            Icon: AiFillAndroid,
            iconColor: ' #3DDC84',
            bgColor: '#e9ebf8',
            title: 'Fluid Layout',
            content: 'Deliver the best stories and ideas on the topics you care about most straight to you.'
        }
    ]

    return (
        <>
            <HomeUpper />
            <div className='my-5 container'>
                <div className='col-md-4'>
                    <p className='text-success fw-bold small letter-spacing-1'>WHAT'S INSIDE</p>
                    <h1 className="fw-bold">Connect can bring charm to your website.</h1>
                    <p className='text-secondary'>Get straight to the point always, people find it attractive when they visit your website.</p>
                </div>
                <div className='mt-4 row'>
                    {CardData && CardData.map((data, index) => <HomeCard key={data.title + index} data={data} />)}
                </div>
            </div>
        </>
    )
}

export default Home