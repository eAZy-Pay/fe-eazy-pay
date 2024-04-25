import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../components/layout/DefaultLayout.jsx';
import mainLogo from '../../assets/mainLogo.svg';
import { getSignIn } from '../../apis/AuthAPI.js';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (sessionStorage.getItem('user') !== null) {
      alert('이미 로그인된 상태입니다.');
      JSON.parse(user).isAdmin ? navigate('/admin') : navigate('/');
    }
  }, [navigate]);

  const requestLogin = async (e) => {
    e.preventDefault();
    await getSignIn(userName, userPassword).then((response) => {
      if (response.status === 'UNAUTHORIZED') {
        setErrorMessage('유효하지 않은 사용자 이름 또는 비밀번호입니다.');
        setUserName('');
        setUserPassword('');
        return;
      } else if (response.status === 'OK') {
        const signedUser = {
          uid: response.uid,
          userName: response.name,
          isAdmin: response.isAdmin,
        };
        sessionStorage.setItem('user', JSON.stringify(signedUser));
        signedUser.isAdmin ? navigate('/admin') : navigate('/');
      }
    });
  };
  return (
    <>
      <DefaultLayout showNavBar={false}>
        <div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img className="mx-auto h-10 w-auto" src={mainLogo} alt="Your Company" />
              <p className="text-xs text-center">세상에서 가장 쉽고 편리한 결제</p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                method="POST"
                onSubmit={(e) => {
                  requestLogin(e);
                }}
              >
                <div>
                  <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-800">
                    아이디
                  </label>
                  <div className="mt-2">
                    <input
                      id="id"
                      name="id"
                      type="id"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      onClick={() => setErrorMessage('')}
                      autoComplete="username"
                      required
                      className="block w-full px-3 border-0 py-2.5 bg-gray-100 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="translate-x-[] block text-sm font-medium leading-6 text-gray-800"
                    >
                      비밀번호
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      onClick={() => setErrorMessage('')}
                      autoComplete="current-password"
                      required
                      className="block w-full px-3 border-0 py-2.5 bg-gray-100 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="h-[25px] mt-[10px] text-[#dc2626] text-center">{error}</div>
                  <button
                    type="submit"
                    className="flex w-full justify-center bg-blue-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <div className="flex justify-center m-3">
                <div className="mx-2">
                  <a href="#" className="mt-10 text-center text-sm text-gray-800">
                    비밀번호 찾기
                  </a>
                </div>

                <div className="mx-2">
                  <a href="#" className="mt-10 text-center text-sm text-gray-500">
                    아이디 찾기
                  </a>
                </div>

                <div className="mx-2">
                  <a href="#" className="mt-10 text-center text-sm text-gray-500">
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default LoginPage;
