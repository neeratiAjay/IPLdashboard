// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchesData: [], isLoading: true}

  componentDidMount() {
    this.getMatchesList()
  }

  getMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchData = await response.json()

    const updatedData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatchDetails: {
        id: fetchData.latest_match_details.id,
        competingTeam: fetchData.latest_match_details.competing_team,
        competingTeamLogo: fetchData.latest_match_details.competing_team_logo,
        date: fetchData.latest_match_details.date,
        firstInnings: fetchData.latest_match_details.first_innings,
        manOfTheMatch: fetchData.latest_match_details.man_of_the_match,
        matchStatus: fetchData.latest_match_details.match_status,
        result: fetchData.latest_match_details.result,
        secondInnings: fetchData.latest_match_details.second_innings,
        umpires: fetchData.latest_match_details.umpires,
        venue: fetchData.latest_match_details.venue,
      },
      recentMatches: fetchData.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }

    this.setState({matchesData: updatedData, isLoading: false})
  }

  renderLatestMatch = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesData
    return (
      <>
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <h1 className="heading-latest-match">Latest Matches</h1>
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecentMatch()}
      </>
    )
  }

  renderRecentMatch = () => {
    const {matchesData} = this.state
    const {recentMatches} = matchesData

    return (
      <ul className="list-container">
        {recentMatches.map(eachItem => (
          <MatchCard key={eachItem.id} matchData={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    // testid="loader"
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderLatestMatch()}
      </div>
    )
  }
}
export default TeamMatches
