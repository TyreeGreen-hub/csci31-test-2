// 1.0 Use console.log to output your name
console.log('Tyree Green')

// 1.1 Use object longhand to create an object with properties: firstName, lastName
const object = { firstname: 'Tyree', lastname: 'Green'}
console.log(object)

// 1.2 Use JSON.stringify to console.log the object
console.log(JSON.stringify(object, null, 2))

// 1.3 Use "dot notation" to console.log the firstName property
console.log(object.firstname)

// 1.4 Use "square brackets" to console.log the lastName property
console.log(object['lastname'])

// 1.5 Use object shorthand to create an object with properties: title, subtitle. console.log the object
const title = 'Ichabod and Mr.Toad'
const subtitle = 'Disneys lost masterpiece'
const movie = { title, subtitle }
console.log(movie)

// 1.6 Use destructuring to pull the firstName property out of an object. console.log the firstName
const { firstname } = object
console.log(firstname)

// 1.7 Use destructured renaming to pull the lastName property out of an object, rename the property to "surname". console.log the surname.
const { lastname: sirname } = object
console.log(sirname)

// 1.8 Use spread syntax to create a new object from the old object, but also adds a new property called "secret". console.log the secret
const secret = 'thalassophobia'
const newObject = { ...object, secret }
console.log(newObject)

// 1.9 Use rest syntax to pull out the "secret" property, but put everything else into the personWithoutSecret property. console.log the personWithoutSecret
const { secret: copyOfSecret, ...personWithousSecret } = newObject
console.log(personWithousSecret)
console.log(copyOfSecret)