export class User extends Object {}

// Mock authenticated ID
const VIEWER_ID = 'me';


// Mock user data
var viewer = new User();
viewer.id = VIEWER_ID;
var usersById = {
  [VIEWER_ID]: viewer
};


export function getUser(id) {
  return usersById[id];
}

export function getViewer() {
  return getUser(VIEWER_ID);
}
