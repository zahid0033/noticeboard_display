import React,{Component} from 'react';

class Page_grid extends Component {

    render() {

        const images =[
            {image: "https://i.ibb.co/0ZVzkdQ/Report-Card-SRCMST.jpg"},
            {image: "https://picsum.photos/id/236/200/460"},
            {image: "https://picsum.photos/id/238/200/460"},
            {image: "https://picsum.photos/id/239/200/460"},
            {image: "https://picsum.photos/id/240/200/460"},
            {image: "https://picsum.photos/id/287/200/460"},
            {image: "https://picsum.photos/id/231/200/460"},
            {image: "https://picsum.photos/id/232/200/460"},
            {image: "https://picsum.photos/id/233/200/460"},
            {image: "https://picsum.photos/id/234/200/460"}
        ]

        return (
            <>
                <div className="flex-container">
                    {
                        images.map((img,key) => (
                            <div>
                                <img src={img.image} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
}
export default Page_grid
