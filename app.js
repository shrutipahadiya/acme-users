
 const state = { users: [] ,noOfPages:0};
let table = document.querySelector('#outerTable');



function createUserRow(user) {
   // console.log(user);
    const row = document.createElement('tr')
    const firstName = document.createElement('td')
    firstName.classList.add('firstname');
    firstName.innerText = `${user.firstName}`;
    row.append(firstName);
    const lastName = document.createElement('td')
    lastName.classList.add('lastname');
    
    lastName.innerText = `${user.lastName}`;
    row.append(lastName);
  
    const email = document.createElement('td')
    email.classList.add('email');
    email.innerText = `${user.email}`;
    row.append(email);
    const title = document.createElement('td')
    email.classList.add('title');
    title.innerText = `${user.title}`;
    row.append(title);
   // console.log(row);
    return row;

}





function calculateNoOfPages(){
 window.fetch('https://acme-users-api-rev.herokuapp.com/api/users').then(
     response => {
         return response.json()
     }
 ).then(
     data => {
        let count = data.count;
        noOfPages = Math.ceil(count/50);
        console.log(noOfPages);
        //let pagenolist = [];

        for(let i=0;i<noOfPages;i++){
           const page = document.createElement('li')
           const a = document.createElement('a');
           a.setAttribute('href',`#${i+1}`);
           a.setAttribute('value',i)
           a.innerText = i+1;
          page.append(a);

         page.addEventListener("click", (ev) => {
             console.log(ev);
         })

         document.querySelector('#pager').append(page);
        }

     }
 )

    
    
}


function render() {

   
    window.fetch('https://acme-users-api-rev.herokuapp.com/api/users').then(
        response => {
            return response.json()
        }
    ).then(data => {
        console.log("data ",data);
       state.users=data.users;

       // console.log(state.users);
        state.users.forEach(user => {
           // console.log(user);
            table.append(createUserRow(user));

        })
    }
    )

   // console.log(state.users);

}









calculateNoOfPages();

//render();
