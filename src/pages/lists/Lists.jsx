import React, { useState, useCallback, Profiler } from 'react'
import Nav from '../../components/nav/Nav'
import ListItem from './ListItem'
import './Lists.css'

window.profiles = new Map()
const profile = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
  if (!window.profiles.has(phase)) {
    window.profiles.set(phase, new Map())
  }

  window.profiles.get(phase).set(id, { actualDuration, baseDuration, startTime, commitTime, interactions })
}

const MemoListItem = React.memo(ListItem)

const ListsWrapper = () => (
  <>
    <Nav />
    <Lists />
  </>
)

export default ListsWrapper

const Lists = () => {
  const [count, setCount] = useState(0)

  const [times, setTimes] = useState([
    { id: 1, t: 30 },
    { id: 2, t: 90 },
    { id: 3, t: 30 },
    { id: 4, t: 125 },
    { id: 5, t: 10 },
    { id: 6, t: 70 },
  ])

  const setTime = useCallback((id, t) => {
    setTimes(times.map((time) => id === time.id ? {...time, t} : time))
  }, [])

  return (
    <div className="Lists-Wrapper Lists-Lined">
      <p>Enable react-dev-tools "Highlight updates" option.</p>
      <p>This parent component wraps two lists. The one on the left uses `ListItem` directly, the other wraps it in React.memo.</p>
      <p>For this example it would not be ideal, because the ListItem isn't very "heavy" and React.memo has overhead as well.</p>

      <button onClick={() => setCount(count + 1)}>Count {count}</button>

      <div className="List-Row">
        <div className="List-Col">
          <Profiler id="default" onRender={profile}>
            <ul className="List Lists-Lined">
              {times.map((t) => <ListItem key={t.id} time={t} setTime={setTime} />)}
            </ul>
          </Profiler>
        </div>

        <div className="List-Col">
          <Profiler id="memoised" onRender={profile}>
            <ul className="List Lists-Lined">
              {times.map((t) => <MemoListItem key={t.id} time={t} setTime={setTime} />)}
            </ul>
          </Profiler>
        </div>
      </div>
    </div>
  )
}
