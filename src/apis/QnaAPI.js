const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getQna = async (uid) => {
  const queryParams = new URLSearchParams({
    uid: uid,
  }).toString();

  const data = (
    await fetch(`${BASE_URL}/api/qnas?${uid ? `${queryParams}` : ``}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
  return data;
};

// Qna 게시글 삭제 요청
export const deleteQna = async (uid) => {
  const data = (
    await fetch(`${BASE_URL}/api/qnas?uid=${uid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
  return data;
};

// Qna 게시글 수정 요청
export const putQna = async (bodyObj) => {
  const data = (
    await fetch(`${BASE_URL}/api/qnas`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
  ).json();
  return data;
};

// Qna 게시글 수정 요청
export const postQna = async (bodyObj) => {
  const data = (
    await fetch(`${BASE_URL}/api/qnas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
  ).json();
  return data;
};
