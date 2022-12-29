import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Qualification from './quallification';
import '../assets/header.css';
import '../assets/footer.css';
import userimg from './270236150_637446750716451_3181187670546686420_n.jpg';

class Home extends React.Component {
    render() {
        return (

            <div class='border'>
                <p>A professional Portfolio</p>
                <div class="body">

                    <div class='img'>
                        <img src={userimg} alt=' portfolio owner' />

                    </div>



                </div>
                <div class="user_details"> <div class='nav'>
                    <a href="">Qualificaion</a>
                    <a href=''>Projects</a>
                    <a href=''>Info</a>

                </div>
                    <div class='yt69'>
                        <p class='username'>Suroj Gurung</p>
                        <p class='pos'>Frontend Developer / Designer</p>
                    </div></div>

            </div>
        )
    }
} export default Home
