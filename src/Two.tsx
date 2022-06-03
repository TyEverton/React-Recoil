import { useRecoilState, useRecoilValue } from 'recoil'
import {
  AddressAtom,
  EmailAtom,
  DateAtom,
  NameAtom,
  PhoneAtom,
  // testAtom,
} from './Atoms/EventDetails/BasicInfo'

function Two() {
  // const [test, setTest] = useRecoilState(testAtom)
  const [eventAddress, setEventAddress] = useRecoilState(AddressAtom)
  const [eventEmail, setEventEmail] = useRecoilState(EmailAtom)
  const [eventDate, setEventDate] = useRecoilState(DateAtom)
  const [eventName, setEventName] = useRecoilState(NameAtom)
  const [eventPhone, setEventPhone] = useRecoilState(PhoneAtom)

  return (
    <div
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
    >
      {/* <h3>Name:{eventName}</h3>
      <h3>Date:{eventDate}</h3>

      <h3>Phone:{eventPhone}</h3>
      <h3>Email:{eventEmail}</h3>
      <h3>Address of Event</h3> */}
      <h4>Name of location:{eventAddress[0].locationName}</h4>
      {/* <h1>{test[0].location}</h1> */}
    </div>
  )
}

export default Two
