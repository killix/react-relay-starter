
class App extends React.Component {
  render() {
    return (
      <div>
          <p>
            Created by the <a href="https://github.com/killix">
              Killix.
            </a>
          </p>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        id,
      }
    `,
  },
});
