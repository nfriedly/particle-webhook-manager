import Ember from 'ember';

export function prettyPrint(params, hash) {
  var obj = params[0];
  try {
    return JSON.stringify(obj, null, hash.space || 2);
  } catch(invalidJsonErr) {
    return 'Invalid JSON: ' + invalidJsonErr.message;
  }
}

export default Ember.Helper.helper(prettyPrint);
