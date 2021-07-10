const endPoint =
  "https://prod-in.100ms.live/hmsapi/workshop9jul.app.100ms.live/";

const getToken = async (user_id) => {
  const response = await fetch(`${endPoint}api/token`, {
    method: "POST",
    body: JSON.stringify({
      user_id,
      role: "host", //host, teacher, guest, student
      type: "app",
      room_id: "60e8772442bbd4bd82f23ae6"
    })
  });
  const { token } = await response.json();
  return token;
};

export default getToken;