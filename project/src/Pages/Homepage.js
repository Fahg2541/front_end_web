import React from 'react';
import Products from '../Components/Products';
import Promotion from '../Components/Promotion';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            promotion: [
                {
                    img: "assets/image/image/new-year1.jpg"
                },
                {
                    img: "assets/image/image/new-year2.jpg"
                },
                {
                    img: "assets/image/image/flat-sale.jpg"
                }, 
                {
                    img: "assets/image/image/Black-Friday.png"
                }
            ],
            products: [
                {
                    img: "assets/image/image/01.PNG",
                    price: "฿ 350"
                },
                {
                    img: "assets/image/image/02.PNG",
                    price: "฿ 1490"
                },
                {
                    img: "assets/image/image/03.PNG",
                    price: "฿ 1850"
                },
                {
                    img: "assets/image/image/04.PNG",
                    price: "฿ 159"
                },
                {
                    img: "assets/image/image/05.PNG",
                    price: "฿ 280"
                },
                {
                    img: "assets/image/image/06.PNG",
                    price: "฿ 990"
                },
                {
                    img: "assets/image/image/07.PNG",
                    price: "฿ 1111"
                },
                {
                    img: "assets/image/image/09.PNG",
                    price: "฿ 1234"
                }
            ]
        }
    }
    render() {
        return (
            <>
                <main >
                    <div class="container ">
                        <div class="row site-blocks-cover">
                            {
                                this.state.promotion.map((po) => (
                                    <Promotion img={po.img}></Promotion>
                                ))
                            }
                        </div>
                    </div>
                    <div class="row" >
                        {
                            this.state.products.map((p) => (
                                <Products img={p.img} price={p.price}></Products>
                            ))
                        }

                    </div>
                    
                </main>
            </>
        )
    }
}
export default Welcome;