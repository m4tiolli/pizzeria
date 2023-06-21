import './SideBar.css'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react';

function SideBar() {
    return (
        <Menu width={'20%'} isOpen={false} menuClassName='meumenu'>
            <h1>filter by: </h1>
            <div className='checkbox'>
                <input type='checkbox' />
                <p>pizzas salgadas</p>
            </div>
            <div className='checkbox'>
                <input type='checkbox' />
                <p>pizzas salgadas</p>
            </div>
            <div className='checkbox'>
                <input type='checkbox' />
                <p>pizzas salgadas</p>
            </div>
            <div className='checkbox'>
                <input type='checkbox' />
                <p>pizzas salgadas</p>
            </div>
            <div className='checkbox'>
                <input type='checkbox' />
                <p>pizzas salgadas</p>
            </div>
            <div className='checkbox'>
                <input type='checkbox' />
                <p>pizzas salgadas</p>
            </div>

            <button>filter</button>
        </Menu>
    )
}

export default SideBar;