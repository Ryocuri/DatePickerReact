import { useState } from 'react'
import DatePicker from '../lib/DatePicker.jsx'
import '../lib/DatePicker.css'
import './App.css'

function App() {
  const [basicDate, setBasicDate] = useState('')
  const [europeanDate, setEuropeanDate] = useState('')
  const [usDate, setUsDate] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [constrainedDate, setConstrainedDate] = useState('')

  return (
    <div className="app">
      <h1>React DatePicker Plugin</h1>
      <p>Demo and testing page for the DatePicker component</p>

      <div className="demo-section">
        <h2>Basic Usage (YYYY-MM-DD)</h2>
        <p className="demo-hint">Default format - use hyphen (-) as separator</p>
        <DatePicker
          value={basicDate}
          onChange={setBasicDate}
          placeholder="YYYY-MM-DD"
        />
        <p className="demo-value">Selected: {basicDate || 'None'}</p>
      </div>

      <div className="demo-section">
        <h2>European Format (DD/MM/YYYY)</h2>
        <p className="demo-hint">Use forward slash (/) as separator</p>
        <DatePicker
          value={europeanDate}
          onChange={setEuropeanDate}
          format="DD/MM/YYYY"
          placeholder="DD/MM/YYYY"
        />
        <p className="demo-value">Selected: {europeanDate || 'None'}</p>
      </div>

      <div className="demo-section">
        <h2>US Format (MM/DD/YYYY)</h2>
        <p className="demo-hint">Use forward slash (/) as separator</p>
        <DatePicker
          value={usDate}
          onChange={setUsDate}
          format="MM/DD/YYYY"
          placeholder="MM/DD/YYYY"
        />
        <p className="demo-value">Selected: {usDate || 'None'}</p>
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
