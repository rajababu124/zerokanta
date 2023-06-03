import { IoLogoGameControllerB } from "react-icons/io";

const Playagain = () => {
  return (
    <>
     <div>
     <div className="board-container " style={{ margin : "200px" , display:"flex ", justifyContent:'center', alignItems:'center' , flexDirection:'column'}} >
     <h1 style={{fontSize: "100px" , color:'dodgerblue'}}><IoLogoGameControllerB /></h1>
    <h4> Let's Play again ?  </h4>
    <a className="btn btn-outline-info" href="/">Play Now</a>

   
      </div>
     </div>
    </>
  )
}

export default Playagain
