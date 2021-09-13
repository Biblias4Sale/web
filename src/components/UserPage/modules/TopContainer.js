import { banner, userCapitalsBox } from './TopContainerStyle'

export const TopContainer = ({ userCapitals }) => {
  return (
    <div>
      <div style={banner}>
        <div style={userCapitalsBox}>
          {userCapitals}
        </div>
      </div>
    </div>
  )
}
