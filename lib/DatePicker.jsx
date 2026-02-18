import { useState, useRef, useEffect } from 'react'
import './DatePicker.css'

/**
 * Supported date formats and their configurations
 */
const DATE_FORMATS = {
  'YYYY-MM-DD': { separator: '-', order: ['year', 'month', 'day'], pattern: /^(\d{4})-(\d{2})-(\d{2})$/ },
  'YYYY/MM/DD': { separator: '/', order: ['year', 'month', 'day'], pattern: /^(\d{4})\/(\d{2})\/(\d{2})$/ },
  'DD-MM-YYYY': { separator: '-', order: ['day', 'month', 'year'], pattern: /^(\d{2})-(\d{2})-(\d{4})$/ },
  'DD/MM/YYYY': { separator: '/', order: ['day', 'month', 'year'], pattern: /^(\d{2})\/(\d{2})\/(\d{4})$/ },
  'MM-DD-YYYY': { separator: '-', order: ['month', 'day', 'year'], pattern: /^(\d{2})-(\d{2})-(\d{4})$/ },
  'MM/DD/YYYY': { separator: '/', order: ['month', 'day', 'year'], pattern: /^(\d{2})\/(\d{2})\/(\d{4})$/ },
}

/**
 * DatePicker Component
 *
 * A lightweight, accessible React date picker component converted from jQuery DateTimePicker.
 * This component provides a clean, modern alternative to the jQuery plugin with improved
 * performance and full React compatibility.
 *
 * Key Features:
 * - Full keyboard navigation support
 * - ARIA attributes for screen readers
 * - Min/max date validation
 * - Click-outside-to-close behavior
 * - Today and Clear buttons
 * - Responsive calendar grid (5 rows)
 * - Multiple date format support (YYYY-MM-DD, DD/MM/YYYY, MM/DD/YYYY, etc.)
 * - Input restricted to numeric characters and separators only
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.value - The selected date value in the specified format
 * @param {function} props.onChange - Callback function called with formatted date string when date changes
 * @param {string} [props.placeholder='Select a date'] - Placeholder text for input field
 * @param {string} [props.id] - HTML id attribute for the input element
 * @param {string} [props.name] - HTML name attribute for the input element
 * @param {string} [props.label] - Label text for accessibility and display
 * @param {Date} [props.minDate] - Minimum selectable date (dates before this will be disabled)
 * @param {Date} [props.maxDate] - Maximum selectable date (dates after this will be disabled)
 * @param {string} [props.format='YYYY-MM-DD'] - Date format for display and parsing
 *   Supported formats: YYYY-MM-DD, YYYY/MM/DD, DD-MM-YYYY, DD/MM/YYYY, MM-DD-YYYY, MM/DD/YYYY
 * @param {boolean} [props.disabled=false] - Whether the input is disabled
 * @param {boolean} [props.required=false] - Whether the input is required for form validation
 * @param {string} [props.className=''] - Additional CSS class names for styling
 *
 * @example
 * // Basic usage
 * <DatePicker
 *   value={date}
 *   onChange={setDate}
 *   placeholder="Select a date"
 * />
 *
 * @example
 * // With European format (DD/MM/YYYY)
 * <DatePicker
 *   value="15/01/2024"
 *   onChange={setDate}
 *   format="DD/MM/YYYY"
 * />
 *
 * @example
 * // With label and validation
 * <DatePicker
 *   id="birthDate"
 *   name="birthDate"
 *   label="Date of Birth"
 *   value={birthDate}
 *   onChange={setBirthDate}
 *   maxDate={new Date()}
 *   required
 * />
 */
function DatePicker({
  value = '',
  onChange,
  placeholder = 'Select a date',
  id,
  name,
  label,
  minDate,
  maxDate,
  format = 'YYYY-MM-DD',
  disabled = false,
  required = false,
  className = ''
}) {
  // Get format configuration (fallback to YYYY-MM-DD if invalid format)
  const formatConfig = DATE_FORMATS[format] || DATE_FORMATS['YYYY-MM-DD']

  /**
   * Parses a date string according to the specified format
   * @param {string} dateString - The date string to parse
   * @param {Object} config - The format configuration to use
   * @returns {Date|null} Parsed Date object or null if invalid
   */
  const parseDateWithConfig = (dateString, config) => {
    if (!dateString) return null
    
    const match = dateString.match(config.pattern)
    
    if (!match) return null
    
    const parts = {}
    config.order.forEach((part, index) => {
      parts[part] = parseInt(match[index + 1], 10)
    })
    
    const date = new Date(parts.year, parts.month - 1, parts.day)
    
    // Validate the date is real (e.g., not Feb 30)
    if (date.getFullYear() !== parts.year ||
        date.getMonth() !== parts.month - 1 ||
        date.getDate() !== parts.day) {
      return null
    }
    
    return date
  }

  /**
   * Parses a date string according to the current format
   * @param {string} dateString - The date string to parse
   * @returns {Date|null} Parsed Date object or null if invalid
   */
  const parseDateFromFormat = (dateString) => {
    return parseDateWithConfig(dateString, formatConfig)
  }

  /**
   * Formats a Date object according to the specified format
   * @param {Date} date - The date to format
   * @returns {string} Formatted date string
   */
  const formatDateToString = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    
    const config = formatConfig
    const parts = { year, month, day }
    
    return config.order.map(part => parts[part]).join(config.separator)
  }

  /**
   * Validates and normalizes the initial value
   * If value doesn't match the expected format, returns today's date in the correct format
   * @param {string} val - The value to validate
   * @returns {string} Valid date string in the expected format
   */
  const getValidatedValue = (val) => {
    if (!val) return ''
    
    const parsed = parseDateWithConfig(val, formatConfig)
    if (parsed && !isNaN(parsed.getTime())) {
      return val // Value is valid, return as-is
    }
    
    // Value doesn't match expected format, return today's date
    return formatDateToString(new Date())
  }
  
  // Component State Management
  const [isOpen, setIsOpen] = useState(false)  // Controls calendar visibility
  const [inputValue, setInputValue] = useState(() => getValidatedValue(value))  // Current input field value (validated)
  const containerRef = useRef(null)  // Reference to container for click-outside detection

  // Initialize currentMonth based on validated value or current date
  const getInitialMonth = () => {
    const validatedValue = getValidatedValue(value)
    if (validatedValue) {
      const date = parseDateFromFormat(validatedValue)
      if (date && !isNaN(date.getTime())) {
        return new Date(date.getFullYear(), date.getMonth(), 1)
      }
    }
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  }
  
  const [currentMonth, setCurrentMonth] = useState(getInitialMonth)  // Month displayed in calendar

  // Localization Constants
  // Days of the week (Sunday to Saturday)
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  // Month names (January to December)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  // Effect: Synchronize internal state with external value prop
  // This ensures the component stays controlled and updates when parent changes value
  // If the value doesn't match the expected format, it defaults to today's date
  useEffect(() => {
    const validatedValue = getValidatedValue(value)
    setInputValue(validatedValue)
    
    // Notify parent if value was corrected to today's date
    if (value && validatedValue !== value && onChange) {
      onChange(validatedValue)
    }
  }, [value])

  // Effect: Handle click-outside-to-close behavior
  // Closes the calendar when user clicks anywhere outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  /**
   * Generates an array of days for the calendar grid
   * Includes days from previous/next months for a complete 5-week grid (35 days)
   * @param {Date} date - The month to generate days for
   * @returns {Array<{date: Date, isCurrentMonth: boolean}>} Array of day objects
   */
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()  // 0 = Sunday, 6 = Saturday
    
    const days = []
    
    // Add days from previous month
    const prevMonth = new Date(year, month, 0)  // Last day of previous month
    const prevMonthDays = prevMonth.getDate()
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false
      })
    }
    
    // Add all days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      })
    }
    
    // Add days from next month to complete the grid (5 rows = 35 cells)
    const remainingDays = 35 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      })
    }
    
    return days
  }

  /**
   * Generates array of years for year selector
   * @returns {Array<number>} Array of years (100 years range)
   */
  const getYearOptions = () => {
    const currentYear = new Date().getFullYear()
    const years = []
    for (let i = currentYear - 50; i <= currentYear + 50; i++) {
      years.push(i)
    }
    return years
  }

  /**
   * Handles month selection change
   * @param {Event} e - The select change event
   */
  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10)
    setCurrentMonth(new Date(currentMonth.getFullYear(), newMonth, 1))
  }

  /**
   * Handles year selection change
   * @param {Event} e - The select change event
   */
  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10)
    setCurrentMonth(new Date(newYear, currentMonth.getMonth(), 1))
  }

  /**
   * Validates if a date is within the allowed min/max range
   * @param {Date} date - The date to validate
   * @returns {boolean} True if date is within allowed range
   */
  const isDateInRange = (date) => {
    if (!date) return false
    if (minDate && date < minDate) return false
    if (maxDate && date > maxDate) return false
    return true
  }

  /**
   * Checks if a date is currently selected
   * @param {Date} date - The date to check
   * @returns {boolean} True if date matches the selected value
   */
  const isSelected = (date) => {
    if (!date || !inputValue) return false
    const selected = parseDateFromFormat(inputValue)
    if (!selected) return false
    return date.toDateString() === selected.toDateString()
  }

  // Generate year options for the selector
  const yearOptions = getYearOptions()

  /**
   * Checks if a date is today's date
   * @param {Date} date - The date to check
   * @returns {boolean} True if date is today
   */
  const isToday = (date) => {
    if (!date) return false
    return date.toDateString() === new Date().toDateString()
  }

  /**
   * Handles date selection from calendar
   * Validates the date, updates state, closes calendar, and notifies parent
   * @param {Date} date - The selected date
   */
  const handleDateSelect = (date) => {
    if (!date || !isDateInRange(date)) return
    
    const formattedDate = formatDateToString(date)
    setInputValue(formattedDate)
    setIsOpen(false)
    
    // Notify parent component of the change
    if (onChange) {
      onChange(formattedDate)
    }
  }

  /**
   * Navigates to the previous month
   * Updates the calendar view to show the previous month
   */
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  /**
   * Navigates to the next month
   * Updates the calendar view to show the next month
   */
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  /**
   * Filters input to only allow numeric characters and date separators (- and /)
   * @param {string} value - The input value to filter
   * @returns {string} Filtered value with only allowed characters
   */
  const filterInputValue = (inputVal) => {
    // Allow digits and both common date separators (- and /) for flexible manual input
    return inputVal.split('').filter(char => /\d/.test(char) || char === '-' || char === '/').join('')
  }

  /**
   * Normalizes a date string by replacing any separator with the expected format separator
   * @param {string} dateString - The date string to normalize
   * @returns {string} Normalized date string with correct separator
   */
  const normalizeDateString = (dateString) => {
    const expectedSeparator = formatConfig.separator
    // Replace both common separators with the expected one
    return dateString.replace(/[-/]/g, expectedSeparator)
  }

  /**
   * Handles manual input changes
   * Filters to allow only numeric characters and separators (- and /)
   * Validates and parses the input, updates calendar view if valid
   * @param {Event} e - The input change event
   */
  const handleInputChange = (e) => {
    const filteredValue = filterInputValue(e.target.value)
    setInputValue(filteredValue)
    
    // Normalize the separators to the expected format for parsing
    const normalizedValue = normalizeDateString(filteredValue)
    
    // Attempt to parse and validate the manually entered date
    const parsed = parseDateFromFormat(normalizedValue)
    if (parsed && isDateInRange(parsed)) {
      setCurrentMonth(new Date(parsed.getFullYear(), parsed.getMonth(), 1))  // Update calendar to show the entered month
      if (onChange) {
        // Send the normalized value to the parent (with correct separator for the format)
        onChange(normalizedValue)
      }
    }
  }

  /**
   * Handles keydown events on input to prevent non-numeric characters
   * Allows both - and / as date separators for flexible manual input
   * @param {KeyboardEvent} e - The keyboard event
   */
  const handleInputKeyDown = (e) => {
    // Allow navigation keys
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End']
    if (allowedKeys.includes(e.key)) {
      // Handle calendar open/close on Escape/Enter
      if (e.key === 'Escape') {
        setIsOpen(false)
      } else if (e.key === 'Enter' && !isOpen) {
        setIsOpen(true)
      }
      return
    }
    
    // Allow Ctrl/Cmd combinations (copy, paste, select all)
    if (e.ctrlKey || e.metaKey) {
      return
    }
    
    // Allow both common date separators (- and /) for flexible manual input
    if (e.key === '-' || e.key === '/') {
      return
    }
    
    // Only allow digits
    if (!/^\d$/.test(e.key)) {
      e.preventDefault()
    }
  }

  // Generate days array for the current month view
  const days = getDaysInMonth(currentMonth)

  return (
    <div 
      className={`datepicker-container ${className}`} 
      ref={containerRef}
    >
      {label && (
        <label htmlFor={id} className="datepicker-label">
          {label}
          {required && <span className="datepicker-required">*</span>}
        </label>
      )}
      
      <div className="datepicker-input-wrapper">
        <input
          type="text"
          id={id}
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => !disabled && setIsOpen(true)}
          onKeyDown={handleInputKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className="datepicker-input"
          aria-label={label || 'Select date'}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        />
        <button
          type="button"
          className="datepicker-toggle"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-label="Toggle calendar"
        >
          📅
        </button>
      </div>

      {isOpen && (
        <div className="datepicker-calendar" role="dialog" aria-label="Calendar">
          <div className="datepicker-header">
            <button
              type="button"
              className="datepicker-nav-btn"
              onClick={goToPreviousMonth}
              aria-label="Previous month"
            >
              ◀
            </button>
            <div className="datepicker-selectors">
              <select
                className="datepicker-month-select"
                value={currentMonth.getMonth()}
                onChange={handleMonthChange}
                aria-label="Select month"
              >
                {months.map((month, index) => (
                  <option key={month} value={index}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="datepicker-year-select"
                value={currentMonth.getFullYear()}
                onChange={handleYearChange}
                aria-label="Select year"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="datepicker-nav-btn"
              onClick={goToNextMonth}
              aria-label="Next month"
            >
              ▶
            </button>
          </div>

          <div className="datepicker-weekdays">
            {daysOfWeek.map((day) => (
              <span key={day} className="datepicker-weekday">
                {day}
              </span>
            ))}
          </div>

          <div className="datepicker-days">
            {days.map((dayObj, index) => (
              <button
                key={index}
                type="button"
                className={`datepicker-day ${
                  !dayObj.isCurrentMonth ? 'datepicker-day-other-month' : ''
                } ${
                  isSelected(dayObj.date) ? 'datepicker-day-selected' : ''
                } ${
                  isToday(dayObj.date) ? 'datepicker-day-today' : ''
                } ${
                  !isDateInRange(dayObj.date) ? 'datepicker-day-disabled' : ''
                }`}
                onClick={() => handleDateSelect(dayObj.date)}
                disabled={!isDateInRange(dayObj.date)}
                aria-label={dayObj.date.toDateString()}
              >
                {dayObj.date.getDate()}
              </button>
            ))}
          </div>

          <div className="datepicker-footer">
            <button
              type="button"
              className="datepicker-today-btn"
              onClick={() => handleDateSelect(new Date())}
            >
              Today
            </button>
            <button
              type="button"
              className="datepicker-clear-btn"
              onClick={() => {
                setInputValue('')
                if (onChange) onChange('')
              }}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DatePicker