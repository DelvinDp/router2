// // Write your code here
import {Component} from 'react'
// import LatestItem from '../LatestItem'

class LatestMatch extends Component {
  componentDidMount() {
    this.getLatestData()
  }

  getLatestData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/:id')
    const data = await response.json()
    // const latestmatchdetails = data.latest_match_details
    // const updatedData = latestmatchdetails.map(eachitem => ({
    //   umpires: eachitem.umpires,
    //   id: eachitem.id,
    //   result: eachitem.result,
    //   manofthematch: eachitem.man_of_the_match,
    //   date: eachitem.date,
    //   venue: eachitem.venue,
    //   competingteam: eachitem.competing_team,
    //   competingteamlogo: eachitem.competing_team_logo,
    //   firstinnings: eachitem.first_innings,
    //   secondinnings: eachitem.second_innings,
    //   matchstatus: eachitem.match_status,
    // }))
    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails} = this.state
    return (
      <div>
        <img src={teamBannerUrl} alt="Team Banner" />
        <h2>Latest Match Details:</h2>
        <p>{latestMatchDetails.result}</p>
        <p>Man of the Match: {latestMatchDetails.man_of_the_match}</p>
        <p>Date: {latestMatchDetails.date}</p>
        <p>Venue: {latestMatchDetails.venue}</p>
        <p>Umpires: {latestMatchDetails.umpires}</p>
        <h2>Recent Matches:</h2>
      </div>
    )
  }
}
export default LatestMatch
