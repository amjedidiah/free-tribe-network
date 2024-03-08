import { gql } from "@apollo/client";

export const GET_RESOURCES_BY_CATEGORY_ID = gql`
  query GetResourcesByCategory(
    $id: ID!
    $env: String!
    $first: Int!
    $last: Int
    $before: String
    $after: String
  ) {
    category(id: $id) {
      id
      name
      posts(
        where: { tag: $env }
        first: $first
        last: $last
        before: $before
        after: $after
      ) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
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
  }
`;

export const GET_IMAGE_BY_TITLE = gql`
  query getImageByTitle($title: String!) {
    mediaItems(where: { title: $title }) {
      nodes {
        id
        mediaItemUrl
        title
      }
    }
  }
`;
