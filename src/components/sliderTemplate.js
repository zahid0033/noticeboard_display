import React from 'react';
import Slick from 'react-slick'

const SliderTemplate = (props) => {
    const template = null;
    const images =[
        {image: "https://i.ibb.co/0ZVzkdQ/Report-Card-SRCMST.jpg"},
        {image: "https://picsum.photos/id/236/1900/900"},
        {image: "https://picsum.photos/id/238/1900/900"},
        {image: "https://picsum.photos/id/239/1900/900"},
        {image: "https://picsum.photos/id/240/1900/900"},
        {image: "https://picsum.photos/id/287/1900/900"},
        {image: "https://picsum.photos/id/231/1900/900"},
        {image: "https://picsum.photos/id/232/1900/900"},
        {image: "https://picsum.photos/id/233/1900/900"},
        {image: "https://picsum.photos/id/234/1900/900"}
    ]
    const settings = {
        dots: false,
        infinite : true,
        arrows : false,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1
    };

    const renderTemplate = () => (
        images.map((img,key) => (
            <div>
                <img src={img.image} alt="" style={{width: "100%",height: "100vh"}}/>
            </div>
        ))
    )
        return (
            <div>
                <Slick {...settings}>
                    {renderTemplate()}
                </Slick>
            </div>
        );

}
export default SliderTemplate
