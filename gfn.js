/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('gfn');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
  filterCreep: function filterCreep(creep, str) {
        return creep.memory.role === str||'';
    }
};