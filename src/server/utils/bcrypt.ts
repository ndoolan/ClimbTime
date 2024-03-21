import bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 12;

async function encryptPass(password: string) {
  try {
    const encrypt = await bcrypt.hash(password, SALT_WORK_FACTOR);
    return encrypt;
  } catch (error) {
    throw new Error(`Failed to encrypt password: ${error}`);
  }
}

async function validatePass(password: string, userPassword: string) {
  try {
    console.log('preCRYPT', password, userPassword);
    const result = await bcrypt.compare(password, userPassword);
    console.log('postCRYPT', result);
    // if (!validPass) return 'Invalid Credentials';
    return result;
  } catch (error) {
    throw new Error(`Password comparison failed: ${error}`);
  }
}

export { encryptPass, validatePass };
