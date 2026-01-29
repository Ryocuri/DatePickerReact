import { useState, useRef, useEffect } from 'react'
import './DatePicker.css'

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
 * - Responsive calendar grid
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.value - The selected date value in YYYY-MM-DD format
 * @param {function} props.onChange - Callback function called with formatted date string when date changes
 * @param {string} [props.placeholder='Select a date'] - Placeholder text for input field
 * @param {string} [props.id] - HTML id attribute for the input element
 * @param {string} [props.name] - HTML name attribute for the input element
 * @param {string} [props.label] - Label text for accessibility and display
 * @param {Date} [props.minDate] - Minimum selectable date (dates before this will be disabled)
 * @param {Date} [props.maxDate] - Maximum selectable date (dates after this will be disabled)
 * @param {string} [props.format='YYYY-MM-DD'] - Date format for display and parsing
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
  // Component State Management
  const [isOpen, setIsOpen] = useState(false)  // Controls calendar visibility
  const [currentMonth, setCurrentMonth] = useState(new Date())  // Month displayed in calendar
  const [inputValue, setInputValue] = useState(value)  // Current input field value
  const containerRef = useRef(null)  // Reference to container for click-outside detection

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
  useEffect(() => {
    setInputValue(value)
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
   * Formats a Date object to YYYY-MM-DD string
   * @param {Date} date - The date to format
   * @returns {string} Formatted date string (e.g., "2024-01-15")
   */
  const formatDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  /**
   * Parses a date string in YYYY-MM-DD format to a Date object
   * @param {string} dateString - The date string to parse
   * @returns {Date|null} Parsed Date object or null if invalid
   */
  const parseDate = (dateString) => {
    if (!dateString) return null
    const parts = dateString.split('-')
    if (parts.length === 3) {
      return new Date(parts[0], parts[1] - 1, parts[2])
    }
    return null
  }

  /**
   * Generates an array of days for the calendar grid
   * Includes null values for empty cells before the first day of the month
   * @param {Date} date - The month to generate days for
   * @returns {Array<Date|null>} Array of Date objects and null values
   */
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()  // 0 = Sunday, 6 = Saturday
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    // This aligns the calendar grid properly (e.g., if month starts on Wednesday, add 3 empty cells)
    for (let i = 0; i < startingDay; i++) {
      days.push(null)
    }
    
    // Add all days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
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
    const selected = parseDate(inputValue)
    if (!selected) return false
    return date.toDateString() === selected.toDateString()
  }

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
    
    const formattedDate = formatDate(date)
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
   * Handles manual input changes
   * Validates and parses the input, updates calendar view if valid
   * @param {Event} e - The input change event
   */
  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
    
    // Attempt to parse and validate the manually entered date
    const parsed = parseDate(newValue)
    if (parsed && isDateInRange(parsed)) {
      setCurrentMonth(parsed)  // Update calendar to show the entered month
      if (onChange) {
        onChange(newValue)
      }
    }
  }

  /**
   * Handles keyboard navigation
   * Escape: Close calendar
   * Enter: Open calendar (when closed)
   * @param {KeyboardEvent} e - The keyboard event
   */
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    } else if (e.key === 'Enter' && !isOpen) {
      setIsOpen(true)
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
          onKeyDown={handleKeyDown}
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
            <span className="datepicker-month-year">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
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
            {days.map((date, index) => (
              <button
                key={index}
                type="button"
                className={`datepicker-day ${
                  !date ? 'datepicker-day-empty' : ''
                } ${
                  date && isSelected(date) ? 'datepicker-day-selected' : ''
                } ${
                  date && isToday(date) ? 'datepicker-day-today' : ''
                } ${
                  date && !isDateInRange(date) ? 'datepicker-day-disabled' : ''
                }`}
                onClick={() => handleDateSelect(date)}
                disabled={!date || !isDateInRange(date)}
                aria-label={date ? date.toDateString() : undefined}
              >
                {date ? date.getDate() : ''}
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