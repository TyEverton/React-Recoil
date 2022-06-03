import { useRecoilState } from 'recoil'
import { NameAtom, DateAtom } from './Atoms/EventDetails/BasicInfo'
import { useState } from 'react'

function One() {
  const [eventName, setEventName] = useRecoilState(NameAtom)
  const [newEventName, setNewEventName] = useState('')

  const [eventDate, setEventDate] = useRecoilState<any>(DateAtom)
  const [newEventDate, setNewEventDate] = useState('')

  const updateInfo = () => {
    setEventName(newEventName)
    setEventDate(newEventDate)
  }

  return (
    <div
      style={{ width: '600px', height: '600px', backgroundColor: 'lightgreen' }}
    >
      <h3>
        Event Name
        <input onChange={(e) => setNewEventName(e.target.value)}></input>
      </h3>
      <h3>
        Event Phone
        <input onChange={(e) => setNewEventDate(e.target.value)}></input>
      </h3>

      <button type='submit' onClick={updateInfo}>
        Save Event Details
      </button>
    </div>
  )
}

export default One
