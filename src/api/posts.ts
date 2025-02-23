import { Post } from '../types';
import { BASE_URL, getPostsFromServer } from './api';

export function getPostByUserId(userId?: number): Promise<Post[]> {
  if (!userId) {
    return getPostsFromServer();
  }

  return fetch(`${BASE_URL}/posts/?userId=${userId}`)
    .then(response => response.json());
}

export function getPostById(postId: number): Promise<Post> {
  return fetch(`${BASE_URL}/posts/${postId}`)
    .then(response => response.json());
}
