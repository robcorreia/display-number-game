export const getValue = async () => {
  try {
    const response = await fetch(
      "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
    );
    const result = await response.json();
    return result.value;
  } catch (e) {
    console.log("deu erro", e);
    return e;
  }
};
