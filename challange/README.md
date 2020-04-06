# Challange week-3: day-1

```javascript
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
```
## create contact console with method show contact, add contact, filter contact and delete contact.

### Show contact
```javascript
const showContacts = contacts => {
    for (let i = 0; i < contacts.length; i++)
    {
        const contact = contacts[i]
        console.log(`[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}> ${contact.gender}`) 
    }
}
showContacts(myContacts)
```
### add contact
```javascript
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
```

### filter contacts
```javascript
const filterContact = myContacts.filter((item) => {
        return item.gender == 'female';    
})
console.log(filterContact);
```

### delete contact
```javascript
myContacts.pop(filterContact);
console.log(myContacts);
```