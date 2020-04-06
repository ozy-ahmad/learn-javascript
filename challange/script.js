const myContacts = [
    {
        id : 1,
        name: 'Alpha avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        favorive: true,
        rating: 9,
        gender: 'male',
        tags: ['popular', 'cool']
    }, {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@braverian.com',
        gender: 'female',
    }, {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+62 813 363636',
        email: 'gamma@gacurio.dev',
        gender: 'male',
    }
]

//create contact console with method show contact, add contact, filter contact and delete contact.

const showContacts = contacts => {
    for (let i = 0; i < contacts.length; i++)
    {
        const contact = contacts[i]
        console.log(`[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}> ${contact.gender}`) 
    }
}
showContacts(myContacts)


const addContact = 
    {
        id: 4,
        name: 'ahmad fakhrozy',
        phone: '+62 812 737373',
        email: 'ahmadfakhrozy@gmail.com',
        gender: 'male',
    }

const newContacts = myContacts.push(addContact);
console.log(myContacts);

// filter contacts

const filterContact = myContacts.filter((item) => {
        return item.gender == 'female';    
})
console.log(filterContact);

myContacts.pop(filterContact);
console.log(myContacts);
