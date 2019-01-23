import arrayBuffer from 'src/utils/arrayBuffer';

const runAttestation = async () => {
  if (!navigator.credentials) alert('お使いのブラウザではこの機能を使うことができません');
  // チャレンジ値の生成
  const challengeBuf = new Uint8Array(32);
  window.crypto.getRandomValues(challengeBuf);

  // 公開鍵生成リクエストのパラメータ
  const publicKey = {
    challenge: challengeBuf,
    rp: { name: 'FIDO Example Corporation' },
    user: {
      id: arrayBuffer.str2buf('MIIBkzCCATigAwIBAjCCAZMwggE4oAMCAQIwggGTMII='),
      name: 'test@example.com',
      displayName: 'Alice von Wunderland',
    },
    attestation: 'direct',
    pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
  };
  // 公開鍵生成リクエスト
  try {
    const attestation = await navigator.credentials.create({ publicKey });
    console.log(attestation);
    return attestation.rawId;
  } catch (e) {
    console.log(e);
  }
};

const runAssertion = async rawId => {
  if (!navigator.credentials) alert('お使いのブラウザではこの機能を使うことができません');
  // チャレンジ値の生成
  const challengeBuf = new Uint8Array(32);
  window.crypto.getRandomValues(challengeBuf);
  // 認証時のパラメータ
  const publicKey = {
    allowCredentials: [{ id: rawId, type: 'public-key' }],
    challenge: challengeBuf,
  };
  // 認証リクエスト
  try {
    const assertion = await navigator.credentials.get({ publicKey });
    console.dir(assertion);
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default {
  runAttestation,
  runAssertion,
};