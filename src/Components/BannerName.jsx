import React from 'react'

function BannerName({ name, discount, link }) {
    return (
        <div className='bannerContent'>
            <h3>Hola {name}!</h3>
            <p>
                Obten un descuento por cada
                <span> $ {discount}</span>
            </p>
            <a href={link}>Saber mas!</a>
        </div>
    )
}

export default BannerName