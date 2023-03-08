use hotel
db.dropDatabase()

db.bookings.insertMany([
{
    name : 'Chris Donnely',
    email : 'chris1234@yahoo.com',
    status : 'No'
},
{
    name : 'Daniel Piper',
    email : 'dannyboy@aol.com',
    status : 'Yes'
},
{
    name : 'Phil McKrackin',
    email : 'pkrackin@msn.com',
    status : 'No'
},
{
    name : 'El',
    email : 'strangerthings@gmail.com',
    status : ''
},
{
    name : 'Vittoria Moresco',
    email : 'vittoria.moresco@hotmail.com',
    status : ''
}
])