import { connect } from 'react-redux'

import Header from '../components/Header'
import { StoreState } from '../index'

export function mapStateToProps({ animationDuration }: StoreState) {
  return {
    animationDuration,
  }
}

export default connect(mapStateToProps, {})(Header)
