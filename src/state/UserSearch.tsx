import { useState } from 'react'

const users = [
  { name: 'sarah', age: 20 },
  { name: 'frisko', age: 22 },
  { name: 'wedus', age: 12 },
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string, age: number } | undefined>()

  const handleClick = () => {
    const foundUser = users.find(user => {
      return user.name === name
    })

    setUser(foundUser)
  }

  return <div>
    <h3>user search</h3>
    <input value={name} onChange={e => setName(e.target.value)} />
    <button onClick={handleClick}>Find user</button>
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>
}

export default UserSearch