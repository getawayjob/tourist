// Generated by CoffeeScript 1.6.2
(function() {
  BasicTourTests('with Tourist.Tip.Simple', function() {
    return new Tourist.Tour({
      stepOptions: this.options,
      steps: this.steps,
      cancelStep: this.finalQuit,
      successStep: this.finalSucceed,
      tipClass: 'QTip'
    });
  });

}).call(this);