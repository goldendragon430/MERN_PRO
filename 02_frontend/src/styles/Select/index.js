import React, { useEffect, useRef, useState } from 'react'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown'
import AiFillCaretDown from '@meronex/icons/ai/AiFillCaretDown'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron,
  Header
} from './styles'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    notReload,
    notSelected,
    isCustomArrow,
    isMultipleArrow
  } = props

  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(option => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = useRef()
  const isOneOption = options?.length === 1;
  const handleSelectClick = (e) => {
    !open && setOpen(true)
  }

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeSelect)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('click', closeSelect)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!notAsync) {
      const _defaultOption = options?.find(option => option.value === defaultValue)
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
  }, [defaultValue, options])

  const handleChangeOption = (option) => {
    if (!notSelected) {
      setSelectedOption(option)
      setValue(option.value)
    }
    onChange && onChange(option.value)
    setOpen(false)
  }

  return (
    isOneOption ? (
      <SelectInput>
          <Selected>
            <Header>
            {options[0].content}
            </Header>
          </Selected>
        </SelectInput>
    ):(
      <SelectInput
        id='select-input'
        disabled={!notReload}
        onClick={handleSelectClick}
        ref={dropdownReference}
      >
        {!selectedOption && (
          <Selected>
            {placeholder || ''}
            <Chevron className='select-arrow'>
              {isCustomArrow ? <AiFillCaretDown /> : <BsChevronDown />}
            </Chevron>
          </Selected>
        )}
        {selectedOption && (
          <Selected>
            <Header>
              {selectedOption.showOnSelected || selectedOption.content}
            </Header>
            <Chevron className='select-arrow'>
              {isCustomArrow ? <AiFillCaretDown /> : <BsChevronDown />}
            </Chevron>
          </Selected>
        )}
        {open && options && (
          <Options id='list' position='right'>
            {
              options.map(option => (
                <Option
                  className='item'
                  key={option.value}
                  selected={value === option.value}
                  onClick={() => handleChangeOption(option)}
                >
                  {option.content}
                </Option>
              ))
            }
          </Options>
        )}
      </SelectInput>
    )
  )
}
