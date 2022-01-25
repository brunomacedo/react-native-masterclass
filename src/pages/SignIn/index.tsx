import React, {useContext} from 'react';
import {Button} from 'react-native-sb-chiper';
import {View, StyleSheet} from 'react-native';
import debounce from 'lodash/debounce';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

const SignIn: React.FC = () => {
  const {signIn: handleSignIn} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button
        variant="primary"
        label="Sign in"
        onPress={debounce(handleSignIn, 500)}
      />
    </View>
  );
};

export default SignIn;
