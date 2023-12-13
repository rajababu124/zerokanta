

const Square = (props) => {
  return (
    <>
      <div className='square' onClick={props.onClick} style={{ border : "1px solid dodgerblue" , width: "100%", height:"100px", display: "flex" , justifyContent: "center", alignItems:"center"}}>
      {
        props.value === "X" ? ( <> <h1 className="text-info"> {props.value}  </h1> </> )  :  ( <> <h1 style={{ color: 'darkgrey'}}>  {props.value} </h1> </>)
      }
      </div>
    </>
  )
}

export default Square
