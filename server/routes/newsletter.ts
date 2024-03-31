export default defineEventHandler(async (event) => {
  return sendRedirect(event, "my-new-domain.com", 302);
});
