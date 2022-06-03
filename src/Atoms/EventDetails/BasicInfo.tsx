// this atom will contain the name of the event and the date of the event
import { atom } from 'recoil'

export const NameAtom = atom({
  key: 'eventName',
  default: '',
})

export const DateAtom = atom({
  key: 'eventDate',
  default: '',
})

export const EventDetailsAtom = atom({
  key: 'eventDetails',
  default: '',
})
