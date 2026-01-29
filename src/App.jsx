import { useState } from 'react'
import DatePicker from '../lib/DatePicker'
import '../lib/DatePicker.css'
import './App.css'

function App() {
  const [basicDate, setBasicDate] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [constrainedDate, setConstrainedDate] = useState('')

  return (
    <div className="app">
      <h1>React DatePicker Plugin</h1>
      <p>Demo and testing page for the DatePicker component</p>

      <div className="demo-section">
        <h2>Basic Usage</h2>
        <DatePicker
          value={basicDate}
          onChange={setBasicDate}
          placeholder="Select a date"
        />
        <p className="demo-value">Selected: {basicDate || 'None'}</p>
      </div>

      <div className="demo-section">
        <h2>With Label and Required</h2>
        <DatePicker
          id="birthDate"
          name="birthDate"
          label="Date of Birth"
          value={birthDate}
          onChange={setBirthDate}
          required
        />
        <p className="demo-value">Selected: {birthDate || 'None'}</p>
      </div>

      <div className="demo-section">
        <h2>With Date Constraints</h2>
        <p className="demo-hint">Only dates between 2020-01-01 and 2025-12-31</p>
        <DatePicker
          value={constrainedDate}
          onChange={setConstrainedDate}
          minDate={new Date('2020-01-01')}
          maxDate={new Date('2025-12-31')}
          placeholder="Select within range"
        />
        <p className="demo-value">Selected: {constrainedDate || 'None'}</p>
      </div>

      <div className="demo-section">
        <h2>Disabled State</h2>
        <DatePicker
          value="2024-06-15"
          disabled
          placeholder="Disabled picker"
        />
      </div>
    </div>
  )
}

export default App
