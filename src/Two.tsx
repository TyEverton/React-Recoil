import { useRecoilState } from 'recoil'
import { DateAtom } from './Atoms/EventDetails/BasicInfo'
import { NameAtom } from './Atoms/EventDetails/BasicInfo'

function Two() {
  const [eventDate, setEventDate] = useRecoilState(DateAtom)
  const [eventName, setEventName] = useRecoilState(NameAtom)
  return (
    <div
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
    >
      <h3>{eventName}</h3>
      <h3>{eventDate}</h3>
    </div>
  )
}

export default Two
