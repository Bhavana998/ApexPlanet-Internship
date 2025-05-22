// Toggle sections visibility
const sections = document.querySelectorAll('.content');
const navLinks = document.querySelectorAll('.nav ul li a');

function showSection(sectionId) {
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Navigation link click handling
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    showSection(targetId);
  });
});

// Default section
showSection('form-section');

// To-Do List functionality
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    alert('Please enter a task!');
    return;
  }
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(removeButton);
  taskList.appendChild(taskItem);
  taskInput.value = '';
});

// Image Gallery functionality
const imageUrlInput = document.getElementById('image-url');
const addImageButton = document.getElementById('add-image');
const gallery = document.getElementById('gallery');

addImageButton.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  if (!imageUrl) {
    alert('Please enter an image URL!');
    return;
  }
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  image.src = imageUrl;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.addEventListener('click', () => {
    gallery.removeChild(imageContainer);
  });

  imageContainer.appendChild(image);
  imageContainer.appendChild(removeButton);
  gallery.appendChild(imageContainer);
  imageUrlInput.value = '';
});
