import React from 'react';
import { connect } from 'react-redux';
import {
  SectionList,
  Text,
  Button,
  View,
  // CameraRoll,
} from 'react-native';

type Props = {
};


class Home extends React.Component<Props> {
    constructor(props){
        super(props);
        const { navigation } = props;
        navigation.navigate('Login');
    }
  render() {
    return (
      <View
      >
        <Text>INITIAL ROUTE</Text>
      </View>
    );
  }
}
const mapStateToProps = store => ({
});
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);