// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails
  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
