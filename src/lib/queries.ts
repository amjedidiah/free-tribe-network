import { gql } from "@apollo/client";

export const GET_RESOURCES_BY_CATEGORY_ID = gql`
  query GetResourcesByCategory(
    $id: ID!
    $env: String!
    $first: Int
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
        mediaDetails {
          height
          width
        }
      }
    }
  }
`;

export const GET_ACTIVITY_BY_SLUG = gql`
  query getActivityBySlug($slug: String!, $env: String!) {
    activities(where: { name: $slug, tag: $env }) {
      edges {
        cursor
        node {
          id
          title
          content
          excerpt
          slug
          categories {
            nodes {
              name
              id
              slug
            }
          }
          featuredImage {
            node {
              id
              mediaItemUrl
              title
            }
          }
          newsFieldGroup {
            dateTime
            schedule
            scheduleNotes
            venue
            venueNotes
          }
        }
      }
    }
  }
`;

export const GET_ACTIVITIES_BY_CATEGORY_NAME = gql`
  query getActivitiesByCategoryName(
    $categoryName: String!
    $env: String!
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    activities(
      where: { categoryName: $categoryName, tag: $env }
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
          content
          excerpt
          slug
          categories {
            nodes {
              name
              id
              slug
              parent {
                node {
                  slug
                }
              }
            }
          }
          featuredImage {
            node {
              id
              mediaItemUrl
              title
            }
          }
          newsFieldGroup {
            dateTime
            venue
          }
        }
      }
    }
  }
`;
