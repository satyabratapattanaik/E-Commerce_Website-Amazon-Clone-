import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" 
                alt="" className="home__image" />

                <div className="home__row">
                    <Product 
                        id="123321"
                        title="High Quality Genuine Leather with Premium Materials 
                        Size: 38 cm (L) x 29 cm (H) x 6 cm (D) Suitable for 
                        laptops of upto 14 inch"
                        price={54.99}
                        rating={4}
                        image="https://massimiliano.in/wp-content/uploads/2020/10/0W8A9922-1.jpg"
                    />
                    <Product 
                        id="213323"
                        title="Apple 13-Inch M1 MacBook Pro review: near perfection"
                        price={1245.59}
                        rating={5}
                        image="https://reviewed-production.s3.amazonaws.com/1607098884000/DSC_0875.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="873265"
                        title="Apple iPhone 15 Pro Max (256GB, Blue Titanium) Online – Croma"
                        price={1800.00}
                        rating={5}
                        image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674445/Croma%20Assets/Communication/Mobiles/Images/300822_0_on2t4l.png"
                    />
                    <Product 
                        id="334213"
                        title="Introducing the next generation of AirPods - Apple"
                        price={132.50}
                        rating={4}
                        image="https://www.apple.com/newsroom/images/product/airpods/standard/Apple_AirPods-3rd-gen_hero_10182021_inline.jpg.slideshow-medium_2x.jpg"
                    />
                    <Product 
                        id="557732"
                        title="Silver Case For Iphone - Silver Palace"
                        price={11.99}
                        rating={4}
                        image="https://silverpalace.in/uploads/products/img-1297061462648876a842a316.75553339.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="311132"
                        title="Wooden Vase | Buy Wooden flower vase | Kalpané"
                        price={23.59}
                        rating={4}
                        image="https://ik.imagekit.io/gewllgpqvaw/tr:h,w,cm-pad_resize/media/catalog/product/2/_/2_20_1.jpg"
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;