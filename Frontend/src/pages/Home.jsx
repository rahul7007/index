import React, { Component } from "react";
import api from '../api'
import './home.css'
import avatar from './images/avatar.png';
import streams from './images/twitch.png';
import games from './images/steam.png';
import upcoming from './images/upcoming.png';
import library from './images/library.png';
import assassins from './images/assassins.png';
import sackboy from './images/sackboy.png';
import spiderman from './images/spiderman.png';

class Transaction extends Component {
    state = {  }

    save = () =>{
        var myid = 5
        var myname = "YYY"
        var phone = 7000
        const payload = {myid, myname, phone}
        console.log("WORKING")
        api.insertData(payload).then(res => {
            console.log(res)
        })
    }

    show = () =>{
        api.displayData().then(res => {
            console.log(res.data.data[0])
        })
    }

    render() { 
        return ( 
            <div>
                <main>
                <section class="glass">
                    <div class="dashboard">
                    <div class="user">
                        <img src={avatar} alt="" />
                        <h3>Simo Edwin</h3>
                        <p>Pro Member</p>
                    </div>
                    <div class="links">
                        <div class="link">
                        <img src={streams} alt="" />
                        <h2>Streams</h2>
                        </div>
                        <div class="link">
                        <img src={games} alt="" />
                        <h2>Games</h2>
                        </div>
                        <div class="link">
                        <img src={upcoming} alt="" />
                        <h2>New</h2>
                        </div>
                        <div class="link">
                        <img src={library} alt="" />
                        <h2>Library</h2>
                        </div>
                    </div>
                    {/* <div class="pro">
                        <h2>Join pro for free games.</h2>
                        <img src="./images/controller.png" alt="" />
                    </div> */}
                    </div>
                    <div class="games">
                    <div class="status">
                        <h1>Active Games</h1>
                        <input type="text" />
                    </div>
                    <div class="cards">
                        <div class="card">
                        <img src={assassins} alt="" />
                        <div class="card-info">
                            <h2>Assassins Creed Valhalla</h2>
                            <p>PS5 Version</p>
                            <div class="progress"></div>
                        </div>
                        <h2 class="percentage">60%</h2>
                        </div>
                        <div class="card">
                        <img src={sackboy} alt="" />
                        <div class="card-info">
                            <h2>Sackboy A Great Advanture</h2>
                            <p>PS5 Version</p>
                            <div class="progress"></div>
                        </div>
                        <h2 class="percentage">60%</h2>
                        </div>
                        <div class="card">
                        <img src={spiderman} alt="" />
                        <div class="card-info">
                            <h2>Spiderman Miles Morales</h2>
                            <p>PS5 Version</p>
                            <div class="progress"></div>
                        </div>
                        <h2 class="percentage">60%</h2>
                        </div>
                    </div>
                    </div>
                </section>
                </main>
            </div>
         );
    }
}
 
export default Transaction;