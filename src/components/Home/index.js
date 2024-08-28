// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsDataList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const teamsList = await fetch('https://apis.ccbp.in/ipl')
    const response = await teamsList.json()
    const updatedData = response.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({
      teamsDataList: updatedData,
      isLoading: false,
    })
  }

  renderTeamCardItem = () => {
    const {teamsDataList} = this.state
    return (
      <ul className="team-list-container">
        {teamsDataList.map(eachItem => (
          <TeamCard key={eachItem.id} teamDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading && (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        )}
        <div>{!isLoading && this.renderTeamCardItem()}</div>
      </div>
    )
  }
}
export default Home
