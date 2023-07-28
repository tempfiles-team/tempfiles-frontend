import styled from '@emotion/styled';

// CheckPasswordPageContainer 스타일 정의
export const CheckPasswordPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

// PasswordInputSection 스타일 정의
export const PasswordInputSection = styled.div`
  display: flex;
  margin: 4rem;
  position: relative; /* 아이콘 위치 조정을 위해 부모 요소에 position: relative 설정 */
  justify-content: space-between; /* 비밀번호 입력칸과 버튼을 좌우로 정렬 */
`;

// CheckPasswordInput 스타일 정의
export const CheckPasswordInput = styled.input`
  border: 0.4rem solid var(--color-border);
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  border-radius: 1rem;
  z-index: 1;
  outline: none;
  width: 50rem;
  height: 6rem;
  padding-left: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;

  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;

// EyeIconWrapper 스타일 정의
export const EyeIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem; /* 아이콘을 왼쪽 끝으로 이동 */
  transform: translateY(-50%);
  z-index: 1;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: var(--color-background-black);

  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;
