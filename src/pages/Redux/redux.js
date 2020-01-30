import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createRequest } from '../../actions/login';

import { bindActionCreators } from 'redux';
import * as commentActions from './actions';

const Redux = (props) => {
    const { id, content } = props;
    const { updateComment, deleteComment } = props.actions;

    const { data, createRequest } = this.props;

    const Button = (data) => {
        createRequest(data)
    }

    const editComment = () => updateComment(id, content);
    const removeComment = () => deleteComment(id);

    return (
        <Fragment>
            <Button onClick={() => Button(data)} />
            <button type="button" onClick={editComment}>Edit Comment</button>
            <button type="button" onClick={removeComment}>Remove Comment</button>
        </Fragment>
    )
}


const mapStateToProps = (state, ownProps) => ({
    data: state.data,
    name: state.data.find(data => data.id === ownProps.id )
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(commentActions, dispatch),
        createRequest: () => dispatch(createRequest(ownProps.id)),
        doSomething: (event) => dispatch(createRequest(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Redux);