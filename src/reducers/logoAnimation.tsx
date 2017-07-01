import { fromJS } from 'immutable'

import { LogoSpeedAction } from '../actions/logoAnimation'
import { StoreState } from '../index'
import { INCREMENT_LOGO_SPEED, DECREMENT_LOGO_SPEED } from '../constants/index'

export function logoAnimation(
  state: StoreState,
  action: LogoSpeedAction,
): StoreState {
  switch (action.type) {
    case INCREMENT_LOGO_SPEED:
      if (state.animationDuration === 1) {
        return state
      }
      return fromJS(state)
        .update('animationDuration', (value: number) => value - 1)
        .toObject()
    case DECREMENT_LOGO_SPEED:
      return fromJS(state)
        .update('animationDuration', (value: number) => Math.max(value + 1))
        .toObject()
    default:
      return state
  }
}
