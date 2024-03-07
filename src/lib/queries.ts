import { gql } from "@apollo/client";

export const GET_RESOURCES_BY_CATEGORY_ID = gql`
  query GetResourcesByCategory($id: ID!, $env: String!) {
    category(id: $id) {
      id
      name
      posts(where: { tag: $env }) {
        nodes {
          id
          title
          excerpt
          modifiedGmt
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          resourcesFieldGroup {
            minsread
            file {
              node {
                link
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_IMAGE_BY_TITLE = gql`
  query getImageByTitle($title: String!) {
    mediaItems(where: { title: $title }) {
      nodes {
        id
        mediaItemUrl
        caption
        description
        slug
        title
      }
    }
  }
`;
