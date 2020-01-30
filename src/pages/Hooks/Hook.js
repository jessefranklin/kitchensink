import React from 'react';
import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import { gql } from 'apollo-boost';
import t from 'prop-types';

import { shallowEqual, useDispatch, useSelector } from "react-redux";


import styled from 'styled-components';

const FETCH = gql`
    query FetchPosts($page: Int){
        posts(page: $page) {
            posts {
                _id
                title
                content
                imageUrl
                creator {
                    name
                }
                createdAt
            }
            totalPosts
        }
    }
`;

function Hook() {
    // const { loading, error, data } = useQuery(FETCH, {
    //     variables: { page: 1 }
    // });
    const { count, user } = useSelector(state => ({
        count: state.counter.count,
        user: state.user,
      }));
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch()}>Add to count</button>
    )
}

Hook.propTypes = {
    name: t.string,
    email: t.string,
    itemPrice: t.number,
    id: t.string,
    removeHolder: t.func,
    showRemoveButton: t.bool,
};


export default Hook