import * as React from 'react'
import styled from 'styled-components'

// Types ===================================
export interface Props {
  onIncrement?: () => void
  onDecrement?: () => void
}
// Styles ==================================
const Button = styled.button`
  margin: 10px;
  color: #222;
`
// =========================================
const SpeedControl = ({ onIncrement, onDecrement }: Props) => {
  return (
    <div className="container text-center">
      <div className="row">
        <h5>Increase or decrease the speed of the logo</h5>
        <Button
          className="btn btn-default btn-lg"
          type="button"
          onClick={onDecrement}
        >
          -
        </Button>
        <Button
          className="btn btn-default btn-lg"
          type="button"
          onClick={onIncrement}
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default SpeedControl
