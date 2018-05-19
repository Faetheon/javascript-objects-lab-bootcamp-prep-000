let recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  recipes = { prop: 1 };
  recipes[key] = value;
  return recipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var mine = Object.assign({}, object)
  delete mine[key];
  return mine;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var mine = Object.assign({}, object);
  delete mine[key];
  object = Object.assign({}, mine);
  return object;
}
function 