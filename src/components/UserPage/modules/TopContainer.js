import UserDetails from '../../../assets/UserDetails.jpg'

export const TopContainer = ({ userCapitals }) => {
  return (
    <div>
      <div style={{ backgroundImage: 'url(' + UserDetails + ')', height: '30vh', display: 'flex', alignItems: 'end' }}>
        <div style={{ marginLeft: '15%', marginBottom: '-10vh', fontSize: '60px', color: 'white', border: 'solid 5px #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '75px', background: 'purple', height: '20vh', width: '10vw' }}>
          {userCapitals}
        </div>
      </div>
    </div>
  )
}
