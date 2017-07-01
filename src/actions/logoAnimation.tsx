import * as constants from '../constants'

// Types ===================================
export interface IncrementLogoSpeed {
  type: constants.INCREMENT_LOGO_SPEED
}

export interface DecrementLogoSpeed {
  type: constants.DECREMENT_LOGO_SPEED
}

export type LogoSpeedAction = IncrementLogoSpeed | DecrementLogoSpeed
// =========================================
export function incrementLogoSpeed(): IncrementLogoSpeed {
  return {
    type: constants.INCREMENT_LOGO_SPEED,
  }
}

export function decrementLogoSpeed(): DecrementLogoSpeed {
  return {
    type: constants.DECREMENT_LOGO_SPEED,
  }
}
