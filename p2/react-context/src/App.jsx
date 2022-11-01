import { Profile, UserList } from './components'
import { UserState } from './context/User'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
    <UserState>
      <div className='container p-4'>
        <h1>React Context</h1>
        <div className='row'>
          <div className='col-md-7'>
            <UserList />
          </div>
          <div className='col-md-5'>
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App
