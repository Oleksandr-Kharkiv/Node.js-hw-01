import {program} from "commander";

import contactsService from "./contacts.js"

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts()
      return console.table(allContacts);

    case 'get':
      const oneContact = await contactsService.getContactById(id)
      return console.log(oneContact);

    case 'add':
      const newContact = await contactsService.addContact({name, email, phone})
      return console.log(newContact);

    case 'remove':
      const deleteContact = await contactsService.removeContact(id)
      return console.log(deleteContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({action:"list"});
// invokeAction({action: "get", id: 'C9sjBfCo4UJCWjzBnOtxl'});
// invokeAction({action: "add", name: "Ivan Ivanov", email: "ivan@ukr.net", phone: "234-23-45"});
// invokeAction({action: "remove", id: 'tpWNLuooDWj0G2UubDWbB'});

program
.option("--action <type>")
.option("--id <type>")
.option("--name <type>")
.option("--email <type>")
.option("--phone <type>")

program.parse();

const options = program.opts();
invokeAction(options);