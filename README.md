# React DatePicker Plugin

A React DatePicker component converted from jQuery DateTimePicker for the HRnet project migration.

## Description

This component provides a simple and accessible date picker for React applications. It was developed as part of the HRnet jQuery to React migration project at OpenClassrooms.

## Installation

```bash
npm install DatePickerReact
```

Or with yarn:

```bash
yarn add DatePickerReact
```

## Usage

### Basic Usage

```jsx
import {DatePicker} from 'dist/DatePickerReact.es'
import 'DatePickerReact/dist/style.css'

function App() {
    const [date, setDate] = useState('')

    return (
        <DatePicker
            value={date}
            onChange={setDate}
            placeholder="Select a date"
        />
    )
}
```

### With Label and Validation

```jsx
<DatePicker
  id="birthDate"
  name="birthDate"
  label="Date of Birth"
  value={birthDate}
  onChange={setBirthDate}
  required
/>
```

### With Min/Max Date Constraints

```jsx
<DatePicker
  value={startDate}
  onChange={setStartDate}
  minDate={new Date('2020-01-01')}
  maxDate={new Date('2030-12-31')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | The selected date value (YYYY-MM-DD format) |
| `onChange` | `function` | - | Callback function called when date changes |
| `placeholder` | `string` | `'Select a date'` | Placeholder text for the input |
| `id` | `string` | - | HTML id attribute for the input |
| `name` | `string` | - | HTML name attribute for the input |
| `label` | `string` | - | Label text for accessibility |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `format` | `string` | `'YYYY-MM-DD'` | Date format |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `className` | `string` | `''` | Additional CSS class names |

## Features

- **Accessible**: Full keyboard navigation and ARIA attributes
- **Customizable**: Easily styled with CSS
- **No Dependencies**: Pure React implementation (except for React itself)
- **Date Constraints**: Support for min/max date validation
- **Today Button**: Quick selection of current date
- **Clear Button**: Easy clearing of selected date

## Accessibility

The component includes:
- Proper ARIA labels and roles
- Keyboard navigation support (Escape to close, Enter to open)
- Focus management
- Screen reader friendly

## Development

### Build the library

```bash
npm run build
```

### Run development mode

```bash
npm run dev
```

## License

MIT

## Author

Developed as part of the OpenClassrooms HRnet migration project.
