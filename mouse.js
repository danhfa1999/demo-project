function Mouse(name) {
  this.isDead = false;
  this.name = name;
}

Mouse.prototype.die = function() {
  this.isDead = true;
};

module.exports = Mouse;
