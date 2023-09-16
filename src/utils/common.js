export const getProfilePicture = (firstName, lastName, imageURL) => {
  if (imageURL) {
    return `<img style="width: 50px; height: 50px; border-radius: 100%" src="${imageURL}" alt="" />`;
  }
  return `<div style="width: 50px; height: 50px; border-radius: 100%; background-color:#F2E7FE; display: flex; align-items:center; justify-content: center; color: #344054; font-size: xl; font-weight: bold;">
        ${firstName[0]?.toUpperCase()} ${lastName[0]?.toUpperCase() ?? ""}
        </div>`;
};

export const formatNameWithImage = (firstName, lastName = "", imageURL) => {
  return `<div style="display: flex; flex-direction: row; align-items: center;">
      ${getProfilePicture(firstName, lastName, imageURL)}
          <span style="margin-left: 12px;">${firstName} ${lastName}</span>
        </div>`;
};
