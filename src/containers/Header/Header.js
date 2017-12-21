import { connect } from 'react-redux';
import Header from 'components/Header';

function mapStateToProps({ user }) {
  return {
    user
  }
}

export default connect(mapStateToProps)(Header);
