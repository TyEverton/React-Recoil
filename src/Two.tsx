import { useRecoilState } from 'recoil'
import {
  AddressAtom,
  EmailAtom,
  DateAtom,
  NameAtom,
  PhoneAtom,
} from './Atoms/EventDetails/BasicInfo'

function Two() {
  const [eventAddress, setEventAddress] = useRecoilState(AddressAtom)
  const [eventEmail, setEventEmail] = useRecoilState(EmailAtom)
  const [eventDate, setEventDate] = useRecoilState(DateAtom)
  const [eventName, setEventName] = useRecoilState(NameAtom)
  const [eventPhone, setEventPhone] = useRecoilState(PhoneAtom)

  return (
    <div
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
    >
      <h3>Name:{eventName}</h3>
      <h3>Date:{eventDate}</h3>
      <h3>Address:{eventAddress}</h3>
      <h3>Phone:{eventPhone}</h3>
      <h3>Email:{eventEmail}</h3>
    </div>
  )
}

export default Two
