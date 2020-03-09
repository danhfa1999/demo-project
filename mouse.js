function Mouse(name) {
  this.dead = false;
  this.name = name;
}

Mouse.prototype.die = function() {
  this.dead = true;
};

module.exports = Mouse;
