/*
 * action types
 */
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const LOAD_POST = 'LOAD_POST';

/*
 * action creators
 */

export function addPost(post) {
    return {type: ADD_POST, post}
}

export function removePost(post) {
    return {type: REMOVE_POST, post}
}

export function loadPost(post) {
    return {type: LOAD_POST, post}
}