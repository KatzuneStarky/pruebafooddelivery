import React from 'react'

function DebitCard() {
  return (
    <div className='cardGroup'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MasterCard_early_1990s_logo.png/1200px-MasterCard_early_1990s_logo.png" alt="" className="card_logo" />
        <img src="https://img.icons8.com/officel/480/sim-card-chip.png" alt="" className="card_chip" />
        <div className="card_number">
            1234 5678 1234 5678
        </div>
        <div className="card_name">Katzune Starky</div>
        <div className="card_from">10/24</div>
        <div className="card_to">10/28</div>
        <div className="card_ring"></div>
    </div>
  )
}

export default DebitCard