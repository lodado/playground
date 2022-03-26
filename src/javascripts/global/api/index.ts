export const DOMAIN = 'http://localhost:8080/';
// 과제가 아닌 production code 라면 dotenv 사용

export const API = {
  GET: {
    CARLIST: `${DOMAIN}carClasses`,
    CAR: `${DOMAIN}carClass`,
  },
};
