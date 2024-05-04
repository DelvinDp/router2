// Write your code here
import {Component} from 'react'
import TeamItem from '../Teamdata'

class TeamCard extends Component {
  state = {
    blogsData: [],
  }

  componentDidMount() {
    this.getblogsData()
  }

  getblogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachitem => ({
      name: eachitem.name,
      id: eachitem.id,
      imageUrl: eachitem.team_image_url,
    }))
    this.setState({blogsData: updatedData})
  }

  render() {
    const {blogsData} = this.state
    return (
      <div className="teamcard">
        {blogsData.map(item => (
          <TeamItem blogsData={item} key={item.id} />
        ))}
      </div>
    )
  }
}
export default TeamCard
