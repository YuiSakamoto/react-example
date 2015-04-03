var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Hello = React.createClass({
  getInitialState: function() {
    return {
      value: '(´・ω・｀)'
    };
  },
  onClick: function() {
    var value = this.state.value === '(´・ω・｀)' ? '(｀･ω･´)ゞ' : '(´・ω・｀)';
    this.setState({ value: value });
  },
  render: function() {
    var value = <span className="sample" key={this.state.value}>{this.state.value}</span>;
return (
  <div>
  <div>Animation!!<button onClick={this.onClick}>click!!</button></div>
<CSSTransitionGroup transitionName="sample">
{value}
</CSSTransitionGroup>
</div>
);
}
});

React.render(<Hello />, document.body);