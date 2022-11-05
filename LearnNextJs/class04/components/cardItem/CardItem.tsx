import Button from "../button/Button"



type CardItemTypes= {
    data: string
    showTitle?: boolean
}

const CardItem = (props:CardItemTypes)=>{
    console.log("props in card item", props.data);
    
    return (
        <div>
            {props.showTitle && <h1>Card Title</h1>}
           {/* {props.showTitle ? <h1>Card Title</h1> : ""} */}

            <Button  isLoading={false} color="blue" data={props.data} extraStyle={{color:"red", padding:30}} buttonTitle="Card Button" />
        </div>
    )
}

export default CardItem