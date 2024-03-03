export async function fetchResources() {
  // const url = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

  const data = await fetch("https://freetribenetwork.org/content/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          generalSettings {
            title
            description
          }
          posts(first: 10000) {
            edges {
              node {
                id
                excerpt
                title
                slug
              }
            }
          }
        }
      `,
    }),
  })
    .then((r) => r.json())
    .then((res) => console.log(res.data));

  return data;
}
