import React from 'react'

const HomeCard = ({ data }) => {
    const { title, content, Icon, iconColor, bgColor } = data;
    return (
        <div className='col-md-4'>
            <div className='rounded-1 p-5' style={{ background: bgColor }}>
                <Icon className='display-4 mb-3' style={{color: iconColor}}/>
                <p className='fw-bold'>{title}</p>
                <small className='text-secondary'>{content}</small>
            </div>
        </div>
    )
}

export default HomeCard