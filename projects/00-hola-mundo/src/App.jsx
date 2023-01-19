import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

export default function App () {
  // Podemos pasar a las props del componente una función
  const formatUserName = (userName) => `@${userName}`
  const users = [
    {
      name: 'Juan Carlos Romero',
      userName: 'juang20133',
      isFollowing: true
    },
    {
      name: 'Miguel Ángel Durán',
      userName: 'midudev',
      isFollowing: false
    },
    {
      name: 'Elon Musk',
      userName: 'elonmusk',
      isFollowing: false
    }
  ]
  return (
    <div className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
              formatUserName={formatUserName}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </div>
  )
}
