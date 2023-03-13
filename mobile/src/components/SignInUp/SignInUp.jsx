class Section extends React.Component {
  render() {
    const Default = this.state.Default;
    let Section;
    if (Default) {
      Section = (
        <View>
          <Text>Register Screen</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity title="Register" onPress={() => alert("Register")}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      Section = (
        <View>
          <Text>Login Screen</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity title="Login" onPress={() => alert("Login")}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <>
        <Section />
      </>
    );
  }
}
