import FruitProfile from "./FruitProfile";

function Gallery({fruit}){


    const today = new Date();
    const formatDate = (date)=>{
        return new Intl.DateTimeFormat('en-IN',{weekday:'long'}).format(date)
    }
    

    return(
        <section>
            <h1>Some Fruits</h1>
            <FruitProfile/>
            <h3>{formatDate(today)} fruit</h3>
            <h3>Fruit name : {fruit.name}</h3>
            <h3>Fruit color : {fruit.color}</h3>
            {/* <h3>{{card:"spade", place:"hillmount"}}</h3> */}
            <ul>
                <li>Eat healthy</li>
                <li>Be healthy</li>
            </ul>
            
        </section>
    )
}

export default Gallery