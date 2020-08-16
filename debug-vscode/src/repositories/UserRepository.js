const users = ["Gabriel", "Jaqueline", "Karen", "Gabriele"];

export function getUsers() {
  return users;
  // return [];
}

export function addUser(user) {
  users.push(user);
}
