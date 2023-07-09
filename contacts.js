import fs from "fs/promises";
import path from "path";
import {nanoid} from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

const updateContactsStorage = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

export const listContacts = async () => {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
}
  
export const getContactById = async (queryId) =>  {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === queryId );
    return result || null;
  }
  
export const addContact = async ({name, email, phone}) => {
    const contacts = await listContacts();
     const newContact = {
        id: nanoid(),
        name: name,
        email: email, 
        phone: phone,
     }
     contacts.push(newContact);
     await updateContactsStorage(contacts);
     return newContact;
    }

export const removeContact = async (queryId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === queryId );
  if(index === -1){
    return null;
  }  
  const [result] = contacts.splice(index, 1);
  await updateContactsStorage(contacts); 
  return result;
}
  

export default {
    listContacts,
    getContactById, 
    addContact,
    removeContact,
}
