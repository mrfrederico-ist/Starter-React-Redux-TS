import { connect, Dispatch } from 'react-redux'

import { StoreState } from '../index'
import LogoAnimation from '../components/LogoAnimation'
import {
  LogoSpeedAction,
  incrementLogoSpeed,
  decrementLogoSpeed,
} from '../actions/logoAnimation'

export function mapStateToProps({ animationDuration }: StoreState) {
  return {
    animationDuration,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<LogoSpeedAction>) {
  return {
    onIncrement: () => dispatch(incrementLogoSpeed()),
    onDecrement: () => dispatch(decrementLogoSpeed()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoAnimation)
