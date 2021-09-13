import { banner } from './TopContainerStyle'

export const TopContainer = ({ userCapitals }) => {
  return (
    <div>
      <div style={banner}>
        <div style={{ marginLeft: '15%', marginBottom: '-10vh', fontSize: '60px', color: 'white', border: 'solid 5px #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '75px', background: 'purple', height: '20vh', width: '10vw' }}>
          {userCapitals}
        </div>
      </div>
    </div>
  )
}
