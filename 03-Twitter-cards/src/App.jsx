import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'alexander',
    name: 'Alexander H.',
    isFollowing: true
  },
  {
    userName: 'dogs',
    name: 'dogs-memes',
    isFollowing: true
  },
  {
    userName: 'europafm',
    name: 'EuropaFM',
    isFollowing: false
  },
  {
    userName: 'telefonica',
    name: 'Telefónica',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
