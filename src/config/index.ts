import personalInfo from './personalInfo.json';

export type PersonalInfoType = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
};

export const getPersonalInfo = (): PersonalInfoType => {
  return personalInfo;
};

// 先將對象分配給變數，然後再導出
const config = {
  personalInfo
};

export default config; 
