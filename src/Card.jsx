import profilePic from './assets/profilepic.png'
function Card() {
    return(
        <div className ="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title" >Octavian</h2>
            <p>I study programming and workout and eat pasta</p>
        </div>
    )
}
export default Card