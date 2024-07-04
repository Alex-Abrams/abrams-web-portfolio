import React from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Access the externalId from params and parse it to an integer
  debugger;
  const { externalId } = params;
  const parsedExternalId = parseInt(externalId, 10); // Parse as an integer
  console.log("parsedExternalId in getStaticProps:", parsedExternalId);
  debugger;

  return {
    props: {
      externalId: parsedExternalId, // Pass the parsed value as a prop
    },
  };
}

export default function EventPage({ externalId }) {
  debugger;
  const router = useRouter();
  const { externalId: routeExternalId } = router.query;
  console.log("externalId from URL:", routeExternalId);

  return (
    <div>
      <p>External ID from getStaticProps: {typeof externalId}</p>
      <p>External ID from URL: {typeof routeExternalId}</p>
    </div>
  );
}
