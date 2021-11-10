import "./page.css";

function Third(){
    return (<div id="pageLayout">
        <div id="heading2"></div>
        <div id="header">
                    <h3 id="heading">Nutrify</h3>
                    <div id="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
        </div> 
        <div className="home_image">
            <img src="./iconimages/image_Home.png" alt="home images"/>
        </div>
        <div id="image_below">
            <h2>Hello !</h2>
            <p id="content">You are about to use a short, safe and anonymous nutrition checkup. Your answers will be carefully analyzed and you will learn about possible deficiencies for your symptoms.</p>
        </div>
        <button id="btn">START</button>
    </div>);
}
export {Third}