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

export default {
  personalInfo
}; 