const sampleData = require('../constants/sampleData.json');

const emailDatabase = sampleData;

const FORMATS = {
  first_name_last_name: 'first_name_last_name',
  first_name_initial_last_name: 'first_name_initial_last_name',
};

exports.guessEmailFormat = (name, domain) => {
  const names = name.toLowerCase().split(' ');
  const firstName = names[0];
  const lastName = names[1] || '';

  let format = null;

  for (const [fullName, email] of Object.entries(emailDatabase)) {
    const emailDomain = email.split('@')[1];
    if (emailDomain === domain) {
      const emailParts = email.split('@')[0];

      if (emailParts === `${fullName.toLowerCase().replace(' ', '')}`) {
        format = FORMATS.first_name_last_name;
      } else if (emailParts === `${fullName.toLowerCase()[0]}${fullName.toLowerCase().split(' ')[1]}`) {
        format = FORMATS.first_name_initial_last_name;
      }

      if (format) break;
    }
  }

  if (format === FORMATS.first_name_last_name) {
    return `${firstName}${lastName}@${domain}`;
  } else if (format === FORMATS.first_name_initial_last_name) {
    return `${firstName[0]}${lastName}@${domain}`;
  }

  return null;
};
