const HeroSection = () => {
    return(
       <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YIUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.YIUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.YIUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
            <button className="primary-btn">Shop Now</button>
            <button className="secendory-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also available on</p>
            <div className="brand-icons">
                <img src="/img/amazon.png" alt="amazon-logo" />
                <img src="/img/flipkart.png" alt="flipcard-logo" />
            </div>
        </div>
        </div>
        <div className="hero-image">
            <img src="/img/shoe_image.png" alt="hero-image" />
        </div>
       </main>
    )
}

export default HeroSection;