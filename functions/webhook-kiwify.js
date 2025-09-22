exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  let body = {};
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: 'Invalid JSON',
    };
  }

  console.log('Recebido da Kiwify:', body);

  // Aqui você pode processar, salvar no banco, chamar outra API etc.
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Webhook recebido com sucesso!' }),
  };
};
