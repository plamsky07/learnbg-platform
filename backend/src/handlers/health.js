export const handler = async () => {
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ok: true,
      service: "learnbg-api",
      ts: new Date().toISOString(),
    }),
  };
};
