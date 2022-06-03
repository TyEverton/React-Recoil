import { useRecoilState } from 'recoil'
import {
  NameAtom,
  DateAtom,
  AddressAtom,
  EmailAtom,
  PhoneAtom,
} from './Atoms/EventDetails/BasicInfo'
import { useState } from 'react'

function One() {
  const [eventAddress, setEventAddress] = useRecoilState(AddressAtom)
  const [newAddress, setNewEventAddress] = useState<string | any>('')

  const [date, setEventDate] = useRecoilState<any>(DateAtom)
  const [newDate, setNewEventDate] = useState('')

  const [email, setEventEmail] = useRecoilState(EmailAtom)
  const [newEmail, setNewEventEmail] = useState('')

  const [name, setEventName] = useRecoilState(NameAtom)
  const [newName, setNewEventName] = useState('')

  const [phone, setEventPhone] = useRecoilState(PhoneAtom)
  const [newPhone, setNewEventPhone] = useState('')

  const updateEventDetails = () => {
    // setEventAddress(newAddress.zipCode)
    // setEventAddress(newAddress.state)
    // setEventAddress(newAddress.street)
    // setEventAddress(newAddress.city)
    setEventAddress(newAddress)
    setEventDate(newDate)
    setEventEmail(newEmail)
    setEventName(newName)
    setEventPhone(newPhone)
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
        Event Date
        <input onChange={(e) => setNewEventDate(e.target.value)}></input>
      </h3>
      <div>
        <h3>
          Event Address
          <input onChange={(e) => setNewEventAddress(e.target.value)}></input>
        </h3>
        <h2>
          Name of Location
          <input
            onChange={(e) =>
              setNewEventAddress({ locationName: e.target.value })
            }
            placeholder='Name of Location'
          ></input>
        </h2>
        {/* <h2>
          Street{' '}
          <input
            onChange={(e) => setNewEventAddress({ street: e.target.value })}
            placeholder='Street Location'
          ></input>
        </h2>
        <h2>
          City
          <input
            onChange={(e) => setNewEventAddress({ city: e.target.value })}
            placeholder='City Location'
          ></input>
        </h2>
        <h2>
          State{' '}
          <input
            onChange={(e) => setNewEventAddress({ state: e.target.value })}
            placeholder='State of Location'
          ></input>
        </h2>
        <h2>
          Zip{' '}
          <input
            onChange={(e) => setNewEventAddress({ zipCode: e.target.value })}
            placeholder='zipCode of Location'
          ></input>
        </h2> */}
      </div>
      <h3>
        Event Phone
        <input onChange={(e) => setNewEventPhone(e.target.value)}></input>
      </h3>
      <h3>
        Event Email
        <input onChange={(e) => setNewEventEmail(e.target.value)}></input>
      </h3>

      <button type='submit' onClick={updateEventDetails}>
        Save Event Details
      </button>
    </div>
  )
}

export default One
