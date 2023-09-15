import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { login } from './api';
import { userDetails } from '../../store/atoms';
import { LogoIcon } from '../../components/icons';
import GoogleButton from './components/google-button/GoogleButton';

const LoginPage = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [showOTP, setShowOTP] = useState(false);

  const [OTP, setOTP] = useState('');
  const [timeLeft, setTimeLeft] = useState(150);

  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userDetails);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    if (user.email) {
      navigate('/home');
    }
  }, [user]);
  1;

  const onLogIn = useCallback(async () => {
    if (type === 'login') {
      const resp = await login(email, password);

      if (resp) {
        localStorage.setItem('token', resp?.token);

        setUser(resp.user || {});
      }
    } else {
      setShowOTP(true);
    }
  }, [password, email, type, rePassword]);

  const OTPDone = useCallback(async () => {
    const resp = await login(email, password);

    if (resp) {
      localStorage.setItem('token', resp?.token);

      setUser(resp.user || {});
    }
  }, [email, password]);

  // WORST CODE IN MY LIFE
  // IM SO SORRY
  const inputRef = useRef(null);

  useEffect(() => {
    if (showOTP && inputRef?.current) {
      console.log(inputRef.current);
      inputRef.current.focus?.();
    }

    const timeout = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [showOTP]);

  useEffect(() => {
    (async () => {
      if (OTP.length === 5) {
        OTPDone();
      }
    })();
  }, [OTP]);

  return (
    <div className="h-screen w-screen p-[20px] flex">
      <div className="h-full w-[45%] bg-[#101928] rounded-[30px] px-[60px] py-[50px] flex flex-col justify-between">
        {/* TODO: New font for main logo */}
        <div className="flex flex-row items-center gap-[6px] py-2">
          <LogoIcon className="flex items-center" />
          <div className="text-[30px] font-medium items-center text-white">
            AssurAInce
          </div>
        </div>

        <div className="flex flex-col gap-[32px] justify-between">
          <div className="text-[60px] font-semibold leading-[66px] text-white">
            Lorem Ipsum is simply dummy text of the printing
          </div>
          <div className="text-[18px] text-[#E4DBDB] opacity-[0.7]">
            Our comprehensive design system offers you an unparalleled range of
            components, sparking creativity and boosting efficiency.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[55%] px-[10%] h-full">
        <div className="flex flex-col justify-center w-full">
          {showOTP ? (
            <>
              <div className="text-[36px] font-semibold leading-[43px] mb-[8px]">
                Enter OTP
              </div>
              <div className="text-[#645D5D] text-[14px] leading-[20px] mb-[32px]">
                {`Check your mail ${email} for the OTP`}
              </div>
              <input
                className="absolute opacity-0"
                ref={inputRef}
                value={OTP}
                onChange={(e) => {
                  setOTP(e.target.value);
                }}
              />
              <div className="flex gap-[16px] mb-[16px]">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div
                    onClick={() => {
                      if (inputRef.current) {
                        inputRef.current.focus();
                      }
                    }}
                    key={item}
                    className="border border-[#D0D5DD] w-[54px] h-[56px] outline-none rounded-[6px] flex items-center justify-center text-[#645D5D] text-[30px] font-medium"
                  >
                    {OTP[index]}
                  </div>
                ))}
              </div>
              <div className="text-[14px] text-[#645D5D] font-normal">
                {`Resend OTP in `}
                <span className="font-semibold">{formatTime(timeLeft)}</span>
              </div>
            </>
          ) : (
            <>
              <div className="text-[36px] font-semibold leading-[43px] mb-[8px]">
                {type === 'login' ? 'Welcome back!' : 'Get started!'}
              </div>
              {type === 'login' ? (
                <div className="flex gap-[4px] mb-[32px] items-center">
                  <div className="text-[#645D5D] text-[14px] leading-[20px]">
                    Don’t have an account?
                  </div>
                  <div
                    className="text-purple3 leading-[20px] text-[14px] font-semibold cursor-pointer"
                    onClick={() => {
                      navigate('/signup');
                    }}
                  >
                    Sign Up
                  </div>
                </div>
              ) : (
                <div className="text-[14px] text-[#645D5D] mb-[32px]">
                  If you are already a member you can
                  <span
                    className="text-purple3 leading-[20px] text-[14px] font-semibold cursor-pointer"
                    onClick={() => {
                      navigate('/login');
                    }}
                  >
                    {' login '}
                  </span>
                  with your email address
                </div>
              )}
              <div className="flex flex-col gap-[4px] mb-[16px] w-full">
                <div className="leading-[20px] text-[14px] font-medium">
                  Email Address
                </div>
                {/* TODO: Outline color */}
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e?.target?.value);
                  }}
                  width={'100%'}
                  height={'56px'}
                />
              </div>
              <div className="flex flex-col gap-[4px] mb-[32px]">
                <div className="leading-[20px] text-[14px] font-medium">
                  {`${type === 'signup' ? 'Enter ' : ''}Password`}
                </div>
                {/* TODO: Password hide text */}
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e?.target?.value);
                  }}
                  width={'100%'}
                  height={'56px'}
                />
              </div>
              {type === 'signup' && (
                <div className="flex flex-col gap-[4px] mb-[32px]">
                  <div className="leading-[20px] text-[14px] font-medium">
                    Re Enter Password
                  </div>
                  {/* TODO: Password hide text */}
                  <Input
                    value={rePassword}
                    onChange={(e) => {
                      setRePassword(e?.target?.value);
                    }}
                    width={'100%'}
                    height={'56px'}
                  />
                </div>
              )}
              <Button
                bgColor="#985EFF"
                onClick={onLogIn}
                style={{
                  padding: '16px 24px',
                }}
              >
                <div className="text-[16px] font-semibold">
                  {type === 'login' ? 'Login' : 'Sign Up'}
                </div>
              </Button>
              {type === 'login' && (
                <div className="flex gap-[4px] mt-[26px] items-center justify-center">
                  <div className="text-[#645D5D] text-[14px] leading-[20px]">
                    Forgot Password?
                  </div>
                  <div className="text-purple3 leading-[20px] text-[14px] font-semibold cursor-pointer">
                    Recover
                  </div>
                </div>
              )}

              <div className="flex gap-[8px] items-center mt-[32px] mb-[28px]">
                <hr className="text-[#F0F2F5] w-full" />
                <div className="text-[#667185] text-[14px]">Or</div>
                <hr className="text-[#F0F2F5] w-full" />
              </div>

              <GoogleButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
