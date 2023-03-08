use hotel
db.dropDatabase()

db.insertMany([
{
    Guest_name : 'Chris Donnely',
    Guest_Email : 'chris1234@yahoo.com',
    Checked_In : 'No'
},
{
    Guest_name : 'Daniel Piper',
    Guest_Email : 'dannyboy@aol.com',
    Checked_In : 'Yes'
},
{
    Guest_name : 'Phil McKrackin',
    Guest_Email : 'pkrackin@msn.com',
    Checked_In : 'No'
},
{
    Guest_name : 'El',
    Guest_Email : 'strangerthings@gmail.com',
    Checked_In : ''
},
{
    Guest_name : 'Vittoria Moresco',
    Guest_Email : 'vittoria.moresco@hotmail.com',
    Checked_In : ''
}
])