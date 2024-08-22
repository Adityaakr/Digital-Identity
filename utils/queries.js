import contract from './index';

function parseErrorMsg(e){
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
}

export async function getUsernameByAddress(userAddress){
    try {
        const contractObj = await contract();
        const username = await contractObj.getUsernameByAddress(userAddress);
        return username;
    } catch (error) {
        console.log(error);
        return parseErrorMsg(error);
    }
}

export async function createUser(
    username,
    basicInfo,
    professionalInfo,
    socialLinks,
    visibility
){
    try {
        const contractObj = await contract();
        const transactionResponse = await contractObj.createUser(
         username,
         basicInfo,
         professionalInfo,
         socialLinks,
         visibility
        );
        const reciept = await transactionResponse.wait();
        return reciept;
    } catch (error) {
        console.log(error);
        return parseErrorMsg(error);
    }
}

// edit user
export async function editUser(
    username,
    basicInfo,
    professionalInfo,
    socialLinks,
    visibility
){
    try {
        const contractObj = await contract();
        const transactionResponse = await contractObj.editUser(
         username,
         basicInfo,
         professionalInfo,
         socialLinks,
         visibility
        );
        const reciept = await transactionResponse.wait();
        return reciept;
    } catch (error) {
        console.log(error);
        return parseErrorMsg(error);
    }
}

//get user by username
export async function getUserByUsername(username){
  try {
    const contractObj = await contract();
    const user = await contractObj.getUserByUsername(username);
    return {
        basicInfo: {
            firstName: user.basicInfo.firstName,
            lastname: user.basicInfo.lastname,
            email: user.basicInfo.email,
            homeAddress: user.basicInfo.homeAddress,
            dateOfBirth: user.basicInfo.dateOfBirth,
            phoneNumber: user.basicInfo.phoneNumber,
        },
        professionalInfo: {
            education: user.professionalInfo.education,
            workHistory: user.professionalInfo.workHistory,
            skills: user.professionalInfo.skills,
            jobTitle: user.professionalInfo.jobTitle,
            info: user.professionalInfo.info,
            imageURL: user.professionalInfo.imageURL,
        }, 
        socialLinks: {
            x: user.socialLinks.x,
            instagram: user.socialLinks.instagram,
            linkedin: user.socialLinks.linkedin,
            facebook: user.socialLinks.facebook,
            twitter: user.socialLinks.twitter,
            youtube: user.socialLinks.youtube,
            linkedin: user.socialLinks.linkedin,
        },
        visibility: {
            education: user.visibility.education,
            workHistory: user.visibility.workHistory,
            phoneNumber: user.visibility.phoneNumber,
            homeAddress: user.visibility.homeAddress,
            dateOfBirth: user.visibility.dateOfBirth,
        }
    }
  } catch (error) {
    console.log(error);
    return parseErrorMsg(error);
  }
}

//get user by address
export async function getUserByAddress(address){
    try {
      const contractObj = await contract();
      const user = await contractObj.getUserByUsername(username);
      return {
          basicInfo: {
              firstName: user.basicInfo.firstName,
              lastname: user.basicInfo.lastname,
              email: user.basicInfo.email,
              homeAddress: user.basicInfo.homeAddress,
              dateOfBirth: user.basicInfo.dateOfBirth,
              phoneNumber: user.basicInfo.phoneNumber,
          },
          professionalInfo: {
              education: user.professionalInfo.education,
              workHistory: user.professionalInfo.workHistory,
              skills: user.professionalInfo.skills,
              jobTitle: user.professionalInfo.jobTitle,
              info: user.professionalInfo.info,
              imageURL: user.professionalInfo.imageURL,
          }, 
          socialLinks: {
              x: user.socialLinks.x,
              instagram: user.socialLinks.instagram,
              linkedin: user.socialLinks.linkedin,
              facebook: user.socialLinks.facebook,
              twitter: user.socialLinks.twitter,
              youtube: user.socialLinks.youtube,
              linkedin: user.socialLinks.linkedin,
          },
          visibility: {
              education: user.visibility.education,
              workHistory: user.visibility.workHistory,
              phoneNumber: user.visibility.phoneNumber,
              homeAddress: user.visibility.homeAddress,
              dateOfBirth: user.visibility.dateOfBirth,
          }
      }
    } catch (error) {
      console.log(error);
      return parseErrorMsg(error);
    }
  }
  


