// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    date,
    secondInnings,
    result,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <div className="bottom-row-container">
        <div className="flex-row-container">
          <div className="flex-container">
            <p className="team-heading">{competingTeam}</p>
            <br />
            <p className="team-heading">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>

          <div className="image-container">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="second-innings-container">
          <p className="text1">First Innings</p>
          <p className="result">{firstInnings}</p>
          <p className="text1">Second Innings</p>
          <p className="result">{secondInnings}</p>
          <p className="text1">Man Of The Match</p>
          <p className="result">{manOfTheMatch}</p>
          <p className="text1">Umpires</p>
          <p className="result">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
