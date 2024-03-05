import { gql } from "@apollo/client";

export const GET_RESOURCES_CATEGORIES_DATA = gql`
  query GetResourcesCategoriesData($databaseId: ID!) {
    category(id: $databaseId) {
      databaseId
      children {
        edges {
          node {
            databaseId
            posts {
              edges {
                node {
                  excerpt
                  id
                  title(format: RENDERED)
                  modifiedGmt
                  featuredImage {
                    node {
                      altText
                      link
                    }
                  }
                  link
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`;
