import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <form onSubmit={this.props.add}><input type="text" value="" /><button>Add</button></form>
    }
});
