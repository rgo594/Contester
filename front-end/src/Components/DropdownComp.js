import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const testOptions = [
  {
    key: 'SAT',
    text: 'SAT',
    value: 'SAT',
  },
  {
    key: 'Series 7',
    text: 'Series 7',
    value: 'Series 7',
  }
]

const DropdownComp = (props) => {
  return <Dropdown
    onChange={(e) => props.handleSelect(e.target.innerText)}
    style={{width: '66.5%', margin:'0 auto'}}
    placeholder='Select Exam'
    fluid
    selection
    options={testOptions}
  />
}

export default DropdownComp
