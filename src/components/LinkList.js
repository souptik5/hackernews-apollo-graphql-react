import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <React.Fragment>
          {data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

//   const linksToRender = [
//     {
//       id: "1",
//       description: "Prisma gives you a powerful database toolkit 😎",
//       url: "https://prisma.io",
//     },
//     {
//       id: "2",
//       description: "The best GraphQL client",
//       url: "https://www.apollographql.com/docs/react/",
//     },
//   ];

//   return (
//     <div>
//       {linksToRender.map((link) => (
//         <Link key={link.id} link={link} />
//       ))}
//     </div>
//   );
// };

export default LinkList;
