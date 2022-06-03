// this atom will contain the name of the event and the date of the event
import { atom } from 'recoil'

export const AddressAtom = atom({
  key: 'eventAddress',
  default: [
    { locationName: '' },
    { zipCode: '' },
    { state: '' },
    { street: '' },
    { city: '' },
  ],
})

export const EmailAtom = atom({
  key: 'eventEmail',
  default: '',
})

export const DateAtom = atom({
  key: 'eventDate',
  default: '',
})

export const NameAtom = atom({
  key: 'eventName',
  default: '',
})

export const PhoneAtom = atom({
  key: 'eventPhone',
  default: '',
})

// export const testAtom = atom({
//   key: 'testAtom',
//   default: [{ location: 'test' }, { name: 'Ty', age: 29 }],
// })