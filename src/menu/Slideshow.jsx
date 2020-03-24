import React from 'react';
import { Carousel } from 'antd';

class Slideshow extends React.Component {
    render(){
        return(
            <div className="slideshow" >
               
                <Carousel autoplay dotPosition={"right"} style={{padding:5}}>
                    <div>
                        <h2>Trending On Twitter - Social Distancing</h2>
                    </div>
                    <div>
                        <h2>Trending On Twitter - Liverpool Gagal Juara</h2>
                    </div>
                    <div>
                        <h2>Trending On Twitter - Corona Cuma Sampe April</h2>
                    </div>
                    <div>
                        <h2>Trending On Twitter - Respek Tenaga Kesehatan</h2>
                    </div>
                    <div>
                        <h2>Trending On Twitter - #ILCSimalakamaCorona</h2>
                    </div>
                    <div>
                        <h2>Trending On Twitter - #KitaDiRumahAjaYa</h2>
                    </div><div>
                        <h2>Trending On Twitter - #Covidiots</h2>
                    </div>
                    
                </Carousel>
            </div>
        )
    }
}

export default Slideshow;