const form = document.getElementById('crud-form');
const userList = document.getElementById('user-list');

let users = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  
  if (name === '' || email === '') {
    alert(' preencha todos os campos.');
    return;
  }
  
  const user = {
    id: Date.now(),
    name,
    email
  };
  
  users.push(user);
  
  renderUser(user);
  
  nameInput.value = '';
  emailInput.value = '';
});

function renderUser(user) {
  const item = document.createElement('li');
  item.innerHTML = `
    <strong>${user.name}</strong>: ${user.email}
    <button class="delete-btn" onclick="deleteUser(${user.id})">Excluir</button>
  `;
  userList.appendChild(item);
}

function deleteUser(userId) {
  users = users.filter(user => user.id !== userId);
  renderUsers();
}

function renderUsers() {
  userList.innerHTML = '';
  users.forEach(renderUser);
}
