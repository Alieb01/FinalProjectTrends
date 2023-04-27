class Plan {
    constructor(id, product_id, duration, related_phase, status) {
      this.id = id;
      this.product_id = product_id;
      this.duration = duration;
      this.related_phase = related_phase;
      this.status = status;
    }
  }
  
  module.exports = Plan;
  