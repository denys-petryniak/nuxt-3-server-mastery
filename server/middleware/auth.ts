export default defineEventHandler(async (event) => {
  const auth = getCookie(event, "pokemon-auth");
  const url = getRequestURL(event);

  if (auth || url.pathname === "/login") {
    return;
  }

  return sendRedirect(event, "/login", 302);

  // if (!auth) {
  //   throw createError({
  //     statusCode: 401,
  //     statusMessage: "Unauthorized",
  //   });
  // }
});
