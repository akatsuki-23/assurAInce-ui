// const API_ENDPOINT = 'https://e21d-103-181-238-106.ngrok-free.app/api/v1';
const API_ENDPOINT = "http://192.168.2.177:8000/api/v1";

const EMPLOYEE_CATEGORY_LIST = {
  Marketing: {
    title: "Marketing",
    bgColor: "#FFECE5",
    textColor: "#AD3307",
  },
  Support: {
    title: "Support",
    bgColor: "#E7F6EC",
    textColor: "#036B26",
  },
  Accounting: {
    title: "Accounting",
    bgColor: "#E3EFFC",
    textColor: "#04326B",
  },
  "Research and Development": {
    title: "Research and Development",
    bgColor: "#F0F2F5",
    textColor: "#344054",
  },
  "Product Management": {
    title: "Product Management",
    bgColor: "#E7F6EC",
    textColor: "#036B26",
  },
  default: {
    title: "Engineering",
    bgColor: "#E3EFFC",
    textColor: "#04326B",
  },
};

const PROJECT_CATEGORY_LIST = {
  FINTECH: {
    title: "Fintech",
    bgColor: "#FFECE5",
    textColor: "#AD3307",
  },
  BUSINESS: {
    title: "Business",
    bgColor: "#E7F6EC",
    textColor: "#036B26",
  },
  MEDICAL: {
    title: "Medical",
    bgColor: "#E3EFFC",
    textColor: "#04326B",
  },
  BIGDATA: {
    title: "Big Data",
    bgColor: "#F0F2F5",
    textColor: "#344054",
  },
  BIO_CHAIN: {
    title: "Bio Chain",
    bgColor: "#E3EFFC",
    textColor: "#04326B",
  },
};

export { API_ENDPOINT, PROJECT_CATEGORY_LIST, EMPLOYEE_CATEGORY_LIST };
