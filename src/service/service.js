//função para realizar a request e retornar o valor randômico da api.
export const getValue = async () => {
  try {
    const response = await fetch(
      "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
    );
    const result = await response.json();
    //verifica se caiu ou não no erro, caso entre no erro, retorna o status
    if (!result.value) {
      throw new Error(`${response.status}`);
    }
    return { value: `${result.value}` }; //retorna o valor da request.
  } catch (e) {
    return e;
  }
};
