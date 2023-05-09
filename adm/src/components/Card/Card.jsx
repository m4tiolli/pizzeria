
import React from "react";
import "./Card.css";
import "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"

export default function Card() {
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})

    return (
        <div className="card">
            <div class="head">
                <div>
                    <h2 class="expenses"><span class="expenses">0.00</span></h2>
                    <p>Saídas: R$</p>
                </div>
                <i class='bx bx-trending-down icon down' ></i>
            </div>
            <span class="progress" data-value="60%"></span>
            <span class="label">60%</span>
        </div>
    )
}
