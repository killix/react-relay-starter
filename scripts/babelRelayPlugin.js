import getBabelRelayPlugin from "babel-relay-plugin";
import schema from "../src/graphql/schema.json";
export default getBabelRelayPlugin(schema.data);
